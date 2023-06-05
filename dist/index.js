import { jsx as _jsx } from "react/jsx-runtime";
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
var root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
// <React.StrictMode>
_jsx(App, {}, void 0)
// </React.StrictMode>
);
reportWebVitals();
