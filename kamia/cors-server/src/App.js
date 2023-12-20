import logo from "./logo.svg";
import "./App.css";
import { useEffect } from "react";
import Form from "./Form";

function App() {
  // You can skip useEffect if you're not using TailwindCSS
  // Otherwise, for the production usage refer to https://tailwindcss.com/docs/installation
  useEffect(() => {
    if (document) {
      const stylesheet = document.createElement("link");
      stylesheet.rel = "stylesheet";
      stylesheet.href = "https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css";

      document.head.appendChild(stylesheet);
    }
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        KAMI Airlines
        <div className="py-6">
          <Form />
        </div>
      </header>
    </div>
  );
}

export default App;