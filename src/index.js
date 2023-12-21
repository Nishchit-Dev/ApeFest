import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
const _theme = extendTheme({

})
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ChakraProvider theme={_theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
