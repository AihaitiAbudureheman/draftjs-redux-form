import React from "react";

import KEditorFieldComponent from "./KEditorFieldComponent";
import { Field } from "redux-form";

const EditorField = props => {
  return (
    <div>
      <Field {...props} component={KEditorFieldComponent} />
    </div>
  );
};

export default EditorField;
