import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import Context from "../../store/Context";
const HeaderCart = (props) => {
  const cartCtx = useContext(Context);
  let itemCount = 0;
  if (cartCtx.items) {
    Object.keys(cartCtx.items).forEach((key) => {
      itemCount++;
    });
  }

  return (
    <div className="d-flex my-1">
      <Button
        onClick={() => {
          props.setShowCart(true);
        }}
        variant="outline-info"
        size="md"
      >
        Cart
        <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        className="bi bi-cart mx-1"
        viewBox="0 0 15 15"
      >
        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
      </svg>
      
      </Button>
      <sup
        style={{
          width: "1.5rem",
          height: "1.2rem",
          fontSize: "16px",
          fontWeight: "bold",
          padding: "0.4rem",
          margin: "0.3rem",
          textAlign: "center",
          backgroundColor: "#aedafe",
          borderRadius: "8px",
        }}
      >
        {itemCount}
      </sup>
    </div>
  );
};

export default HeaderCart;
