import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const TerminalContainer = styled(Box)(({ theme }) => ({
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  width: '100vw',
  height: '100vh',
  backgroundColor: theme.palette.mode === 'dark' ? '#0E0B16' : '#fafafa',
  zIndex: 1000,
  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden',
}));

export const TerminalBody = styled(Box)(() => ({
  width: 'calc(100% - 32px)',
  height: 'calc(100% - 32px)',
  overflow: 'hidden',
  position: 'absolute',
  top: '16px',
  left: '16px',
}));
