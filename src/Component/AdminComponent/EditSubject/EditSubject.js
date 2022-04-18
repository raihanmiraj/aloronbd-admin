import axios from 'axios'
import React, { Component } from 'react'
import UploadImgBB from '../../UploadImgBB/UploadImgBB'
export class EditSubject extends Component {
    state={
        subject_id:"",
        image:"",
        subject_name:"",
        description:"",
        newimage:0,
        imagechanging:0,
        imagetodisplay:"",
        buttonState:"Update Subject",
        message:0
    }

    componentDidMount(){
        this.setState({
            quiz_id:this.props.match.params.id
        })
   axios.get("/subject/get/"+this.props.match.params.id)
    .then((response)=>{

    var data = response.data;
 var images = JSON.parse(data.image);
 console.log(images)
 this.setState({
     image:images,
     subject_name:data.subject_name,
     subject_id:data.id,
     description:data.description,
     imagetodisplay:images.image

 })
     
    }) 
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
          this.setState({message:0,  buttonState:"Update Subject"})
      }

    }
    onClickButtonHandler = ( ) =>{
      this.setState({message:0,  buttonState:"Updating..."})
     
  if(this.state.newimage==1){
    var images = this.state.image;
    var imgarray = {
        image:  typeof  images[0].image !== "undefined"?images[0].image.url:"",  
        medium:typeof  images[0].medium !== "undefined"?images[0].medium.url:"",
        thumb:typeof  images[0].thumb !== "undefined"?images[0].thumb.url:"",
      }
  }else{
    var imgarray =    this.state.image; 
  }
 
 
  var subjectData = {
    subject_name:this.state.subject_name,
    description:this.state.description,
    image:imgarray
    
 }
       
 console.log(subjectData)

axios.post('/subject/edit/'+this.state.subject_id,subjectData)
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
      <input value={this.state.subject_name}  class="appearance-none block w-full text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="subject_name" onChange={this.inputChangeHandler} type="text" placeholder="Subject Name...."/>
 
    </div>
    <div class="w-full md:w-1/2 px-3">
     
      <label class="block  tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
  Description
      </label>
      <input  value={this.state.description} class="appearance-none block w-full text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="description" onChange={this.inputChangeHandler} type="text" placeholder="Description...."/>
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

export default EditSubject
