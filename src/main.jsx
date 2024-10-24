
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from '@emotion/react';
import { theme } from './theme/theme';
import  App  from './components/App';

createRoot(document.getElementById('root')).render(

    <ThemeProvider theme={theme}>
    <App/>
    </ThemeProvider>
);
