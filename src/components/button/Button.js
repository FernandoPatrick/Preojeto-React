import { styled } from '@mui/material/styles';
import { Button as MuiButton } from '@mui/material';

const StyledButton = styled(MuiButton)({
  background: '#fff',
  color: '#9A9A9A',
  border: '1px solid transparent',
  textTransform: 'none',
  '&:hover': {
    background: '#fff',
  },
});

function Button({
  sx,
  text,
  borderColor = 'transparent',
  type = 'button',
  margin,
  fullWidth = false,
  onClick,
}) {
  return (
    <StyledButton
      fullWidth={fullWidth}
      variant="contained"
      sx={{ ...sx, borderColor, margin }}
      type={type}
      onClick={onClick}
    >
      {text}
    </StyledButton>
  );
}

export default Button;
