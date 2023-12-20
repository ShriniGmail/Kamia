import { useEffect, useState } from 'react';
import './App.css';
function App() {
  const makeAPICall = async () => {
    try {
      const response = await fetch('http://localhost:8080/', {mode:'cors'});
      const data = await response.json();
      console.log({ data })
    }
    catch (e) {
      console.log(e)
    }
  }
  useEffect(() => {
    makeAPICall();
  }, [])
  return (
    <div className="App">
      <h1>React Cors Guide</h1>
    </div>
  );
}
export default App;