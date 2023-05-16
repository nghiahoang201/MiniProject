import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Typography, TextField, Button } from "@mui/material";
import { updateUser } from "../../widgets/action";
import axios from "axios";
import { useNavigate } from "react-router-dom";

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
    if (user) {
      setValue(user);
    }
  }, [user]);

  const handleSubmit = () => {
    if (values.name && values.email && values.gender && values.status) {
      dispatch(updateUser(values));
    }
  };

  useEffect(() => {
    const getAnUser = async () => {
      if (values === inittialValue) {
        if (!values.name && !values.email && !values.gender && !values.status) {
          const userData = await axios.get(
            `https://gorest.co.in/public/v2/users${path}`
          );
          setValue(userData.data);
        }
      }
    };

    getAnUser();
  }, [user, path, values, inittialValue]);
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
      <form noValidate autoComplete="off" onSubmit={() => handleSubmit()}>
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
            sx={{ width: 500, height: 40, mt: 4 }}
            value={String(values?.name)}
            onChange={(e) => setValue({ ...values, name: e.target.value })}
            required
          />
          <TextField
            label="email"
            type="email"
            sx={{ width: 500, height: 40, mt: 4 }}
            value={String(values?.email)}
            onChange={(e) => setValue({ ...values, email: e.target.value })}
            required
          />
          <TextField
            label="gender"
            type=""
            row={4}
            sx={{ width: 500, height: 40, mt: 4 }}
            value={String(values?.gender)}
            onChange={(e) => setValue({ ...values, gender: e.target.value })}
            required
          />
          <TextField
            label="status"
            row={4}
            sx={{ width: 500, height: 40, mt: 4 }}
            value={String(values?.status)}
            onChange={(e) => setValue({ ...values, status: e.target.value })}
            required
          />
          <Button
            type="submit"
            variant="outlined"
            color="primary"
            sx={{ width: 100, height: 40, mt: 4 }}
          >
            Submit
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default UpdateUser;
