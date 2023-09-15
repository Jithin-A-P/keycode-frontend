import { Suspense } from 'react';
import { Provider } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import { createTheme } from '@mui/material/styles';
import {
  ThemeProvider,
} from '@mui/material/styles';

import { ErrorBoundaryFallback, LoadingIndicator } from '@components';
import RouteLayout from '@routes/RouteLayout';
import store from '@store/store';


const theme = createTheme({
  palette: {
    primary: {
      main: '#000000',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main:'#000000',
    },
    background: {
      default: '#fff',
    },
  },
});


const App = () => (
  <ErrorBoundary FallbackComponent={ErrorBoundaryFallback}>
     <ThemeProvider theme={theme}>
    <Suspense fallback={<LoadingIndicator />}>
      <Provider store={store}>
        <Router>
          <RouteLayout />
        </Router>
      </Provider>
    </Suspense>
    </ThemeProvider>
  </ErrorBoundary>
);

export default App;
