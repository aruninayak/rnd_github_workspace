import React, { useEffect, useState } from 'react';
import { fetchUsers, deleteUser } from '../api/admin';
import UserTable from '../components/admin/UserTable';

const AdminDashboard = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const loadUsers = async () => {
            const fetchedUsers = await fetchUsers();
            setUsers(fetchedUsers);
        };

        loadUsers();
    }, []);

    const handleDeleteUser = async (userId) => {
        await deleteUser(userId);
        setUsers(users.filter(user => user.id !== userId));
    };

    return (
        <div>
            <h1>Admin Dashboard</h1>
            <UserTable users={users} onDeleteUser={handleDeleteUser} />
        </div>
    );
};

export default AdminDashboard;