import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function loadUsers() {
      var response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      console.log(`Loaded ${response.data.length} users.`);
      setUsers(response.data);
    }

    loadUsers();
  });
  return (
    <div>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}
