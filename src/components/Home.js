import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  // const placeOrder = () => navigate("order-placed")

  return (
    <div>
      Home <br />
      <button
        className="m-2 p-2 bg-yellow-400 text-white border bottom-2"
        onClick={() => navigate("/order-placed", { replace: true })}>
        Place the order
      </button>
    </div>
  );
}

export default Home;
