import { GET_POSTS } from "../Actions/PostActions";

export default function(state = {}, action) {
  switch (action.type) {
    case GET_POSTS:
      return action.payload;
    default:
      return state;
  }
}
