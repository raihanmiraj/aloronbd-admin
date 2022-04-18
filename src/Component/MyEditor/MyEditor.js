import React, { useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import $ from 'jquery';
// import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import axios from "axios";
 
// // import SimpleUploadAdapter from '@ckeditor/ckeditor5-upload/src/adapters/simpleuploadadapter';
// // import ReactHtmlParser from "react-html-parser";
 import parse from "html-react-parser";



import ClassicEditor from "ckeditor5-build-classic-mathtype";

const UPLOAD_ENDPOINT = "upload_files";

export default function MyEditor({ handleChange, ...props }) {

 const imageDataHandler = (data)=>{
    axios.post('/upload/images' , data)
    .then( (response) =>{
    console.log(response);
     
    })
    .catch(  (error) =>{
      // handle error
      console.log(error);
    })
}

  function uploadAdapter(loader) {
    return {
      upload: () => {
        return new Promise((resolve, reject) => {
          const body = new FormData();
          loader.file.then((file) => {
//  const API_URL = "https://upload.blazebd.workers.dev//"+file.name+"?rootId=1DWY3MMBUjfDqfJwEHwT8XX_YaQtooDWh";
 body.append('image', file);
 
 $.ajax({
 type:'POST',
 url:"https://api.imgbb.com/1/upload?expiration=0&key=89cd126a18f125ea9e7f8256dcb15acb",
 data:body,
 cache:false,
 contentType: false,
 processData: false,
 success:(data)=>{
     console.log("success");
     console.log(data.data);
     
      resolve({
                  default: `${data.data.medium.url}`
                });

                var imageArray = {
                  image:data.data.image,
                      medium: data.data.medium,
                      thumb:data.data.thumb
          }
          var img_id = data.data.id;
          var dataArrayImage = {
              img_id:img_id,
              image_data:imageArray
          }
          imageDataHandler(dataArrayImage);

            

 },
 error: (data)=>{
  console.log("error");
  console.log(data);
}
});
 
          });
        });
      }
    };
  }
  function uploadPlugin(editor) {
    editor.plugins.get("FileRepository").createUploadAdapter = (loader) => {
      return uploadAdapter(loader);
    };
  }
  const [ckData, setCkData] = useState("");
  return (
    <div className="App">
      {/* <CKEditor
        config={{
          extraPlugins: [uploadPlugin]
        }}
        editor={ClassicEditor}
        onReady={(editor) => {}}
        onBlur={(event, editor) => {}}
        onFocus={(event, editor) => {}}
        onChange={(event, editor) => {
          handleChange(editor.getData());
        }}
        {...props}
      /> */}




<React.Fragment>
      <CKEditor
        editor={ClassicEditor}
        config={{
            extraPlugins: [uploadPlugin],
          toolbar: {
            shouldNotGroupWhenFull: true,
            items: [
              // 'heading', '|',
              // 'fontfamily', 'fontsize', '|',
              // 'alignment', '|',
              // 'fontColor', 'fontBackgroundColor', '|',
              // 'bold', 'italic', 'strikethrough', 'underline', 'subscript', 'superscript', '|',
              // 'link', '|',
              // 'outdent', 'indent', '|',
              // 'bulletedList', 'numberedList', 'todoList', '|',
              // 'code', 'codeBlock', '|',
              // 'insertTable', '|',
              // 'uploadImage', 'blockQuote', '|',
              "heading",
              "fontsize",
              "alignment",
              "fontColor",
              "fontBackgroundColor",
              "outdent",
              "indent",
              "|",
              "bold",
              "italic",
              "link",
              "bulletedList",
              "numberedList",
              "imageUpload",
              "mediaEmbed",
              "insertTable",
              "blockQuote",
              "undo",
              "redo",
              "|",
              "MathType",
              "ChemType"
            ]
          }
        }}
        // data={ckData}
        data = {props.oldata}
        onReady={(editor) => {
          // You can store the "editor" and use when it is needed.
          // console.log( 'Editor is ready to use!', editor );
        }}
        onChange={(event, editor) => {
          const data = editor.getData();
          // console.log({ event, editor, data });
          setCkData(data);
             handleChange(editor.getData());
        }}
      />
      {/* {localStorage.setItem("ok",ckData)} */}
       {/* <div>{parse(ckData)}</div>
      <div>{ckData}</div>   */}
    </React.Fragment>
    </div>
  );
}
