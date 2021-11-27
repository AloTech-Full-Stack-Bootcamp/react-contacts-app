import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
export default function User() {
  const [user, setUser] = useState({});

  const { id } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    axios(`https://jsonplaceholder.typicode.com/users/${id}`).then((res) => {
      setUser(res.data);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);
  return (
    <>
      <h2>User Info</h2>
      <div>
        <code>{user.name}</code>
      </div>
      <div>
        Next User: <Link to={`/user/${user.id + 1}`}>User {user.id + 1}</Link>
        Next User:{" "}
        <button onClick={() => navigate(`/user/${user.id + 1}`)}>
          next user
        </button>
      </div>
    </>
  );
}
