import DISHES from "../data/dishes";
import COMMENTS from "../data/comments";

const initialState = {
  dishes: DISHES,
  comments: COMMENTS,
  sample: "Hello World",
};

export const Reducer = (state = initialState, action) => {
  //   console.log("from reducer", action);
  if (action.type === "TEST") {
    return {
      ...state,
      sample: action.str,
    };
  }
  return state;
};
