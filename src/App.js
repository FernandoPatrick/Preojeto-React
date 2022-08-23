import { Box } from '@mui/material';
import { Header, Section01, Section02, Section03 } from './components';

function App() {
  return (
    <>
      <Header />
      <Box
        sx={(theme) => ({
          width: '70%',
          margin: '0 auto',
          padding: '20px',
          [theme.breakpoints.down('md')]: {
            width: '100%',
          },
        })}
      >
        <Section01 />
        <Section02 />
        <Section03 />
      </Box>
    </>
  );
}

export default App;
