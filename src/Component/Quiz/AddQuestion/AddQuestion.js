import React, { Component } from 'react';
import MyEditor from '../../MyEditor/MyEditor';
import ReactDOM from 'react-dom';
import $ from "jquery";
import './AddQuestion.css';
import isset from "isset-php";
import axios from 'axios';
import { Redirect } from 'react-router';
class AddQuestion extends Component {

    state = {
        quiz_id:"",
        question: {
            question:"",
            type:""
        },
        questiontype:"",
        rightNowOption:"",
        options:{
            A:{
                option:"",
                type:""
            }
            
             },
             CountOption:1,
             posMark:1,
             negMark:1,
             answer:[]
    }

    componentDidMount(){
        this.setState({
            quiz_id:this.props.match.params.id
        })
        console.log(this.props);
    }
 


CountTheOption = () =>{

    var countOptionOld =  this.state.CountOption  ;  
    countOptionOld = countOptionOld+=1;
    this.setState({CountOption:countOptionOld});

}
mathOrTextSwitchHandler = (e)=>{
console.log(e.target.value);

var oldOption = "";


if(isset(() =>  this.state.options[e.target.id].option)){
var oldOption = this.state.options[e.target.id].option;
}
 var selectValue = e.target.value;
 
var MakeOptionNow = {
    option:oldOption,
    type:selectValue
}
this.setState({
    options:{
        ...this.state.options,
       [e.target.id]:MakeOptionNow
    }
})
    
console.log(this.state.options)
}
     

QuestionMathOrText = (e) =>{
     
    var makeQuesObj = {
        question:this.state.question.question,
        type:e.target.value
    }

    this.setState({
        question:makeQuesObj
    })

}


posMarkHandler = (e)=>{
this.setState({posMark:e.target.value})
}

negMarkHandler = (e)=>{
    this.setState({negMark:e.target.value})
    }

    AnswerHandler =(e)=>{
this.setState({
    answer: [...this.state.answer,e.target.value]
   
})
    }




     mysqlEscape = (stringToEscape)=>{
        if(stringToEscape == '') {
            return stringToEscape;
        }
        return stringToEscape.replaceAll("xmlns=\"http://www.w3.org/1998/Math/MathML\"","");
        // return stringToEscape
        //     .replace(/\\/g, "\\\\")
        //     .replace(/\'/g, "\\\'")
        //     .replace(/\"/g, "\\\"")
        //     .replace(/\n/g, "\\\n")
        //     .replace(/\r/g, "\\\r")
        //     .replace(/\x00/g, "\\\x00")
        //     .replace(/\x1a/g, "\\\x1a");
    }


