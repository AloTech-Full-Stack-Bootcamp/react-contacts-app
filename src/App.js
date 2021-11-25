import React from "react";
import Card from "./components/Card";
import List from "./components/List";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Card title="My Card Title" content="Card Content" />
      <hr />
      <List title="My List Title" items={["Item 1", "Item 2", "Item 3"]} />
    </div>
  );
}

export default App;
