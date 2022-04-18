import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import 'jquery/dist/jquery.min.js';
// import 'bootstrap/dist/css/bootstrap.min.css';
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"
import $ from 'jquery'; 
import 'datatables.net-rowreorder';
import 'datatables.net-responsive';
import axios from 'axios';
import TableAnimation from '../../../Component/TableAnimation/TableAnimation';
export class AllQuestion extends Component {

    state = {
        AllQuestionData :"",
        isactive:"translate-x-5 pointer-events-none inline-block h-5 w-5  rounded-full bg-blue-800 shadow transform ring-0 transition ease-in-out duration-200",
        isdeactive:"translate-x-0 pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200",
        loading:true
      }
    
    
    
      componentDidMount() {
    
     
    axios.get('/question/all')
    .then( (response) =>{
      // handle success
      console.log(response.data);
    this.setState({AllQuestionData:response.data.data
    ,loading:false
    })
    $(document).ready(function () {
      $('#example').DataTable( {
        rowReorder: {
            selector: 'td:nth-child(2)'
        },
        responsive: true
       } );
    });
    })
    .catch(  (error) =>{
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });
    
    
      
     }
    
    
    
     quizStatusHandler = (e) =>{
     
      // console.log(e.target.firstChild)
     if(e.target.getAttribute("status") == "deactive"){
      e.target.setAttribute("status", "active");
      e.target.firstChild.classList.remove("translate-x-0", "bg-white");
      e.target.firstChild.classList.add("translate-x-5", "bg-blue-800");
     }else if(e.target.getAttribute("status") == "active"){
      e.target.setAttribute("status", "deactive");
      e.target.firstChild.classList.remove("translate-x-5", "bg-blue-800");
      e.target.firstChild.classList.add("translate-x-0", "bg-white");
    }
    
    axios.post('/question/status/'+e.target.value)
    .then( (response) =>{
     console.log(response)
    })
    .catch(  (error) =>{
      
      console.log(error);
    })
    .then(function () {
     
    });
    
    
    
     
    
    
    
     
   
    
    
    
     }
      render(){
       
   const  isJson=(item)=> {
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
     
    
     
    
    
     var AllQuestionData = this.state.AllQuestionData;
     
     
     var TableData = Object.keys(AllQuestionData)
     .map(key=>{
   var question_name =  isJson(AllQuestionData[key].question)?JSON.parse(AllQuestionData[key].question).question.substr(0, 50):"Question Error" ;
   var quiz_name =   AllQuestionData[key].quiz_name;
      var status =   AllQuestionData[key].status;
     var subject_name =   AllQuestionData[key].subject_name;
     var image =   JSON.parse(AllQuestionData[key].image).thumb;
     
     var statusCheck = status ==0?"deactive":"active";
     var id =   AllQuestionData[key].id ;
     var statusTogggleClassHandle = status ==0?this.state.isdeactive:this.state.isactive; 
     
     
     
     
      return (  <tr>
       <td class="px-6 py-4 whitespace-nowrap">
         <div class="flex items-center">
           <div class="flex-shrink-0 h-10 w-10">
             <img class="h-10 w-10 rounded-full" src={image} alt=""/>
           </div>
           <div class="ml-4">
             <div class="text-sm font-medium text-gray-900">
             {question_name}
             </div>
             <div class="text-sm text-gray-500">
             {quiz_name}
             </div>
           </div>
         </div>
       </td>
       <td class="px-6 py-4 whitespace-nowrap">
         <div class="text-sm text-gray-900">{subject_name}</div>
         {/* <div class="text-sm text-gray-500">Optimization</div> */}
       </td>
     
       <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
         
       <button value={id} onClick={this.quizStatusHandler} status={statusCheck} type="button" class="bg-gray-200 relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" role="switch" aria-checked="false">
      
     
     <span class="statuscolor" aria-hidden="true"  className={statusTogggleClassHandle}></span>
     
     
     
     </button>
     
       </td>
       <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
         <Link to={'/question/edit/'+id} class="text-indigo-600 hover:text-indigo-900">Edit</Link>
       </td>
     </tr>)
      
     })
     
     
     
     
     
     
    
    
    
    
    // var TableData = [""];
    
    
    
    
      return (
     
              
         
        <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg p-5">
    
    
    
     
        {this.state.loading?<TableAnimation/>:  
        <table id="example" class="display nowrap" style={{ width: '100%' }} className="min-w-full divide-y divide-gray-200  ">
          <thead class="bg-gray-50">
            <tr>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Question
              </th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                 Subejct
              </th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
            
              <th scope="col" class="relative px-6 py-3">
                <span class="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
          
    
    
            {TableData}
    
    
    
    
        
    
           
          </tbody>
        </table>
    }  </div>
    
    
     
      );
    }
}

export default AllQuestion