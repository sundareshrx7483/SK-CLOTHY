import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import 'react-redux'
import { Provider } from "react-redux";
import store from "./STORE/store.js";

createRoot(document.getElementById("root")).render(


  <Provider store={store} >
    <App />
   </Provider>
    
  
    
 
);
