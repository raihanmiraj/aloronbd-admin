import axios from 'axios'
import React, { Component } from 'react'
import UploadImgBB from '../../../Component/UploadImgBB/UploadImgBB'

export class UserSettings extends Component {

    state  = {
        userdatadetails:"",
        images:"",
        email:"",
        password:"",
        name:"",
        birthdate:"",
        id:"",
        presentaddress:"",
        school:"",
        college:"",
        phoneno:"",
        bio:"",
        newimage:"",
        loading:true,
        imagetodisplay:"",
        profile_image:"",
        buttonstate:"Save",
        submit:0
    }
    isJson=(item)=> {
        item = typeof item !== "string"
            ? JSON.stringify(item)
            : item;
    
        try {
            item = JSON.parse(item);
        } catch (e) {
            return false;
        }
    
        if (typeof item === "object" && item !== null) {
            return true;
        }
    
        return false;
    }
    componentDidMount(){
        document.title ="Profile Settings";
         const {email, name,id} = this.props.user;
         console.log(email)
     
         this.setState({email:email, name :name,id:id})
    }
    inputChangeHandler = (e)=>{
        this.setState({
            [e.target.id] :e.target.value 
           
        })
        console.log(this.state)
    }

    uploadFile = (data)=>{
 
        this.setState({images:data,
           newimage:1,
           imagetodisplay:data[0].image.url});
           console.log(data[0].image.url);
           this.formSubmitHandler();
       }

    formSubmitHandler = ()=>{
        this.setState({buttonstate:"Updating..."})
   axios.post('/user/details/update', {email:this.state.email , name : this.state.name , password : this.state.password ,  id : this.state.id})
  .then((response)=>{
      console.log(response)
      this.setState({buttonstate:"Save",submit:1})

  })
  setTimeout(()=>{
      this.setState({submit:0});
  },5000);
  

    }
  render() {
    return (
      
          <div class="relative bg-gray-200 min-h-screen pt-2 font-mono ">
              
           {this.state.submit==1?<div class=" fixed right-0 top-10 bg-green-100 rounded-lg py-5 px-6 mb-3 w-1/5 text-base text-green-700 inline-flex items-center  " role="alert">
  <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check-circle" class="w-4 h-4 mr-2 fill-current" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
    <path fill="currentColor" d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path>
  </svg>
 Updated Successfully
</div>:""}
 <div class="container mx-auto">
                  <div class="inputs w-full max-w-2xl p-6 mx-auto">
                  <div class="flex justify-center mb-2"> 
                  
                  {/* <img src={this.state.imagetodisplay==null || 
                    this.state.imagetodisplay=="" ? "https://i.ibb.co/f0wkDT8/sara-budhwani-h-P71-B8-BPw-unsplash.jpg" : this.state.imagetodisplay} class="rounded-full h-24 w-24 flex items-center justify-center"/> */}
                   </div>

                   {/* <div className='flex justify-center'>
               
<UploadImgBB  uploadHandle = {this.uploadFile}  multiple={false}/>
</div> */}


          
                      <h2 class="text-2xl text-gray-900">Account Setting</h2>
                      <form class="mt-6 border-t border-gray-400 pt-4">
                          <div class='flex flex-wrap -mx-3 mb-6'>
                          <div class='w-full md:w-full px-3 mb-6'>
                                  <label class='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2' for='grid-text-1'>Name</label>
                                  <input class='appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500' value={this.state.name} onChange={this.inputChangeHandler} id='name' type='text' placeholder='Enter Password'  required/>
                              </div>
                              <div class='w-full md:w-full px-3 mb-6'>
                                  <label class='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2' for='grid-text-1'>email address</label>
                                  <input class='appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500' value={this.state.email} onChange={this.inputChangeHandler} id='email' type='text' placeholder='Enter email'  required/>
                              </div>
                                <div class='w-full md:w-full px-3 mb-6'>
                                  <label class='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2' for='grid-text-1'>Password</label>
                                  <input class='appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500' value={this.state.password} onChange={this.inputChangeHandler} id='password' type='text' placeholder='Enter Password'  required/>
                              </div>

                           
                              
                              
                             
                              {/* <div class="personal w-full border-t border-gray-400 pt-4">
                                  <h2 class="text-2xl text-gray-900">Personal info:</h2>
                                  <div class="flex items-center justify-between mt-4">
                                  <div class='w-full md:w-1/2 px-3 mb-6'>
                                          <label class='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2' >Name</label>
                                          <input class='appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500' value={this.state.name} onChange={this.inputChangeHandler} id='name' type='text'  required/>
                                      </div>
                                      <div class='w-full md:w-1/2 px-3 mb-6'>
                                          <label class='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2' >Birthdate</label>
                                          <input class='appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500' value={this.state.birthdate} onChange={this.inputChangeHandler} id='birthdate' type='date'  required/>
                                      </div>
                                     
                                  </div>
                                  <div class='w-full md:w-full px-3 mb-6'>
                                          <label class='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2' >Hometown</label>
                                          <input class='appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500' value={this.state.hometown} onChange={this.inputChangeHandler} id='hometown' type='text'  required/>
                                      </div>
                                      <div class='w-full md:w-full px-3 mb-6'>
                                          <label class='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2' >Present Address</label>
                                          <input class='appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500' value={this.state.presentaddress} onChange={this.inputChangeHandler} id='presentaddress' type='text'  required/>
                                      </div>

                                      <div class='w-full md:w-full px-3 mb-6'>
                                          <label class='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2' >School</label>
                                          <input class='appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500' value={this.state.school} onChange={this.inputChangeHandler} id='school' type='text'  required/>
                                      </div>
                                      <div class='w-full md:w-full px-3 mb-6'>
                                          <label class='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2' >College</label>
                                          <input class='appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500' value={this.state.college} onChange={this.inputChangeHandler} id='college' type='text'  required/>
                                      </div>

                                  <div class='w-full md:w-full px-3 mb-6'>
                                      <label class='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>Phone No</label>
                                      <input class='appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500' value={this.state.phoneno} onChange={this.inputChangeHandler} id='phoneno' type='text'  required/>
                                  </div>
                                  <div class='w-full md:w-full px-3 mb-6'>
                                      <label class='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2' >Bio</label>
                                      <textarea class='bg-gray-100 rounded-md border leading-normal resize-none w-full h-20 py-2 px-3 shadow-inner border border-gray-400 font-medium placeholder-gray-700 focus:outline-none focus:bg-white' value={this.state.bio} onChange={this.inputChangeHandler} id='bio'  required></textarea>
                                  </div>
                                  <div class="flex justify-end">
                                      <button  onClick={this.formSubmitHandler}  class="appearance-none bg-gray-200 text-gray-900 px-2 py-1 shadow-sm border border-gray-400 rounded-md mr-3" type="button">{this.state.buttonstate}</button>
                                  </div>
                              </div> */}
                                <button  onClick={this.formSubmitHandler}  class="appearance-none bg-gray-200 text-gray-900 px-2 py-1 shadow-sm border border-gray-400 rounded-md mr-3" type="button">{this.state.buttonstate}</button>
                          </div>
                      </form>
                  </div>
              </div>
          </div> 
    )
  }
}

export default UserSettings