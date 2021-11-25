import React from "react";
export default function List({ title, items }) {
  return (
    <div className="wrapper">
      <h1 className="title">{title}</h1>
      <div>
        {items.map((item) => (
          <div>{item}</div>
        ))}
      </div>
    </div>
  );
}
