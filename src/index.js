import * as React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/app";
import { ChakraProvider } from "@chakra-ui/react";
import BackendCall from "./components/institute/BackendCall";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ChakraProvider>
      <App />
      <BackendCall />
    </ChakraProvider>
  </React.StrictMode>
);
