import React, { useState } from "react";

export default function Form({ setContacts }) {
  const [form, setForm] = useState({ fullName: "", phoneNumber: "" });
  const onChangeInput = (event) => {
    const keyName = event.target.name;
    const value = event.target.value;
    const newPair = { [keyName]: value };
    setForm({ ...form, ...newPair });
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    if (form.fullName !== "" && form.phoneNumber !== "") {
      setContacts((contacts) => {
        return [...contacts, form];
      });
      setForm({ fullName: "", phoneNumber: "" });
    }
  };

  return (
    <div>
      <h4>Add New Contact</h4>
      <form onSubmit={onFormSubmit} autocomplete="off">
        <div>
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={form.fullName}
            onChange={onChangeInput}
          />
        </div>

        <div>
          <input
            type="text"
            name="phoneNumber"
            value={form.phoneNumber}
            placeholder="Phone Number"
            onChange={onChangeInput}
          />
        </div>

        <div className="footer">
          <button>Add</button>
        </div>
      </form>
    </div>
  );
}
