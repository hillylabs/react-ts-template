import userReducer, { initialState } from "../users";
import { API_START, API_END, FETCH_ALL_USERS } from "../../actions/types";

describe("User reducer", () => {
  it("should return the initial state", () => {
    expect(userReducer(undefined, {})).toEqual(initialState);
  });

  it("handles actions of type API_START", () => {
    const action = {
      type: API_START,
      data: {},
      payload: FETCH_ALL_USERS,
    };

    const expectedState = {
      ...initialState,
      isLoadingData: true,
    };

    const newState = userReducer(initialState, action);
    expect(newState).toEqual(expectedState);
  });

  it("should handle action of type of API_END", () => {
    const action = {
      type: API_END,
      data: {},
      payload: FETCH_ALL_USERS,
    };

    const expectedState = {
      ...initialState,
      isLoadingData: false,
    };

    const newState = userReducer(initialState, action);
    expect(newState).toEqual(expectedState);
  });

  it("should handle action of type of FETCH_ALL_USERS", () => {
    const payload = {
      name: "user1",
    };
    const action = {
      type: FETCH_ALL_USERS,
      data: { payload },
    };

    const expectedState = {
      payload,
    };

    const newState = userReducer(initialState, action);
    expect(newState).toEqual(expectedState);
  });
});