    SubmitData = ()=>{


 console.log( JSON.stringify(this.state))
var formData = new FormData();
 

formData.append('data', JSON.stringify(this.state) );

axios.post('/addquestion',formData )
.then( (response) => {
  console.log(response.data)
//   window.location.reload();
 
})
.catch(  (error) => {
  console.log(error);
});

this.props.history.push("/add/question/"+this.state.quiz_id);
 
    }





 
  render() {

      var countOption =  this.state.CountOption  ;

  const AddOptionsHandler = (e) =>{
 
       console.log(this.state.question)
        console.log(this.state.option)
var CreateOption =  (countOption+ 9).toString(36).toUpperCase() ;
    console.log(CreateOption);
ReactDOM.render(
        <>   <div class="flex justify-around pt-6">
  <div class="">
     {/* <input id={CreateOption} type="radio" name="group1" class="radio4" /> 
  <label for={CreateOption}>Text</label>   */}
   <input id={CreateOption} name={CreateOption} type="radio" onChange={this.mathOrTextSwitchHandler}   value="text"  /> Text
</div>
 <h3 class="mb-6 text-2xl font-medium text-center">Add Option {CreateOption}</h3>
  <div class="">
   <input id={CreateOption} name={CreateOption}  type="radio" onChange={this.mathOrTextSwitchHandler}    value="math"  /> Math
   {/* <input id={CreateOption} type="radio" name="group1" class="radio4" /> 
  <label for={CreateOption}>Math</label>   */}
  
  </div>
 </div>
   <MyEditor
       handleChange={(data) => {
                //  setEditor(data);
                // this.setState({question:data})
                var OldData = this.state.options;
                 var oldType = "text";
                if(isset(()=>this.state.options[CreateOption].type )){
var oldType = this.state.options[CreateOption].type;
                }
                //  var oldType = this.state.options.[CreateOption].type == null?"text": this.state.options.[CreateOption].type;
                console.log( this.state.options[CreateOption] );
              
                 var optionMake =  {
                          ...OldData,
                      [CreateOption]:{
                     option:this.mysqlEscape(data) ,
                     type:oldType

                      },
                
                 };
                 this.setState({
                     options:optionMake
                 });
                //   console.log(this.state)
                 
               }}
            //    data={editor}

      
            data = {this.state.option}
              //  {...props}
             /></>
 ,
  document.getElementById('option'+CreateOption)

);

// e.target.parentNode.firstChild.append(<MyEditor
//        handleChange={(data) => {
//                 //  setEditor(data);
//                 this.setState({question:data})
//                }}
//             //    data={editor}
//             data = {this.state.question}
//               //  {...props}
//              />);
    //          ReactDOM.render(<MyEditor
    //    handleChange={(data) => {
    //             //  setEditor(data);
    //             this.setState({question:data})
    //            }}
    //         //    data={editor}
    //         data = {this.state.question}
    //           //  {...props}
    //          />,e.target.parentNode.firstChild);

 
   this.CountTheOption();

  }

 
        return (
            <>
      
 <div class="container mx-auto p-10">
<div class="findnode " id="findnode">



<div class="flex flex-col flex-wrap justify-center space-x-2 leading-6 text-indigo-900 md:flex-row">
                        <input type="number" placeholder="Positive Mark" onChange={this.posMarkHandler} class="inline-block w-full h-16 px-6 py-0 mx-0 mt-0 mb-8 overflow-visible text-xl font-semibold text-gray-700 align-top bg-transparent border-2 border-gray-300 border-solid rounded-full resize-none md:w-auto focus:outline-none cursor-text md:text-left focus:ring-2 focus:ring-green-400 focus:border-green-500"/>
                        <input type="number" name="password" placeholder="Negative Mark"  onChange={this.negMarkHandler}  class="inline-block w-full h-16 px-6 py-0 mx-0 mt-0 mb-8 overflow-visible text-xl font-semibold text-gray-700 align-top bg-transparent border-2 border-gray-300 border-solid rounded-full resize-none md:w-auto focus:outline-none cursor-text md:text-left focus:ring-2 focus:ring-green-400 focus:border-green-400"/>
                    
                    </div>






<div class="flex justify-around">


  <div class="">
     <input id="ques" name="ques" type="radio" onChange={this.QuestionMathOrText}   value="text"  /> Text
 
</div>
 <h3 class="mb-6 text-2xl font-medium text-center">Add Question</h3>
  <div class="">
   <input id="ques"  name="ques" type="radio" onChange={this.QuestionMathOrText}   value="math"  /> Math
 
  </div>
 </div>

   <MyEditor
       handleChange={(data) => {
                //  setEditor(data);
               
                var makeQuesObj = {
                    question:this.mysqlEscape(data),
                    type:this.state.question.type
                }
            
                this.setState({
                    question:makeQuesObj
                })
               }}
            //    data={editor}
          
            data = {this.state.question}
              //  {...props}
             />  </div>
             
             <div class="optionA" id="optionA"></div>
             <div class="optionB" id="optionB"></div>
             <div class="optionC" id="optionC"></div>
                   <div class="optionD" id="optionD"></div>
                     <div class="optionE" id="optionE"></div>
                       <div class="optionF" id="optionF"></div>
                         <div class="optionG" id="optionG"></div>

                    <button onClick={AddOptionsHandler} class="w-full px-3 py-4 font-medium text-white bg-blue-600 rounded-lg my-5">Add More Option</button>
           
{/*  */}
<div class="block">
  <span class="text-gray-700">Answer</span>
  <div class="mt-2">
   {
 Object.keys(this.state.options) 
 .map(e=>{
     return (
        <div>
        <label class="inline-flex items-center">
          <input onChange={this.AnswerHandler} type="checkbox" value={e} class="form-checkbox"/>
          <span class="ml-2">{e}</span>
        </label>
      </div>
     )
 })

   }
   
  


  </div>
</div>
{/*  */}
                
    </div>
           

{/* form for add quiz */}







      
 {/* signin form */}
                {/* <div class="relative z-10 h-auto p-8 py-10 overflow-hidden bg-white border-b-2 border-gray-300 rounded-lg shadow-2xl px-7">
                    <h3 class="mb-6 text-2xl font-medium text-center">Sign in to your Account</h3>
                    <input type="text" name="email" class="block w-full px-4 py-3 mb-4 border border-2 border-transparent border-gray-200 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none" placeholder="Email address"/>
                    <input type="password" name="password" class="block w-full px-4 py-3 mb-4 border border-2 border-transparent border-gray-200 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none" placeholder="Password"/>
                    <div class="block">
                        <button class="w-full px-3 py-4 font-medium text-white bg-blue-600 rounded-lg">Log Me In</button>
                    </div>
                    <p class="w-full mt-4 text-sm text-center text-gray-500">Don't have an account? <a href="#_" class="text-blue-500 underline">Sign up here</a></p>
                </div>
            */}
 {/* form */}


<button type="button" onClick={this.SubmitData}>Click Jere</button>
  
            </>
        )
    }
}

export default AddQuestion
