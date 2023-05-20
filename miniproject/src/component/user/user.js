import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Button,
  Box,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, getUsers } from "../../widgets/action";
import DeleteIcon from "@mui/icons-material/Delete";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import AddIcon from "@mui/icons-material/Add";
import { Link, useNavigate } from "react-router-dom";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import router from "../router";

const User = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const match = window.location.href;
  const search = window.location.search;
  const params = parseInt(new URLSearchParams(search).get("page"));

  const [page, setPage] = useState(params);

  useEffect(() => {
    if (match === `http://localhost:3000/users${search}`) {
      dispatch(getUsers(search));
      setPage(params);
    }
  }, [dispatch, match, page, search, params]);

  const { users, loading, error } = useSelector((state) => state.myReducer);

  const handleDeleteUser = (id) => {
    if (window.confirm("bạn có chắc muốn xóa user?")) {
      dispatch(deleteUser(id));
    }
  };

  const handleGetAnUser = (id) => {
    navigate(`v2/users/${id}`);
  };

  const handleNexPage = () => {
    if (page < 20) {
      setPage((page) => page + 1);
      navigate(`/users?page=${page + 1}`);
    }
  };

  const handlePrevPage = () => {
    if (page > 1) {
      setPage((page) => page - 1);
      navigate(`/users?page=${page - 1}`);
    }
  };

  if (loading) {
    return <div>loadding...</div>;
  } else if (error) {
    // navigate("/404");
  } else {
    return (
      <Box mt={2}>
        <Typography
          variant="h5"
          color="initial"
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          Table User:
          <Link
            to={router.createUsers}
            style={{
              textDecoration: "none",
              fontSize: "14px",
              color: "black",
            }}
          >
            <Button
              variant="outlined"
              bgcolor="primary"
              sx={{
                ml: 1,
                mb: 1,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                margin: "0 0 0 10px",
              }}
              endIcon={<AddIcon />}
            >
              Create Use
            </Button>
          </Link>
        </Typography>
        <TableContainer>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">stt</TableCell>
                <TableCell align="left">name</TableCell>
                <TableCell align="left">email</TableCell>
                <TableCell align="center">gender</TableCell>
                <TableCell align="center">status</TableCell>
                <TableCell align="center">handle</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map((item, index) => (
                <TableRow key={item?.id}>
                  <TableCell align="center">{index}</TableCell>
                  <TableCell component="th" scope="row">
                    {item?.name}
                  </TableCell>
                  <TableCell align="left">{item.email}</TableCell>
                  <TableCell align="center">{item.gender}</TableCell>
                  <TableCell align="center">{item.status}</TableCell>
                  <TableCell
                    align="center"
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Box>
                      <Button
                        variant="outlined"
                        color="primary"
                        onClick={() => handleGetAnUser(item?.id)}
                      >
                        <BorderColorIcon />
                      </Button>
                    </Box>
                    <Box ml={2}>
                      <Button
                        variant="outlined"
                        color="primary"
                        onClick={() => handleDeleteUser(item?.id)}
                      >
                        <DeleteIcon />
                      </Button>
                    </Box>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Box align="center" sx={{ mt: 4 }}>
          <Button
            variant="outlined"
            color="primary"
            sx={{ mr: 4 }}
            onClick={() => handlePrevPage()}
          >
            <ArrowBackIosIcon />
          </Button>
          <Typography variant="text" color="black">
            page:{page}
          </Typography>
          <Button
            variant="outlined"
            color="primary"
            sx={{ ml: 4 }}
            onClick={() => handleNexPage()}
          >
            <ArrowForwardIosIcon />
          </Button>
        </Box>
      </Box>
    );
  }
};

export default User;
