import React, { Component } from 'react';
import MyEditor from '../../MyEditor/MyEditor';
import ReactDOM from 'react-dom';
import $ from "jquery";
import './AddQuestion.css';
import isset from "isset-php";
import axios from 'axios';
import { Redirect } from 'react-router';
import QuizController from '../../../Container/QuizController/QuizController';
class AddQuestion extends Component {
    state = {
        quiz_id:"",
        question: {
            question:"",
            type:"text"
        },
        questiontype:"",
        rightNowOption:"",
        options:{
            A:{
                option:"",
                type:"text"
            },
            // B:{
            //     option:"",
            //     type:""
            // },
            // C:{
            //     option:"",
            //     type:""
            // },
            // D:{
            //     option:"",
            //     type:""
            // }
            
             },
             CountOption:1,
             posMark:0,
             negMark:0,
             answer:[],
             buttonState:"Add Question",
             message:0
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
    hackFreeTrial =  () =>{
      var tick = document.querySelectorAll(".wrs_tickContainer");
 
for(var i = 0 ; i<tick.length; i++){

    tick[i].remove()
}
    }
    AnswerHandler =(e)=>{
        var answerarray =  this.state.answer;
        
        if(e.target.checked){
           
             answerarray = [...answerarray, e.target.value];
            }else{
                const index = answerarray.indexOf(e.target.value);
if (index > -1) {
    answerarray.splice(index, 1);  
}
  }
   this.setState({
                answer: answerarray
             }) 
            console.log(this.state.answer);


    }
  mysqlEscape = (stringToEscape)=>{
        if(stringToEscape == '') {
            return stringToEscape;
        }
        return stringToEscape.replaceAll("xmlns=\"http://www.w3.org/1998/Math/MathML\"","");
    }


    SubmitData = ()=>{
this.setState({buttonState:"Adding..."})

 console.log( JSON.stringify(this.state))
var formData = new FormData();
 

formData.append('data', JSON.stringify(this.state) );

axios.post('/addquestion',formData )
.then( (response) => {
  console.log(response.data)
//   window.location.reload();
this.setState({message:1, buttonState:"Added"})
 
})
.catch(  (error) => {
  console.log(error);
});

this.props.history.push("/add/question/"+this.state.quiz_id);
 
    }
    
  render() {

      var countOption =  this.state.CountOption  ;

  const AddOptionsHandler = (e) =>{
var CreateOption =  (countOption+ 9).toString(36).toUpperCase() ;
    console.log(CreateOption);
ReactDOM.render(
        <>   <div class="flex justify-center">
        <div class="block mt-3 p-6 py-2.5  rounded-lg shadow-lg bg-white "> <div class="flex justify-around pt-6">
  <div class="">
   <input id={CreateOption} name={CreateOption} type="radio" onChange={this.mathOrTextSwitchHandler}   value="text"  checked /> Text
</div>
 <h3 class="mb-6 text-2xl font-medium text-center">Add Option {CreateOption}</h3>
  <div class="">
   <input id={CreateOption} name={CreateOption}  type="radio" onChange={this.mathOrTextSwitchHandler}    value="math"  /> Math
 </div>
 </div>
   <MyEditor
       handleChange={(data) => {
               var OldData = this.state.options;
                 var oldType = "text";
                if(isset(()=>this.state.options[CreateOption].type )){
var oldType = this.state.options[CreateOption].type;
                }
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
                    ,message:0,  buttonState:"Add Question"
                 });
                }}
             data = {this.state.options}
              /> </div>
              </div></>
 ,
  document.getElementById('option'+CreateOption)

);
  this.CountTheOption();

  }
 

const  addFourOption = () =>{
 

   var i = 0;
  var   myInterval = setInterval(()=>{
        i++;
        document.getElementById("addOptionButton").click();
        if(i==4){
            i=0;
            clearInterval(myInterval);
        }
    }, 100);
   
 

}
 
  return (
            <>
     <button onClick={this.hackFreeTrial} class="freetrial">Hack</button>
 <div class="container mx-auto p-10">
<div class="findnode " id="findnode"> 
    <div> <input type="text" className='appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name'  placeholder="Positive Mark  " onChange={this.posMarkHandler}  />
              
                        </div>
 <div class="flex justify-center">
  <div class="block p-6 py-2.5 mt-3  rounded-lg shadow-lg bg-white ">
  <div class="flex justify-around">
 <div class="">
     <input id="ques" name="ques" type="radio" onChange={this.QuestionMathOrText}   value="text"  /> Text
 
</div>
 <h3 class="mb-6 text-2xl font-medium text-center">Add Question</h3>
  <div class="">
   <input id="ques"  name="ques" type="radio" onChange={this.QuestionMathOrText}   value="math"  /> Math
 
  </div>
 </div>
 <div className='w-90'>
 <MyEditor
       handleChange={(data) => {
                var makeQuesObj = {
                    question:this.mysqlEscape(data),
                    type:this.state.question.type
                }
              this.setState({
                    question:makeQuesObj
                })
               }}
             data = {this.state.question}
              /> 
 </div>

  </div>
</div>


   </div>
             
             <div class="optionA" id="optionA"></div>
             <div class="optionB" id="optionB"></div>
             <div class="optionC" id="optionC"></div>
                   <div class="optionD" id="optionD"></div>
                     <div class="optionE" id="optionE"></div>
                       <div class="optionF" id="optionF"></div>
                         <div class="optionG" id="optionG"></div>
                         <div className="flex justify-center">
                         <button id="addOptionButton" onClick={AddOptionsHandler} class="px-3 m-6 py-4 font-medium text-white bg-blue-600 rounded-lg my-5">Add More Option</button>
                         <button id="addOptionButton" onClick={addFourOption} class="px-3 m-6 py-4 font-medium text-white bg-blue-600 rounded-lg my-5">Add Four Option</button>
                         </div>

 
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
 
                
    </div>
           

<div className="flex  justify-center">
{/* <button className=" px-3 py-4 font-medium text-white bg-blue-600 rounded-lg my-5 " type="button" onClick={this.SubmitData}>Submit</button> */}

<div className='py-2.5'>
 {this.state.message==1?<div class="p-4 mb-4 text-sm text-green-700 bg-green-100 rounded-lg dark:bg-green-200 dark:text-green-800" role="alert">
  <span class="font-medium">Updated Successfully</span> 
</div>:""}
<button onClick={this.SubmitData}
              type="submit"
              className="py-2.5 group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" disabled={this.state.message==0?false:true}
            >
             {this.state.buttonState}
            </button>  

   </div>




</div>

  
            </>
        )
    }
}

export default AddQuestion
