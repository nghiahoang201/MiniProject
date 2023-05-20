import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Select,
  MenuItem,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { createUser } from "../../widgets/action";
import CheckErrorValue from "../checkErrorValue";
import { useNavigate } from "react-router-dom";

const AddUser = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const inittialValue = {
    name: "",
    email: "",
    gender: "",
    status: "",
  };

  const [errors, setErrors] = useState();
  const [values, setValue] = useState(inittialValue);
  useEffect(() => {
    setErrors(CheckErrorValue(values));
  }, [values]);
  const handleSubmit = () => {
    if (
      errors !== undefined &&
      !errors.name &&
      !errors.email &&
      !errors.gender &&
      !errors.status
    ) {
      dispatch(createUser(values));
      setValue(inittialValue);
      navigate("/users?page=1");
    }
  };

  return (
    <>
      <Box align="center">
        <Typography variant="h4" color="initial" sx={{ mt: 2 }}>
          Nhập thông tin user
        </Typography>
        <form noValidate autoComplete="off">
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
              value={values.name}
              onChange={(e) => setValue({ ...values, name: e.target.value })}
              required
            />
            {errors?.name && (
              <Box sx={{ my: 2, color: "red", margin: "30px 0 0 0" }}>
                {errors?.name}
              </Box>
            )}
            <TextField
              label="email"
              type="email"
              sx={{ width: 500, mt: 4 }}
              value={values.email}
              onChange={(e) => setValue({ ...values, email: e.target.value })}
              required
            />
            {errors?.email && (
              <Box sx={{ my: 2, color: "red", margin: "30px 0 0 0" }}>
                {errors?.email}
              </Box>
            )}
            <Select
              defaultValue="male"
              label="Gender"
              value={values?.gender}
              sx={{ width: 500, mt: 4 }}
              onChange={(e) => setValue({ ...values, gender: e.target.value })}
              required
            >
              <MenuItem value="male">male</MenuItem>
              <MenuItem value="female">female</MenuItem>
            </Select>
            {errors?.gender && (
              <Box sx={{ my: 2, color: "red", margin: "30px 0 0 0" }}>
                {errors?.gender}
              </Box>
            )}

            <Select
              defaultValue="active"
              label="Status"
              value={values?.status}
              sx={{ width: 500, mt: 4 }}
              onChange={(e) => setValue({ ...values, status: e.target.value })}
              required
            >
              <MenuItem value="active">active</MenuItem>
              <MenuItem value="inactive">inactive</MenuItem>
            </Select>

            {errors?.status && (
              <Box sx={{ my: 2, color: "red", margin: "30px 0 0 0" }}>
                {errors?.status}
              </Box>
            )}
            <Button
              variant="outlined"
              color="primary"
              sx={{ width: 100, mt: 4 }}
              onClick={handleSubmit}
            >
              Submit
            </Button>
          </Box>
        </form>
      </Box>
    </>
  );
};

export default AddUser;
