import { useState } from "react";
import "./App.css";
import Wrapper from "./Wrapper";
function App() {
  const [duration, setDuration] = useState(0);
  const onExpire = () => {
    alert("time over");
  };

  return (
    <div className="App">
      <p>Enter time in seconds </p>
      <input
        type="number"
        onChange={(e) =>
          setTimeout(() => {
            setDuration(e.target.value);
          }, 3000)
        }
      />
      {duration > 0 && <Wrapper onExpire={onExpire} duration={duration} />}
    </div>
  );
}

export default App;
