import React , { useState, useEffect } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
// import ImageResize from 'quill-image-resize-module-react';
// import { ImageDrop } from 'quill-image-drop-module';

export default function ParagraphEditor(props){
  const formats = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "color",
    "background",
    "align"
  ];
  let modules;

  useEffect(()=>{
    // ReactQuill.Quill.register('modules/imageResize', ImageResize.default);
    // ReactQuill.Quill.register('modules/imageDrop', ImageDrop);
    modules = {
      toolbar: {
        container: [
          ["bold", "italic", "underline"], // toggled buttons
          ["blockquote"],
          [{ list: "ordered" }, { list: "bullet" }],
          [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
          ["link", "image"],
          [{ header: [1, 2, 3, 4, 5, 6, false] }],
          [{ color: [] }, { background: [] }], // dropdown with defaults from theme
          [{ font: [] }],
          [{ align: [] }],
          ["clean"] // remove formatting button
        ]
      },
      // imageResize: {parchment: ReactQuill.Quill.import('parchment')},
      // imageDrop: true
    };
  },[]);

  return (
    <div style={{padding:50}}>
    <ReactQuill
      // id={'quill'}
      // onChange={this.handleChange}
      theme="snow"
      modules={modules}
      formats={formats}
      // ref={el => {
      //   this.reactQuillRef = el;
      // }}
      value="bonjour"
    />
    </div>
  );
}
