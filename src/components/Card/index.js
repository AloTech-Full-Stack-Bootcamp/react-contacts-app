import React from "react";
export default function Card({ title, content }) {
  return (
    <div className="wrapper">
      <h1 className="title">{title}</h1>
      <div>{content}</div>
    </div>
  );
}
