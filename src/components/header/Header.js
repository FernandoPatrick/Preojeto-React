import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import header from '../../img/header.svg';
import Button from '../button/Button';

const StyledAppBar = styled(AppBar)({
  background: '#fff',
  backgroundImage: `url(${header})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  display: 'flex',
  flexDirection: 'column',
  padding: '60px 0 0',
  height: '500px',
});

function Header() {
  return (
    <StyledAppBar elevation={0} position="static">
      <Typography textAlign="center" fontSize="1.5rem" component="h2">
        uma seleção de produtos
      </Typography>
      <Typography
        marginBottom="10px"
        textAlign="center"
        fontSize="3rem"
        component="h1"
      >
        especial para você
      </Typography>
      <Typography textAlign="center" fontSize="1rem" component="h3">
        Todos os produtos desta lista foram selecionados a partir da sua
        navegação. Aproveite!
      </Typography>
      <Box
        sx={(theme) => ({
          display: 'flex',
          marginTop: '50px',
          gap: '30px',
          justifyContent: 'center',
          [theme.breakpoints.down('md')]: {
            marginTop: '10px',
            flexDirection: 'column',
          },
        })}
      >
        <Box display="flex" gap="30px" justifyContent="center">
          <Button sx={{ width: '155px' }} text="Conheça a Linx" />
          <Button sx={{ width: '155px' }} text="Ajude o algorítimo" />
        </Box>
        <Box display="flex" gap="30px" justifyContent="center">
          <Button sx={{ width: '155px' }} text="Seus produtos" />
          <Button sx={{ width: '155px' }} text="Compartilhe" />
        </Box>
      </Box>
    </StyledAppBar>
  );
}

export default Header;
