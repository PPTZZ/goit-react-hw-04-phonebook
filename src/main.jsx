import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from '@emotion/react';
import { theme } from './theme/theme';
import  App  from './components/App';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
    <App/>
    </ThemeProvider>
  </StrictMode>
);
