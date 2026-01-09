// React core imports 
import React from "react";
import ReactDOM from "react-dom/client";

// Redux provider 
import { Provider } from "react-redux";
import { store } from "./app/store";

// Root app component
import App from "./App";

// global styles
import "./index.css";

// enable MSW in development mode
async function enableMocks() {
  if (import.meta.env.DEV) { // run mocks during development 
    const { worker } = await import("./mocks/browser"); // dynamically import the MSW worker
    await worker.start({
      onUnhandledRequest: 'bypass',
    });
  }
}

// start MSW, then render the React app
enableMocks().then(() => {
  ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  );
});