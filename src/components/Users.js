import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
export default function Users() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/users").then((res) => {
      setUsers(res.data);
    });
  }, []);
  return (
    <>
      <h2>Users</h2>
      {users.map((user) => (
        <div>
          <Link to={`/user/${user.id}`}>{user.username}</Link>
        </div>
      ))}
    </>
  );
}
