import React, { useState } from "react";
import Timer from "./Timer";

function Wrapper({ duration, onExpire }) {
  const [hasExpired, setHasExpired] = useState(false);

  const onExpireHelper = () => {
    setHasExpired(true);
    onExpire && onExpire();
  };
  const handleRestart = () => {
    setHasExpired(false);
  };

  return (
    <>
      {!hasExpired ? (
        <Timer duration={duration} onExpire={onExpireHelper} />
      ) : (
        <button onClick={handleRestart}>Restart Timer</button>
      )}
    </>
  );
}

export default Wrapper;
