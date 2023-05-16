import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import axios from "axios";
import {
  CREATE_USER,
  DELETE_USER,
  GET_USERS_REQUEST,
  GET_USER_REQUEST,
  UPDATE_USER,
  createUserError,
  createUserSuccess,
  deleteUserError,
  deleteUserSuccess,
  getUserError,
  getUserSuccess,
  getUsersError,
  getUsersSuccess,
  updateUserError,
  updateUserSuccess,
} from "./action";

// get all users

const ActionToken =
  "f860f9f4360f2d04b025eaa291ab516d766620c06473e31aea6d5959b89b7acc";

const getAllUsers = async (page) => {
  return await axios.get(
    `https://gorest.co.in/public/v2/users?page=${page}&per_page=10 `
  );
};

function* fetchGetAllUsers({ payload }) {
  const response = yield call(getAllUsers, payload);
  try {
    if (response.status === 200) {
      yield put(getUsersSuccess(response.data));
    }
  } catch (error) {
    yield put(getUsersError(error));
  }
}

// get An user

const getAnUser = async (user_id) => {
  return await axios.get(`https://gorest.co.in/public/v2/users/${user_id}`);
};

function* fetchGetAnUser({ payload }) {
  const response = yield call(getAnUser, payload);
  try {
    if (response.status === 200) {
      yield put(getUserSuccess(response.data));
    }
  } catch (error) {
    yield put(getUserError(error));
  }
}

//crate user

const createUser = async (user) => {
  return await axios.post(`https://gorest.co.in/public/v2/users`, user, {
    headers: { Authorization: "Bearer " + ActionToken },
  });
};

function* fetchCreateUser({ payload }) {
  const response = yield call(createUser, payload);
  try {
    if (response.status === 201) {
      yield put(createUserSuccess(response.data));
      alert("thêm user thành công");
    }
  } catch (error) {
    yield put(createUserError(error));
    alert("thêm user thất bại");
  }
}

// update user

const updateUser = async (user) => {
  return await axios.put(
    `https://gorest.co.in/public/v2/users/${user?.id}`,
    user,
    {
      headers: { Authorization: "Bearer " + ActionToken },
    }
  );
};

function* fetchUpdateUser({ payload }) {
  const response = yield call(updateUser, payload);
  try {
    if (response.status === 200) {
      yield put(updateUserSuccess(payload));
      alert("update user thành công");
    }
  } catch (error) {
    yield put(updateUserError(error));
    alert("update user thất bại");
  }
}

// delete user

const deleteUser = async (user_id) => {
  return await axios.delete(`https://gorest.co.in/public/v2/users/${user_id}`, {
    headers: { Authorization: "Bearer " + ActionToken },
  });
};

function* fetchDeleteUser({ payload }) {
  const response = yield call(deleteUser, payload);
  try {
    if (response.status === 204) {
      yield put(deleteUserSuccess(payload));
      alert("delete user thành công");
    }
  } catch (error) {
    yield put(deleteUserError(error));
    alert("delete user không thành công");
  }
}

function* mySagas() {
  yield takeEvery(GET_USERS_REQUEST, fetchGetAllUsers);
  yield takeEvery(GET_USER_REQUEST, fetchGetAnUser);
  yield takeEvery(CREATE_USER, fetchCreateUser);
  yield takeLatest(DELETE_USER, fetchDeleteUser);
  yield takeLatest(UPDATE_USER, fetchUpdateUser);
}

export default mySagas;
