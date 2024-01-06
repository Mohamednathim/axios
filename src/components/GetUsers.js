import "../App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { API } from "../Global";
import { useNavigate } from "react-router-dom";
import AddBoxIcon from "@mui/icons-material/AddBox";

const GetUsers = () => {
  const [users, setUsers] = useState([]);
  const Navigate = useNavigate();
  useEffect(() => {
    axios.get(API).then((res) => setUsers(res.data));
  }, []);

  const handleDelete = async (user) => {
    try {
      await axios.delete(`${API}/${user.id}`);
      setUsers(users.filter((u) => u.id !== user.id));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h1 className="header">User Details...📜</h1>
      <div className="container-fluid">
        <div className="d-flex justify-content-end px-4 my-3">
          <IconButton
            aria-label="Add"
            color="success"
            size="small"
            onClick={() => Navigate("/AddUser/new")}
          >
            <AddBoxIcon />
            Add User
          </IconButton>
        </div>
        <table className="table table-light border-dark table-bordered table-striped text-center ">
          <thead className="table-dark">
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>User Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Company</th>
              <th>City</th>
              <th>Website</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.company}</td>
                <td>{user.city}</td>
                <td>{user.website}</td>
                <td className="d-flex">
                  <IconButton
                    aria-label="edit"
                    color="secondary"
                    size="large"
                    onClick={() => Navigate(`/AddUser/${user.id}`)}
                  >
                    <EditIcon />
                  </IconButton>
                  <IconButton
                    aria-label="delete"
                    color="error"
                    size="large"
                    onClick={() => {
                      handleDelete(user);
                    }}
                  >
                    <DeleteIcon />
                  </IconButton>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default GetUsers;
