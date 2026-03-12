import { useState, useEffect } from "react";

const USERS_URL = "https://jsonplaceholder.typicode.com/users";

function useFetchUsers() {
    const [users, setUsers] = useState([]);
    const [isUsersLoading, setIsUsersLoading] = useState(false);
    const [isUsersError, setIsUsersError] = useState(false);

    useEffect(() => {
        async function fetchUsers() {
          try {
            setIsUsersLoading(true);
            const response = await fetch(USERS_URL);
            const json = await response.json();
            setUsers(json);
            setIsUsersLoading(false);
          } catch {
            setIsUsersError(true);
            setIsUsersLoading(false);
          }
        }
        fetchUsers();
    }, [])
    
    return {
        users,
        isUsersLoading,
        isUsersError,
    };
}

export default useFetchUsers;
