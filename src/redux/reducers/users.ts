import { FETCH_ALL_USERS, API_START, API_END } from "../actions/types";

export const initialState = {};

const userReducer = (state = initialState, action: any) => {
  const { type, data, payload } = action;

  switch (type) {
    case FETCH_ALL_USERS:
      return {
        ...data,
      };

    case API_START:
      if (payload === FETCH_ALL_USERS) {
        return {
          ...state,
          isLoadingData: true,
        };
      }
      break;

    case API_END:
      if (payload === FETCH_ALL_USERS) {
        return {
          ...state,
          isLoadingData: false,
        };
      }
      break;
    default:
      return state;
  }
};

export default userReducer;
