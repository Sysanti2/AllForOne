import React from "react";
import { render } from "react-dom";
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";



class Richtext extends React.Component {

  state = { editorHtml: "" };

  handleChange = html => {
    this.setState({ editorHtml: html });
  };
 render() {
     return (
      <ReactQuill
      value={this.state.editorHtml}
      onChange={this.handleChange}
    />
  );
 }

};

export default Richtext