import axios from "axios";

import React, { useEffect, useState } from "react";

const getUsers = async () => {
  return (await axios("https://jsonplaceholder.typicode.com/users")).data;
};
export default function Users() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // https://dev.to/stlnick/useeffect-and-async-4da8
    (async () => {
      const data = await getUsers();
      setUsers(data);
      setIsLoading(false);
    })();
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
