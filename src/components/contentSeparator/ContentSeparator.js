import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledSeparator = styled(Typography)({
  width: '100%',
  textAlign: 'center',
  borderBottom: '1px solid #000',
  lineHeight: '0.1em',
  margin: '10px 0 20px',
  '& > span': {
    background: '#fff',
    padding: '0 10px',
    lineHeight: 0,
  },
});

function ContentSeparator({ text, margin }) {
  return (
    <StyledSeparator margin={margin}>
      <Typography component="span">{text}</Typography>
    </StyledSeparator>
  );
}

export default ContentSeparator;
