import { apiAction } from "./api";

import { FETCH_ALL_USERS, SET_USER_DETAILS } from "./types";

export const setUserDetails = (data: any) => {
  return {
    type: SET_USER_DETAILS,
    payload: data,
  };
};

export const fetchUsers = () => {
  return apiAction({
    url: "search/users?q=location:Rwanda",
    onSuccess: setUserDetails,
    onFailure: () => console.log("Error occurred while loading"),
    label: FETCH_ALL_USERS,
  });
};
