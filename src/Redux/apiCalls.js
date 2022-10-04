import { publicRequest, userRequest } from "../requestapi";
import { loginSuccess, loginFailure } from "./userRedux";
import {
  getProductStart,
  getProductFailure,
  getProductSuccess,
  removeProductStart,
  removeProductSuccess,
    removeProductFailure,
  
} from "./productRedux";
export const login = async (dispatch, user) => {
  try {
    const res = await publicRequest.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure(err));
  }
};

export const getProduct = async (dispatch) => {
  dispatch(getProductStart());
  try {
    const res = await publicRequest.get("/product");
    console.log(res);
    dispatch(getProductSuccess(res.data));
  } catch {
    dispatch(getProductFailure());
  }
};

export const addProduct = async (products) => {
  try {
    const res = await userRequest.post("/product/create", products);
    console.log(res);
  } catch (err) {
    console.log(err);
  }
};

export const removeProduct = async (dispatch, id) => {
  dispatch(removeProductStart());
  try {
    dispatch(removeProductSuccess(id));
    const res = await userRequest.delete(`/product/${id}`);
    console.log(res);
  } catch (error) {
    dispatch(removeProductFailure())
  }
};
