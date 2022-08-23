import { Box } from '@mui/material';

function Form({
  children,
  onSubmit,
  display = 'flex',
  flexDirection = 'column',
  sx,
}) {
  function handleSubmit(event) {
    event.preventDefault();
    if (onSubmit) {
      onSubmit(event);
    }
  }

  return (
    <Box
      noValidate
      component="form"
      onSubmit={(e) => handleSubmit(e)}
      flex="1.2"
      display={display}
      flexDirection={flexDirection}
      sx={sx}
    >
      {children}
    </Box>
  );
}

export default Form;

