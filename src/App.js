
import { Provider } from 'react-redux';
import './App.scss';
import Page from './Page/Page';
import store from './cartReducer';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <Page/>
    </div>
    </Provider>
  );
}

export default App;
