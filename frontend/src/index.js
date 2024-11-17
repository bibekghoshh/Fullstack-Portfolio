import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./index.css";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
    <>
    <ToastContainer position="bottom-center" autoClose={5000} hideProgressBar newestOnTop closeOnClick pauseOnFocusLoss draggable pauseOnHover />
        <App />
    </>
  // </React.StrictMode>
);
