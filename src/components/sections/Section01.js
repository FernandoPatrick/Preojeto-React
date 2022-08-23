import {
  Box,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from '@mui/material';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { validaFormulario } from '../../utils';
import Button from '../button/Button';
import Form from '../form/Form';

const defaultData = {
  nome: '',
  email: '',
  cpf: '',
  checked: '',
};

function Section01() {
  const [data, setData] = useState(defaultData);
  const [errors, setErrors] = useState(defaultData);

  function handleChange(event) {
    setData({ ...data, [event.target.name]: event.target.value });
  }

  function handleSubmit() {
    const error = {};
    validaFormulario(data, (campo, msg) => (error[campo] = msg));
    setErrors(error);
    if (Object.keys(error).length === 0) {
      setErrors(defaultData);
      setData(defaultData);
      toast.success('Dados salvos com sucesso!')
    }
  }

  return (
    <Box
      component="section"
      sx={(theme) => ({
        display: 'flex',
        gap: '60px',
        [theme.breakpoints.down('md')]: {
          display: 'block',
        },
      })}
    >
      <Box flex="2">
        <Typography component="h2" fontSize="1.5rem">
          Ajude o algorítimo a ser mais certeiro
        </Typography>
        <Typography marginTop="35px">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit ea
          laudantium a placeat fugiat molestiae ullam consectetur eligendi culpa
          consequuntur minima, accusamus maxime optio ab sint. Accusantium
          eveniet nisi laborum. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Consequatur numquam voluptatem ut asperiores error
          impedit necessitatibus atque porro, ipsum iste sit iusto illum eum
          quae est veritatis omnis. Consequatur, officiis.
        </Typography>
        <Typography marginTop="20px">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
          mollitia molestias est laborum? Ex ipsam at perferendis iure
          recusandae ad beatae. Sit nemo magni at, amet ipsa id rem quisquam?
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Exercitationem neque facere dolore nemo, ipsa ratione cupiditate magni
          repudiandae, soluta similique incidunt ullam reiciendis, magnam earum
          deleniti sequi vero molestiae harum.
        </Typography>
      </Box>
      <Form
        onSubmit={() => handleSubmit()}
        sx={(theme) => ({
          [theme.breakpoints.down('md')]: {
            marginTop: '30px',
          },
        })}
      >
        <TextField
          label="Seu Nome"
          variant="outlined"
          name="nome"
          value={data.nome}
          onChange={(e) => handleChange(e)}
          error={Boolean(errors.nome)}
          helperText={errors.nome}
        />
        <TextField
          sx={{ margin: '25px 0' }}
          label="E-mail"
          variant="outlined"
          name="email"
          value={data.email}
          onChange={(e) => handleChange(e)}
          error={Boolean(errors.email)}
          helperText={errors.email}
        />
        <TextField
          label="CPF"
          type="number"
          variant="outlined"
          name="cpf"
          value={data.cpf}
          onChange={(e) => handleChange(e)}
          error={Boolean(errors.cpf)}
          helperText={errors.cpf}
        />
        <FormControl>
          <RadioGroup
            sx={{ display: 'flex', flexDirection: 'row', marginTop: '15px' }}
          >
            <FormControlLabel
              control={<Radio />}
              label="Feminino"
              name="checked"
              value="masculino"
              checked={data.checked === 'masculino'}
              onChange={(e) => handleChange(e)}
            />
            <FormControlLabel
              control={<Radio />}
              label="Masculino"
              name="checked"
              value="feminino"
              checked={data.checked === 'feminino'}
              onChange={(e) => handleChange(e)}
            />
          </RadioGroup>
          {errors.checked && (
            <Typography
              color="#d32f2f"
              fontSize="0.75rem"
              marginLeft="14px"
              fontWeight={400}
            >
              {errors.checked}
            </Typography>
          )}
        </FormControl>
        <Button
          margin="30px 0 0"
          text="Enviar"
          borderColor="#898989"
          type="submit"
        />
      </Form>
    </Box>
  );
}

export default Section01;
