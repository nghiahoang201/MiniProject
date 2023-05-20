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

export const ActionToken =
  "5434d3e0c7800431d495d59217ab12582d44ef44a93fc8b2bc47779b6cfbc2d7";

const getAllUsers = async (page) => {
  return await axios.get(
    `https://gorest.co.in/public/v2/users${page}&per_page=10 `,
    { headers: { Authorization: "Bearer " + ActionToken } }
  );
};

function* fetchGetAllUsers({ payload }) {
  try {
    const response = yield call(getAllUsers, payload);
    yield put(getUsersSuccess(response.data));
  } catch (error) {
    yield put(getUsersError(error));
  }
}

// get An user

const getAnUser = async (user_id) => {
  return await axios.get(`https://gorest.co.in/public/v2/users/${user_id}`, {
    headers: { Authorization: "Bearer " + ActionToken },
  });
};

function* fetchGetAnUser({ payload }) {
  try {
    const response = yield call(getAnUser, payload);
    yield put(getUserSuccess(response.data));
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
  try {
    const response = yield call(createUser, payload);
    yield put(createUserSuccess(response.data));
    alert("thêm user thành công");
  } catch (error) {
    yield put(createUserError(error));
    alert("thêm user thất bại");
  }
}

// update user

const updateUser = async (user) => {
  return await axios.patch(
    `https://gorest.co.in/public/v2/users/${user?.id}`,
    user,
    {
      headers: { Authorization: "Bearer " + ActionToken },
    }
  );
};

function* fetchUpdateUser({ payload }) {
  try {
    const response = yield call(updateUser, payload);
    yield put(updateUserSuccess(response.data));
    alert("update user thành công");
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
  try {
    yield call(deleteUser, payload);
    yield put(deleteUserSuccess(payload));
    alert("delete user thành công");
  } catch (error) {
    yield put(deleteUserError(error));
    alert("delete user không thành công");
  }
}

function* mySagas() {
  yield takeEvery(GET_USERS_REQUEST, fetchGetAllUsers);
  yield takeEvery(GET_USER_REQUEST, fetchGetAnUser);
  yield takeLatest(CREATE_USER, fetchCreateUser);
  yield takeLatest(UPDATE_USER, fetchUpdateUser);
  yield takeLatest(DELETE_USER, fetchDeleteUser);
}

export default mySagas;
