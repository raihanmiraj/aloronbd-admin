import React, { Component } from 'react'
import axios from 'axios';
import UploadImgBB from '../../UploadImgBB/UploadImgBB';
export class AddQuizMeta extends Component {


  state = {
    quiz_name:"",
    subject_id:1,
    point:"",
    description:"",
    settings:"",
    images:"",
    subjectData:"",
    posMark:1,
    negMark:1,
    isquestionsort:0,
    isoptionsort:0,
    questionlimit:0,
    attendlimit:1,
    time:"",
    newimage:0,
    imagechanging:0,
    imagetodisplay:"",
    buttonState:"Add Quiz Details",
    message:0
 }
 
componentDidMount(){
  axios.get('/subject/all')
.then( (response) =>{
 this.setState({subjectData:response.data.data});
 
})
.catch(  (error) =>{
  // handle error
  console.log(error);
})
 
}


uploadFile = (data)=>{
 
  this.setState({images:data,
     newimage:1,
     imagetodisplay:data[0].image.url});
     console.log(data[0].image.url);
 }

inputChangeHandler = (e)=>{
this.setState({[e.target.id]:e.target.value});
console.log(e.target.value);
console.log(e.target.id);
if(this.state.message==1){
  this.setState({message:0,  buttonState:"Add Quiz Details"})
}
 }

 insertQuizMeta = () =>{
  this.setState({
    buttonState:"Adding ! Hold On"
})
var quiz_name  = this.state.quiz_name;
var subject_id = this.state.subject_id;
var point = this.state.point;
var description = this.state.description;
var setting = {
  time:this.state.time,
  posMark : this.state.posMark,
  negMark : this.state.negMark,
  isquestionsort:this.state.isquestionsort,
  questionlimit:this.state.questionlimit,
  attendlimit:this.state.attendlimit
  // {"time":30,"posMark":2,"negMark":1,"isquestionsort":1,"questionlimit":0, "attendlimit":0}
  }

  if(this.state.newimage==1){
    var images = this.state.images;
    var imgarray = {
      image:  typeof  images[0].image !== "undefined"?images[0].image.url:"",  
      medium:typeof  images[0].medium !== "undefined"?images[0].medium.url:"",
      thumb:typeof  images[0].thumb !== "undefined"?images[0].thumb.url:"",
    }
  }else{
      var imgarray  =  this.state.images;
  }

  var quizMetaInsert = {
    quiz_name:quiz_name,
    subject_id:subject_id,
    point:point,
    description:description,
    setting:setting,
    image:imgarray
 }


 axios.post('/quiz/add',quizMetaInsert )
 .then( (response) =>{
 
  this.setState({
    buttonState:"Added",
    message:1
})
 })
 .catch(  (error) =>{
   // handle error
   console.log(error);
 })



 }





    render() {

const subjectData = this.state.subjectData;
console.log(subjectData);
// const subjectSelect = subjectData.map

const subjectOption =  Object.keys(subjectData).map(key=>{
 return  <option value={subjectData[key]['id']}>{subjectData[key]['subject_name']}</option>
 })


        return (
            <div>
            
  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label class="block  tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
      Quiz Name
      </label>
      <input  class="appearance-none block w-full text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="quiz_name" onChange={this.inputChangeHandler} type="text" placeholder="Quiz Name...."/>
 
    </div>
    <div class="w-full md:w-1/2 px-3">
      <label class="block  tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
       Subject
      </label>
      <select class="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="subject_id" onChange={this.inputChangeHandler} type="text" placeholder="Doe">
{subjectOption}

      </select>
    </div>
  </div>
  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full px-3">
      <label class="block  tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
     Description
      </label>
      <input class="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="description" onChange={this.inputChangeHandler} type="text" placeholder="description"/>
      
    </div>
  </div>
  <div class="flex flex-wrap -mx-3 mb-2">
    <div class="w-full md:w-1/4 px-3 mb-6 md:mb-0">
      <label class="block  tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
        Point
      </label>
      <input class="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="point" onChange={this.inputChangeHandler} type="text" placeholder="Point"/>
    </div>
    <div class="w-full md:w-1/4 px-3 mb-6 md:mb-0">
      <label class="block  tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
        Time
      </label>
      <input class="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="time" onChange={this.inputChangeHandler} type="text" placeholder="Time"/>
    </div>
    <div class="w-full md:w-1/4 px-3 mb-6 md:mb-0">
      <label class="block  tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
        Default Positive Mark
      </label>
      <input class="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="posMark" onChange={this.inputChangeHandler} type="text" placeholder="Positive Mark"/>
    </div>
    <div class="w-full md:w-1/4 px-3 mb-6 md:mb-0">
      <label class="block  tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">
        Default Negative Mark
      </label>
      <input class="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="negMark" onChange={this.inputChangeHandler} type="text" placeholder="Negative Mark"/>
    </div>
  </div>




  <div class="flex flex-wrap -mx-3 mb-2">
    <div class="w-full md:w-1/4 px-3 mb-6 md:mb-0">
      <label class="block  tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
        Question Sort
      </label>
      <select class="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="isquestionsort" onChange={this.inputChangeHandler} type="text" placeholder="Point">
        <option value="0">No</option>
        <option value="1">yes</option>
      </select>
    </div>
    <div class="w-full md:w-1/4 px-3 mb-6 md:mb-0">
      <label class="block  tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
        Option Sort
      </label>
      <select class="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="isoptionsort" onChange={this.inputChangeHandler} type="text" placeholder="Point">
        <option value="0">No</option>
        <option value="1">yes</option>
      </select>
    </div>
    <div class="w-full md:w-1/4 px-3 mb-6 md:mb-0">
      <label class="block  tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
      Question Limit
      </label>
      <input class="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="questionlimit" onChange={this.inputChangeHandler} type="text" placeholder="Question Limit"/>
      
  
    </div>
    <div class="w-full md:w-1/4 px-3 mb-6 md:mb-0">
      <label class="block  tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">
      Attend Limit
      </label>
      <input class="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="attendlimit" onChange={this.inputChangeHandler} type="text" placeholder="Attend Limit"/>
      
    </div>
  </div>
  <div class="py-2.5">
  <UploadImgBB uploadHandle = {this.uploadFile} multiple={false}/>
    </div>
  
        <div class="py-2.5 ">
 
  <img g class="object-cover  w-96" src={this.state.imagetodisplay}/> 
</div>

<div className='py-2.5'>
 {this.state.message==1?<div class="p-4 mb-4 text-sm text-green-700 bg-green-100 rounded-lg dark:bg-green-200 dark:text-green-800" role="alert">
  <span class="font-medium">Updated Successfully</span> 
</div>:""}
<button onClick={this.insertQuizMeta}
              type="submit"
              className="py-2.5 group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" disabled={this.state.message==0?false:true}
            >
             {this.state.buttonState}
            </button>  

  </div>
            </div>
        )
    }
}

export default AddQuizMeta
