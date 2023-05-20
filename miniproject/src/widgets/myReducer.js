import {
  CREATE_USER,
  CREATE_USER_ERROR,
  CREATE_USER_SUCCESS,
  GET_USERS_ERROR,
  GET_USERS_REQUEST,
  GET_USERS_SUCCESS,
  UPDATE_USER,
  UPDATE_USER_SUCCESS,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  GET_USER_ERROR,
  UPDATE_USER_ERROR,
  DELETE_USER,
  DELETE_USER_SUCCESS,
  DELETE_USER_ERROR,
} from "../widgets/action";

const iniitialValue = {
  users: [],
  user: {},
  loading: false,
  error: "",
};

const myReducer = (state = iniitialValue, action) => {
  switch (action.type) {
    case GET_USERS_REQUEST:
    case GET_USER_REQUEST:
    case CREATE_USER:
    case UPDATE_USER:
    case DELETE_USER:
      return { ...state, loading: true };

    case DELETE_USER_SUCCESS:
      return {
        ...state,
        users: state.users.filter((item) => item?.id !== action.payload),
        loading: false,
      };
    case CREATE_USER_SUCCESS:
    case UPDATE_USER_SUCCESS:
      return { ...state, loading: false };

    case GET_USERS_SUCCESS:
      return { ...state, users: action.payload, loading: false };
    case GET_USER_SUCCESS:
      return { ...state, user: action.payload, loading: false };
    case GET_USERS_ERROR:
    case GET_USER_ERROR:
    case CREATE_USER_ERROR:
    case DELETE_USER_ERROR:
    case UPDATE_USER_ERROR:
      return { ...state, error: action.payload, loading: false };
    default:
      return { ...state };
  }
};

export default myReducer;
