import React, { useState } from "react";
import "./List.css";
export default function List({ contacts }) {
  const [filterText, setFilterText] = useState("");
  const onFilterChange = (e) => {
    setFilterText(e.target.value);
  };
  return (
    <div>
      <h4>Contacts</h4>
      <input type="text" onChange={onFilterChange} />
      <ul class="contactList">
        {contacts
          .filter((contact) => {
            return contact.fullName.includes(filterText);
          })
          .map((contact, index) => (
            <li key={index}>
              <span>{contact.fullName}</span> <span>{contact.phoneNumber}</span>
            </li>
          ))}
      </ul>
      <div class="totalNumber">
        <i>Total:</i> <b>{contacts.length}</b>
      </div>
    </div>
  );
}
