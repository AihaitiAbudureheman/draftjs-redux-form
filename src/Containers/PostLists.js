import React, { Component } from "react";
import { connect } from "react-redux";
import { getPosts } from "../Actions/PostActions";
import PostCard from "../Components/PostCard";
import _ from "lodash";

class PostLists extends Component {
  componentWillMount() {
    this.props.getPosts();
  }

  render() {
    return _.map(this.props.posts, (post, key) => {
      return (
        <PostCard key={key}>
          <h3
            className="card-title"
            dangerouslySetInnerHTML={{ __html: post.editorText }}
          />
        </PostCard>
      );
    });
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts
  };
}

export default connect(
  mapStateToProps,
  { getPosts }
)(PostLists);
