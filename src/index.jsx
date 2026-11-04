//External imports
import ReactDomClient from 'react-dom/client';

//Internal imports
import App from './App.jsx';

//styles
import './index.css';


ReactDomClient.createRoot(document.getElementById('root')).render(
  <App />
);