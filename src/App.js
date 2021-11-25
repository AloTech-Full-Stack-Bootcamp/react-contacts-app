import { useState } from "react";
import List from "./components/List";
import Form from "./components/Form";
import "./App.css";

function App() {
  const [contacts, setContacts] = useState([]);
  return (
    <div id="container">
      <List contacts={contacts} />
      <Form setContacts={setContacts} />
    </div>
  );
}

export default App;
