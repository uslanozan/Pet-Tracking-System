import { useState } from 'react'
import Login from "./Login"
import Register from "./Register";

function App() {
  const [isRegister, setIsRegister] = useState(false);

  return (
    <div>
{isRegister ? (
  <>
  <Register />
  </>
      ) : ( <Login />)}
      <button
        onClick={() => setIsRegister(!isRegister)}
        style={{
          position: "absolute",
          top: "20px",
          right: "20px",
          padding: "10px 20px",
          cursor: "pointer",
        }}
      >
        {isRegister ? "Go to Login" : "Go to Register"}
      </button>
    </div>
  );
}

export default App
