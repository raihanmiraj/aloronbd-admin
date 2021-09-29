// import React, { useState } from "react";
// import { CKEditor ,SimpleUploadAdapter,Essentials,  UploadAdapter, Autoformat, Bold , Italic ,BlockQuote , EasyImage , Heading , Image , ImageCaption ,ImageStyle, ImageToolbar , ImageUpload , Link,List,Paragraph,Alignment} from "@ckeditor/ckeditor5-react";
// import ClassicEditor from "ckeditor5-build-classic-mathtype";
// // import SimpleUploadAdapter from '@ckeditor/ckeditor5-upload/src/adapters/simpleuploadadapter';
// // import ReactHtmlParser from "react-html-parser";
// import parse from "html-react-parser";
  import React, { Component, useState } from "react";
 import MyEditor from "./MyEditor/MyEditor";
 import AddQuizMeta from './AdminComponent/AddQuizMeta/AddQuizMeta'
 
 
 
 export default function App(props) {
   const [editor, setEditor] = useState(null);
   return (
     <>
       {/* <MyEditor
         handleChange={(data) => {
           console.log(data)
           setEditor(data);
         }}
         data={editor}
         {...props}
       /> */}
<AddQuizMeta/>     
     </>
   );
 }
 

// class App extends Component{


//   render(){
//     return(<>
//            <MyEditor
//                handleChange={(data) => {
//                  setEditor(data);
//                }}
//                data={editor}
//               //  {...props}
//              />
//            </>)
//   }
// }

 
// export default function App() {
  
//   const [ckData, setCkData] = useState("");
//   return (
//     <React.Fragment>
//       <CKEditor
//         editor={ClassicEditor}
//         config={{
//           toolbar: {
//             simpleUpload: {
//               // The URL that the images are uploaded to.
//               uploadUrl: 'http://example.com',
  
//               // Enable the XMLHttpRequest.withCredentials property.
//               withCredentials: false,
  
//               // Headers sent along with the XMLHttpRequest to the upload server.
//               // headers: {
//               //     'X-CSRF-TOKEN': 'CSRF-Token',
//               //     Authorization: 'Bearer <JSON Web Token>'
//               // }
//             },
//             image: {
//               toolbar: [
//                   'imageStyle:inline',
//                   'imageStyle:block',
//                   'imageStyle:side',
//                   '|',
//                   'toggleImageCaption',
//                   'imageTextAlternative'
//               ]
//           },
//             shouldNotGroupWhenFull: true,
//             items: [
//               // 'heading', '|',
//               // 'fontfamily', 'fontsize', '|',
//               // 'alignment', '|',
//               // 'fontColor', 'fontBackgroundColor', '|',
//               // 'bold', 'italic', 'strikethrough', 'underline', 'subscript', 'superscript', '|',
//               // 'link', '|',
//               // 'outdent', 'indent', '|',
//               // 'bulletedList', 'numberedList', 'todoList', '|',
//               // 'code', 'codeBlock', '|',
//               // 'insertTable', '|',
//               'uploadImage', 'blockQuote', '|',
//               "heading",
//               "fontsize",
//               "alignment",
//               "fontColor",
//               "fontBackgroundColor",
//               "outdent",
//               "indent",
//               "|",
//               "bold",
//               "italic",
//               "link",
//               "bulletedList",
//               "numberedList",
//               "imageUpload",
//               "mediaEmbed",
//               "insertTable",
//               "blockQuote",
//               "undo",
//               "redo",
//               "|",
//               "MathType",
//               "ChemType"
//             ]
//           }
//         }}
//         data={ckData}
//         onReady={(editor) => {
//           // You can store the "editor" and use when it is needed.
//           // console.log( 'Editor is ready to use!', editor );
//         }}
//         onChange={(event, editor) => {
//           const data = editor.getData();
//           // console.log({ event, editor, data });
//           setCkData(data);
//         }}
//       />
//       <div>{parse(ckData)}</div>
//       <div>{ckData}</div>
      
//     </React.Fragment>
//   );
// }
