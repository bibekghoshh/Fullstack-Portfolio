import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import store from "./Store";
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
    <Provider store={store}>
    <ToastContainer position="bottom-center" autoClose={5000} hideProgressBar newestOnTop closeOnClick pauseOnFocusLoss draggable pauseOnHover />
        <App />
    </Provider>
  // </React.StrictMode>
);
