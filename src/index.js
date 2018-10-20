import React from "react";
import ReactDOM from "react-dom";
import KPoster from "./Containers/Poster/KPoster";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { applyMiddleware, createStore } from "redux";
import { BrowserRouter, Route } from "react-router-dom";
import reducers from "./Reducers/index";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import PostLists from "./Containers/PostLists";

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Route exact path="/" component={PostLists} />
        <Route path="/posts/new" component={KPoster} />
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
