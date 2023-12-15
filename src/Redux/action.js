

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
} from "./actionTypes"

export const handleLoginSuccess = (payload) => {
  return {
    type: 'SET_LOGIN_STATUS_SUCCESS',
    payload,
  };
};

export const handleLoginFailure = (payload) => {
  return {
    type: 'SET_LOGIN_STATUS_FAILURE',
    payload,
  };
};

export const handleUserList = (payload) => {
  return { type: 'ADD_USER', payload,
  };
};

export const handleGetUserList = (payload) => {
  return { type: 'GET_USER_LIST',payload,
  };
};

export const CartValue = (payload) => {
  return ({ type: CART_VALUE,payload })
}

export const getHotelRequest = () => {
  return ({ type: GET_HOTEL_REQUEST })
}

export const getHotelSuccess = (payload) => {
  return ({ type: GET_HOTEL_SUCCESS, payload: payload })
}

export const getHotelFailure = () => {
  return ({ type: GET_HOTEL_FAILURE })
} 

export const postHotelRequest = () => {
  return ({type: POST_HOTEL_REQUEST})
}

export const postHotelSuccess = (payload) => {
  return ({ type: POST_HOTEL_SUCCESS, payload: payload })
}

export const postHotelFailure = () => {
  return ({ type: POST_HOTEL_FAILURE })
} 

export const getHotelDetailRequest = () => {
  return ({ type: GET_HOTEL_DETAILS_REQUEST})
}

export const getHotelDetailSuccess = (payload) => {
  return ({ type: GET_HOTEL_DETAILS_SUCCESS})
}

export const getHotelDetailFailure = () => {
  return ({ type: GET_HOTEL_DETAILS_FAILURE})
} 

export const getdata = async (dispatch) => {
  try {
    let res = await fetch(`https://specialized.onrender.com/users`);
    res = await res.json();
    dispatch(handleGetUserList(res));
  } catch (error) {
    console.log(error);
  }
};

export const postdata = async (obj) => {
  try {
    let res = await fetch(`https://specialized.onrender.com/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(obj),
    });
  } catch (error) {
    console.log(error);
  }
};

export const postUserStatus = async (id,dispatch) =>{
  try {
    let res = await fetch(
      `https://specialized.onrender.com/users/${id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          login_status: true,
        }),
      }
    );
    dispatch(handleLoginSuccess(true))
  } catch (error) {
    dispatch(handleLoginSuccess(false))
  }
}