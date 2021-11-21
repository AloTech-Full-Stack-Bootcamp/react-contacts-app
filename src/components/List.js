import React, { useState } from "react";

export default function List({ contacts }) {
  const [filterText, setFilterText] = useState("");
  const onFilterChange = (e) => {
    setFilterText(e.target.value);
  };
  return (
    <div>
      <input type="text" onChange={onFilterChange} />
      <ul>
        {contacts
          .filter((contact) => {
            return contact.fullName.includes(filterText);
          })
          .map((contact, index) => (
            <li
              key={index}
            >{`${contact.fullName} - ${contact.phoneNumber}`}</li>
          ))}
      </ul>
    </div>
  );
}
