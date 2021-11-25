import React from "react";
import styles from "./Card.module.css";
export default function Card({ title, content }) {
  console.log(styles);
  return (
    <div className="wrapper">
      <h1 className="title">{title}</h1>
      <div>{content}</div>
    </div>
  );
}
