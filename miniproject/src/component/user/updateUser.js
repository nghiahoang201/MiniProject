import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Box,
  Typography,
  TextField,
  Button,
  Select,
  MenuItem,
} from "@mui/material";
import { updateUser } from "../../widgets/action";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ActionToken } from "../../widgets/mySagas";

const UpdateUser = () => {
  const navigate = useNavigate();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const inittialValue = {
    name: "",
    email: "",
    gender: "",
    status: "",
  };
  const dispatch = useDispatch();
  const { user, loading, error } = useSelector((state) => state.myReducer);
  const [values, setValue] = useState(inittialValue);

  const path = window.location.pathname;

  useEffect(() => {
    if (user.name && user.email && user.gender && user.status) {
      setValue(user);
    }
    const getAnUser = async () => {
      if (
        values.name === "" &&
        values.email === "" &&
        values.gender === "" &&
        values.status === ""
      ) {
        const userData = await axios.get(`https://gorest.co.in/public${path}`, {
          headers: { Authorization: "Bearer " + ActionToken },
        });
        setValue(userData.data);
      }
    };

    getAnUser();
  }, [user, values, path]);

  const handleSubmit = () => {
    if (values.name && values.email && values.gender && values.status) {
      dispatch(updateUser(values));
      navigate("/users?page=1");
    }
  };

  return error ? (
    navigate("/404")
  ) : loading ? (
    <Typography variant="h6" color="initial" align="center">
      loading...
    </Typography>
  ) : (
    <Box align="center">
      <Typography variant="h4" color="initial" sx={{ mt: 2 }}>
        Nhập thông tin user
      </Typography>
      <form onSubmit={handleSubmit}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TextField
            label="name"
            sx={{ width: 500, mt: 4 }}
            value={String(values?.name)}
            onChange={(e) => setValue({ ...values, name: e.target.value })}
            required
          />
          <TextField
            label="email"
            type="email"
            sx={{ width: 500, mt: 4 }}
            value={String(values?.email)}
            onChange={(e) => setValue({ ...values, email: e.target.value })}
            required
          />
          <Select
            label="Gender"
            value={String(values?.gender)}
            sx={{ width: 500, mt: 4 }}
            onChange={(e) => setValue({ ...values, gender: e.target.value })}
            required
          >
            <MenuItem value="male">male</MenuItem>
            <MenuItem value="female">female</MenuItem>
          </Select>

          <Select
            label="Status"
            value={String(values?.status)}
            sx={{ width: 500, mt: 4 }}
            onChange={(e) => setValue({ ...values, status: e.target.value })}
            required
          >
            <MenuItem value="active">active</MenuItem>
            <MenuItem value="inactive">inactive</MenuItem>
          </Select>
          <Button
            type="submit"
            variant="outlined"
            color="primary"
            sx={{ width: 100, mt: 4 }}
          >
            Submit
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default UpdateUser;
