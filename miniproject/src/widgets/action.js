export const GET_USERS_REQUEST = "GET_USERS_REQUEST";
export const GET_USERS_SUCCESS = "GET_USERS_SUCCESS";
export const GET_USERS_ERROR = "GET_USERS_ERROR";
// const An user
export const GET_USER_REQUEST = "GET_USER_REQUEST";
export const GET_USER_SUCCESS = "GET_USER_SUCCESS";
export const GET_USER_ERROR = "GET_USER_ERROR";

//const create user
export const CREATE_USER = "CREATE_USER";
export const CREATE_USER_SUCCESS = "CREATE_USER_SUCCESS";
export const CREATE_USER_ERROR = "CREATE_USER_ERROR";
// const update user
export const UPDATE_USER = "UPDATE_USER";
export const UPDATE_USER_SUCCESS = "UPDATE_USER_SUCCESS";
export const UPDATE_USER_ERROR = "UPDATE_USER_ERROR";
//delete user
export const DELETE_USER = "DELETE_USER";
export const DELETE_USER_SUCCESS = "DELETE_USER_SUCCESS";
export const DELETE_USER_ERROR = "DELETE_USER_ERROR";

//get all users

export const getUsers = (page) => ({
  type: GET_USERS_REQUEST,
  payload: page,
});

export const getUsersSuccess = (users) => ({
  type: GET_USERS_SUCCESS,
  payload: users,
});

export const getUsersError = (error) => ({
  type: GET_USERS_ERROR,
  payload: error,
});

// get An user

export const getUser = (user_id) => ({
  type: GET_USER_REQUEST,
  payload: user_id,
});

export const getUserSuccess = (user) => ({
  type: GET_USER_SUCCESS,
  payload: user,
});

export const getUserError = (error) => ({
  type: GET_USER_ERROR,
  payload: error,
});

// create user

export const createUser = (user) => ({
  type: CREATE_USER,
  payload: user,
});

export const createUserSuccess = (user) => ({
  type: CREATE_USER_SUCCESS,
  payload: user,
});

export const createUserError = (error) => ({
  type: CREATE_USER_ERROR,
  payload: error,
});

// update user

export const updateUser = (user) => ({
  type: UPDATE_USER,
  payload: user,
});

export const updateUserSuccess = (user) => ({
  type: UPDATE_USER_SUCCESS,
  payload: user,
});

export const updateUserError = (error) => ({
  type: UPDATE_USER_ERROR,
  payload: error,
});

// delete user

export const deleteUser = (user_id) => ({
  type: DELETE_USER,
  payload: user_id,
});

export const deleteUserSuccess = (user_id) => ({
  type: DELETE_USER_SUCCESS,
  payload: user_id,
});

export const deleteUserError = (error) => ({
  type: DELETE_USER_ERROR,
  payload: error,
});
