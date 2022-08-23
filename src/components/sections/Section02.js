import { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import axios from 'axios';
import ContentSeparator from '../contentSeparator/ContentSeparator';
import Grid from '../grid/Grid';
import Card from '../card/Card';
import Button from '../button/Button';

const defaultData = {
  products: [],
  nextPage:
    'https://frontend-intern-challenge-api.iurykrieger.vercel.app/products?page=1',
};

function Section02() {
  const [data, setData] = useState(defaultData);

  function getProdutos() {
    axios.get(data.nextPage).then(({ data: { products, nextPage } }) => {
      setData({
        products: [...data.products, ...(products || [])],
        nextPage: nextPage ? `https://${nextPage}` : '',
      });
    });
  }

  useEffect(() => {
    getProdutos();
  }, []);

  return (
    <Box component="main" margin="30px 0 0">
      <Box margin="30px 0">
        <ContentSeparator text="Sua seleção especial" />
      </Box>
      <Grid>
        {data?.products.map(
          ({ id, description, name, image, oldPrice, price }) => (
            <Card
              key={id}
              name={name}
              image={image}
              oldPrice={oldPrice}
              price={price}
              description={description}
            />
          )
        )}
      </Grid>
      <Button
        text="Ainda mais produtos aqui!"
        margin="30px 0 0"
        sx={{ transform: 'translate(-50%)', left: '50%' }}
        onClick={() => getProdutos()}
      />
    </Box>
  );
}

export default Section02;
