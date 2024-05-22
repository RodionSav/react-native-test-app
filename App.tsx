import { Provider } from 'react-redux';
import { store } from './app/store';
import { AppContent } from './components/AppContent/AppContent';
import { AppNavigator } from './AppNavigator';

export default function App() {

  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}

