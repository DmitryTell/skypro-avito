import { BrowserRouter } from 'react-router-dom';

import { AppRouter } from './router';
import { GlobalStyle } from './style';


export const App = () => (
  <BrowserRouter>
    <GlobalStyle />
    <AppRouter />
  </BrowserRouter>
);
