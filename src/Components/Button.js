import React from "react";

export const Button = ({ opSymbol, onClick }) => {
  return (
    <div>
      <button type="button" className="btn btn-secondary" onClick={onClick}>
        {opSymbol}
      </button>
    </div>
  );
};

export default Button;
