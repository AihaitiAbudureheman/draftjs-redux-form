import React from "react";

import KEditor from "./KEditor";

const KEditorFieldComponent = props => {
  const {
    placeholder,
    input: { onChange, value },
    disabled,
    id
  } = props;

  return (
    <KEditor
      id={id}
      disabled={disabled}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
    />
  );
};

export default KEditorFieldComponent;
