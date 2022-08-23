import { Box, Typography } from '@mui/material';
import Button from '../button/Button';
import { formataNumero } from '../../utils';

function Card({ name, image, oldPrice, price, description }) {
  return (
    <Box
      sx={{
        borderRadius: '10px',
        transition: 'all 400ms ease',
        '&:hover': {
          boxShadow: '5px 3px 20px 0px rgba(0,0,0,0.48)',
        },
      }}
    >
      <Box
        sx={{
          background: `url(${image})`,
          height: '300px',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <Box padding="10px 5px">
        <Typography margin="7px 0" fontSize="1.2rem">
          {name}
        </Typography>
        <Typography>{description}</Typography>
        <Typography marginTop="5px">De: R${formataNumero(oldPrice)}</Typography>
        <Typography margin="5px 0" fontSize="1.1rem" fontWeight={600}>
          Por: R${formataNumero(price)}
        </Typography>
        <Typography marginBottom="15px">
          ou 2x de R${formataNumero(Number(price) / 2)}
        </Typography>
        <Button borderColor="#898989" fullWidth text="Comprar" />
      </Box>
    </Box>
  );
}

export default Card;
