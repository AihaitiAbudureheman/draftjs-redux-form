import React, { Component } from "react";
import { EditorState, convertToRaw, ContentState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";

import { unemojify } from "node-emoji";

export default class ControlledEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editorState: EditorState.createEmpty()
    };

    this.props.onChange(
      draftToHtml(convertToRaw(this.state.editorState.getCurrentContent()))
    );
  }

  onEditorStateChange = editorState => {
    const { onChange, value } = this.props;

    const newValue = unemojify(
      draftToHtml(convertToRaw(editorState.getCurrentContent()))
    );

    if (value !== newValue) {
      onChange(newValue);
    }
    console.log("this.state.editorstate", this.state.editorState);

    this.setState({
      editorState
    });
  };

  render() {
    const { editorState } = this.state;
    return (
      <div>
        <Editor
          plugins={this.state.plugins}
          editorState={editorState}
          wrapperClassName="demo-wrapper"
          editorClassName="demo-editor"
          onEditorStateChange={this.onEditorStateChange}
          placeholder={this.props.placeholder}
          toolbar={{
            inline: { inDropdown: true },
            list: { inDropdown: true },
            textAlign: { inDropdown: true },
            link: { inDropdown: true },
            history: { inDropdown: true },
            image: { uploadCallback: true }
          }}
        />
      </div>
    );
  }
}
