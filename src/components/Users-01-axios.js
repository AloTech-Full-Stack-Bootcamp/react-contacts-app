import axios from "axios";

import React, { useEffect, useState } from "react";
export default function Users() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  }, []);
  return (
    <div>
      <h1>Users</h1>
      {isLoading && <h4>Loading...</h4>}
      {users.map((user, i) => (
        <div key={i}>{user.name}</div>
      ))}
    </div>
  );
}
