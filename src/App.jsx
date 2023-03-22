import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App" style={{ backgroundColor: "#303030" }}>
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
