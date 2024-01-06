import "../App.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { API } from "../Global";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import { useNavigate, useParams } from "react-router-dom";

const AddUsers = () => {
  const { id } = useParams();
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    company: "",
    city: "",
    website: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    if (id === "new") return;
    const fetchpost = async () => {
      const { data } = await axios.get(`${API}/${id}`);
      setUser(data);
    };
    fetchpost();
  }, []);
  console.log(user);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((user) => ({
      ...user,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (id === "new") {
        await axios.post(API, user);
        navigate("/");
      } else {
        await axios.put(`${API}/${id}`, user);
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="update">
        <h1>{id === "new" ? "Add User Form...📜" : "User Update Form...📜"}</h1>
        <IconButton
          className="d-flex flex-end"
          color="inherit"
          onClick={() => navigate("/")}
        >
          🏛
        </IconButton>
      </div>
      <div className="container text-center">
        <form onSubmit={handleSubmit}>
          <TextField
            className="my-2"
            fullWidth
            label="Name"
            color="warning"
            focused
            name="name"
            value={user.name}
            onChange={handleChange}
          />

          <TextField
            fullWidth
            className="my-2"
            label="Username"
            color="warning"
            focused
            name="username"
            value={user.username}
            onChange={handleChange}
          />

          <TextField
            fullWidth
            className="my-2"
            label="Email"
            color="warning"
            focused
            name="email"
            value={user.email}
            onChange={handleChange}
          />

          <TextField
            fullWidth
            className="my-2"
            label="Phone"
            color="warning"
            focused
            name="phone"
            value={user.phone}
            onChange={handleChange}
          />

          <TextField
            fullWidth
            className="my-2"
            label="Company"
            color="warning"
            focused
            name="company"
            value={user.company}
            onChange={handleChange}
          />

          <TextField
            fullWidth
            className="my-2"
            label="City"
            color="warning"
            focused
            name="city"
            value={user.city}
            onChange={handleChange}
          />

          <TextField
            fullWidth
            className="my-2"
            label="Website"
            color="warning"
            focused
            name="website"
            value={user.website}
            onChange={handleChange}
          />

          <Button
            size="large"
            variant="contained"
            color="secondary"
            type="submit"
            className="w-50 my-1"
          >
            {id === "new" ? "Add User" : "Update User"}
          </Button>
        </form>
      </div>
    </>
  );
};

export default AddUsers;
