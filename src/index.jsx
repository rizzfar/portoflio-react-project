import React from "react";
import { createRoot } from "react-dom/client";
import Aside from "./pages/Aside";
import Main from "./pages/Main";
import { BrowserRouter } from "react-router-dom";
import './styles/main.css';

// eslint-disable-next-line react-refresh/only-export-components
const App = () => {
  return (
    <BrowserRouter>
      <div className="portfolio">
        <Aside/>
        <Main/>
     </div>
    </BrowserRouter>
  )
}

const root = createRoot(document.getElementById('root'));
root.render(<App/>)