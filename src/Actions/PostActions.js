import { database } from "../Firebase";
export const SAVE_POST = "save_post";
export const GET_POSTS = "get_posts";

export function savePost(values, callback) {
  const request = database.push(values).then(() => {
    callback();
  });
  return {
    type: SAVE_POST,
    payload: request
  };
}

export function getPosts() {
  return dispatch => {
    database.on("value", data => {
      dispatch({
        type: GET_POSTS,
        payload: data.val()
      });
    });
  };
}
