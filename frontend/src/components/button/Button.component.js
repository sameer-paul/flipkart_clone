import React from "react";

function Button({className="",icon,text,onclick}) {
  return (
  <>
    <button
    className={className}
    onClick={onclick}
    >
    {icon && <span>{icon}</span>}
    {text}
    </button>
  </>
)}

export default Button;
