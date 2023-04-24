import React, { useState } from "react";

function Item({ name, category }) {
  const [className, setClassName] = useState(false)
  
  function toogleButton(){
    setClassName(true)
  }
  return (
    <li  >
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={toogleButton} className={toogleButton?"in-cart":"add"}>Add to Cart</button>
    </li>
  );
}

export default Item;