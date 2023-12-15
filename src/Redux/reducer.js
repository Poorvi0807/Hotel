import {
  CART_VALUE,
  GET_HOTEL_DETAILS_FAILURE,
  GET_HOTEL_DETAILS_REQUEST,
  GET_HOTEL_DETAILS_SUCCESS,
  GET_HOTEL_FAILURE,
  GET_HOTEL_REQUEST,
  GET_HOTEL_SUCCESS,
  POST_HOTEL_FAILURE,
  POST_HOTEL_REQUEST,
  POST_HOTEL_SUCCESS
} from "./actionTypes";


const initState = {
  hotels: [],
    UserList: [],
    isLoading: false,
    isError: false,
    login_status: false,
    booking: [],
    cart_value:'$10'
  };
  
  export const reducer = (state = initState, { type, payload }) => {
    console.log();
    switch (type) {
      case 'SET_LOGIN_STATUS_SUCCESS':
        return {
          ...state,
          login_status: true,
        };
      case 'SET_LOGIN_STATUS_FAILURE':
        return {
          ...state,
          login_status: false,
        };
      case 'ADD_USER':
        return {
          ...state,
          UserList: [...state.UserList, payload],
        };
      case 'GET_USER_LIST':
        return {
          ...state,
          UserList: payload,
        };
      case CART_VALUE : 
      return {
        ...state,
        cart_value:payload
      }
        case GET_HOTEL_REQUEST:
          return {
              ...state,
              isLoading: true,
          }
      case GET_HOTEL_SUCCESS:
          return {
              ...state,
              isLoading: false,
              hotels: payload,
              isError: false
          }
      case GET_HOTEL_FAILURE:
          return {
              ...state,
              isLoading: false,
              isError: true,
          }

      case POST_HOTEL_REQUEST:
          return {
              ...state,
          }

      case POST_HOTEL_SUCCESS:
          return {
              ...state,
              isLoading: false,
              booking: payload,
              isError: false
          }

      case POST_HOTEL_FAILURE:
          return {
              ...state,
              isLoading: false,
              isError: true,
          }
        case GET_HOTEL_DETAILS_REQUEST:
          return {
              ...state,
              isLoading: true,
          }
      case GET_HOTEL_DETAILS_SUCCESS:
          return {
              ...state,
              isLoading: false,
          }
      case GET_HOTEL_DETAILS_FAILURE:
          return {
              ...state,
              isLoading: false,
              isError: true,
          }

      default:
        return state;
    }
  };
  