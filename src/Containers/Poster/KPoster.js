import React from "react";
import { reduxForm, reset } from "redux-form";
import { connect } from "react-redux";
import KEditorField from "./KEditorField";
import { savePost } from "./../../Actions/PostActions";

const onSubmit = values => {
  savePost(values, () => {
    console.log("values are published", values);
  });
};

const KPoster = props => {
  const { handleSubmit } = props;

  return (
    <form onSubmit={handleSubmit(onSubmit.bind(this))}>
      <button style={styles.button} key="submit" type="submit">
        Submit
      </button>
      <KEditorField
        key="field"
        name="editorText"
        id="inputEditorText"
        disabled={false}
        placeholder="Please enter your question title first..."
      />
    </form>
  );
};
const styles = {
  button: {
    width: "100%",
    height: "50px"
  }
};

export default reduxForm({
  form: "NewPost"
})(
  connect(
    null,
    { savePost }
  )(KPoster)
);
