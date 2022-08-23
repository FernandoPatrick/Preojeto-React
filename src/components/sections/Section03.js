import { Box, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { validaFormulario } from '../../utils';
import Button from '../button/Button';
import ContentSeparator from '../contentSeparator/ContentSeparator';
import Form from '../form/Form';

const defaultData = {
  nome: '',
  email: '',
};

function Section03() {
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
      toast.success('Dados salvos com sucesso!');
    }
  }

  return (
    <Box component="section" margin="100px auto 0">
      <ContentSeparator text="Compartilhe a novidade" />
      <Typography textAlign="center" marginTop="50px">
        Quer que seus amigos também ganhem a lista personalizada deles? Preencha
        agora!
      </Typography>
      <Form onSubmit={() => handleSubmit()}>
        <Box
          sx={(theme) => ({
            display: 'flex',
            gap: '15px',
            alignItems: 'center',
            margin: '15px',
            [theme.breakpoints.down('md')]: {
              display: 'block',
            },
          })}
        >
          <TextField
            fullWidth
            label="Nome do seu amigo:"
            variant="outlined"
            name="nome"
            value={data.nome}
            onChange={(e) => handleChange(e)}
            error={Boolean(errors.nome)}
            helperText={errors.nome || ' '}
          />
          <TextField
            fullWidth
            label="E-mail"
            variant="outlined"
            name="email"
            value={data.email}
            onChange={(e) => handleChange(e)}
            error={Boolean(errors.email)}
            helperText={errors.email || ' '}
          />
        </Box>
        <Box margin="0 auto" width="50%">
          <Button fullWidth text="Enviar" borderColor="#898989" type="submit" />
        </Box>
      </Form>
    </Box>
  );
}

export default Section03;
