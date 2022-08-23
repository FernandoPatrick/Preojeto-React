import { Box, styled } from '@mui/material';

const StyledGrid = styled(Box)({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(285px, 1fr))',
  gridGap: '15px',
});

function Grid({ children }) {
  return <StyledGrid>{children}</StyledGrid>;
}

export default Grid;

