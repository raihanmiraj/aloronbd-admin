import React, { useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
// import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import axios from "axios";
 
// // import SimpleUploadAdapter from '@ckeditor/ckeditor5-upload/src/adapters/simpleuploadadapter';
// // import ReactHtmlParser from "react-html-parser";
 import parse from "html-react-parser";



import ClassicEditor from "ckeditor5-build-classic-mathtype";

const UPLOAD_ENDPOINT = "upload_files";

export default function MyEditor({ handleChange, ...props }) {
  function uploadAdapter(loader) {
    return {
      upload: () => {
        return new Promise((resolve, reject) => {
          const body = new FormData();
          loader.file.then((file) => {
 const API_URL = "https://upload.blazebd.workers.dev//"+file.name+"?rootId=1DWY3MMBUjfDqfJwEHwT8XX_YaQtooDWh";
            let headers = new Headers();
           headers.append("Origin", "http://localhost:3000");

         
// axios.put(API_URL, file, {
//     headers: {
//       'Content-Type': 'multipart/form-data'
//     }
// })


axios.put(API_URL,file ,{
    headers: {
      'Content-Type': 'multipart/form-data'
    }
})
.then( (response) => {
//   console.log(response.data)
// this.setState({
//     quesData:response.data,
//     loading:false,
//     message:response.data.message,
//     quiz_time:response.data.time
//  });

 resolve({
                  default: `${file.name}`
                });
 
})
.catch(  (error) => {
  console.log(error);
});

            // fetch(API_URL, {
            //   method: "PUT",file,
            // //   body: body
            //   mode: "no-cors"
            // })
            //   .then((res) => res.json())
            //   .then((res) => {
            //     resolve({
            //       default: `${API_URL}/${res.filename}`
            //     });
            //   })
            //   .catch((err) => {
            //     reject(err);
            //   });
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
        data={ckData}
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
      <div>{ckData}</div> */}
    </React.Fragment>
    </div>
  );
}
