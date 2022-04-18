import axios from 'axios'
import React, { Component } from 'react'
import UploadImgBB from '../../UploadImgBB/UploadImgBB'
export class AddSubject extends Component {
    state={
        image:[],
        subject_name:"",
        description:"",
        newimage:0,
        imagechanging:0,
        imagetodisplay:"",
        buttonState:"Add Subject",
        message:0
    }
    uploadFile = (data) =>{
        this.setState({image:data,
          newimage:1,
    imagetodisplay:data[0].image.url})
    }
    inputChangeHandler = (e)=>{
        this.setState({
            [e.target.id]:e.target.value
        })
        if(this.state.message==1){
          this.setState({message:0,  buttonState:"Add Subject"})
      }

    }
    onClickButtonHandler = ( ) =>{
      this.setState({message:0,  buttonState:"Adding..."})
  
  var images = this.state.image;
  var imgarray = {
    image:  typeof  images[0].image !== "undefined"?images[0].image.url:"",  
    medium:typeof  images[0].medium !== "undefined"?images[0].medium.url:"",
    thumb:typeof  images[0].thumb !== "undefined"?images[0].thumb.url:"",
  }
  console.log(imgarray)
  var subjectData = {
    subject_name:this.state.subject_name,
    description:this.state.description,
    image:imgarray
    
 }
       
 

axios.post('/subject/add',subjectData)
.then( (response) => {
  console.log(response.data)
this.setState({message:1})
 
})
.catch(  (error) => {
  console.log(error);
});

    }
    render() {
        return (
            <div>

<div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label class="block  tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
      Subject  Name
      </label>
      <input  class="appearance-none block w-full text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="subject_name" onChange={this.inputChangeHandler} type="text" placeholder="Subject Name...."/>
 
    </div>
    <div class="w-full md:w-1/2 px-3">
     
      <label class="block  tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
  Description
      </label>
      <input  class="appearance-none block w-full text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="description" onChange={this.inputChangeHandler} type="text" placeholder="Description...."/>
    </div>
  </div>
                <div className='py-2.5'>
                <UploadImgBB uploadHandle = {this.uploadFile} multiple={false}/>
                  </div>
               
                <div className=" flex justify-center pt-5">
                {this.state.message==1?<div class="p-4 mb-4 text-sm text-green-700 bg-green-100 rounded-lg dark:bg-green-200 dark:text-green-800" role="alert">
  <span class="font-medium">Updated Successfully</span> 
</div>:""}

  </div>
  <div class="py-2.5">
 
 <img g class="object-cover  w-96" src={this.state.imagetodisplay}/> 
</div>
<div> 
<button  onClick={this.onClickButtonHandler}
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

export default AddSubject
