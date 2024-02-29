// import logo from './logo.svg';
import './style/index.scss';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './routes';
import 'react-toastify/dist/ReactToastify.css';
// import { Provider } from 'react-redux';
// import store from './redux/store';

function App() {
  return (
    <>
      <div className="App">
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
