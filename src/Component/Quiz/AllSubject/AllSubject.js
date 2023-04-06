import React from 'react';
import { Link } from 'react-router-dom';
import 'jquery/dist/jquery.min.js';
// import 'bootstrap/dist/css/bootstrap.min.css';
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"
import $ from 'jquery'; 
import 'datatables.net-rowreorder';
import 'datatables.net-responsive';
import axios from 'axios';
import TableAnimation from '../../TableAnimation/TableAnimation';
 

class AllSubject extends React.Component {

   state = {
    allsubjectdata :"",
    isactive:"translate-x-5 pointer-events-none inline-block h-5 w-5  rounded-full bg-blue-800 shadow transform ring-0 transition ease-in-out duration-200",
    isdeactive:"translate-x-0 pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200",
    loading:true,
    modalshow:false,
    deleteId:""
  }



  componentDidMount() {

 
axios.get('/subject/all')
.then( (response) =>{
  // handle success
  console.log(response.data);
this.setState({allsubjectdata:response.data.data
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

 deleteSubjectHandler = (e)=>{
 
   this.setState({modalshow:true,deleteId:e})
 }

 modalHide = ()=>{
  this.setState({modalshow:false})
 }
 deleteSubjectConfirm = ()=>{
  this.setState({modalshow:false})
  
  axios.post("/subject/delete/"+this.state.deleteId)
  .then((response)=>{
    console.log(response.data)
     var tableid = "tableid"+this.state.deleteId
    document.getElementById(tableid).remove();
  })

 
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

axios.post('/subject/status/'+e.target.value)
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
   

 

 


 var AllSubjectData = this.state.allsubjectdata;
 
 
 const TableData = Object.keys(AllSubjectData)
 .map(key=>{
  var quiz_name = "  quizAllMetaData[key].quiz_name ";
 
  var point =  1 ;
 


  var subject_name =   AllSubjectData[key].subject_name ;
 
 var status =   AllSubjectData[key].status;
 var description =   AllSubjectData[key].description;
 var image =   JSON.parse(AllSubjectData[key].image).thumb;
 
 var statusCheck = status ==0?"deactive":"active";
 var id =   AllSubjectData[key].id ;
 var statusTogggleClassHandle = status ==0?this.state.isdeactive:this.state.isactive; 
 
 
 
 
  return (  <tr key={id} id={"tableid"+id}>
   <td class="px-6 py-4 whitespace-nowrap">
     <div class="flex items-center">
       <div class="flex-shrink-0 h-10 w-10">
         <img class="h-10 w-10 rounded-full" src={image} alt=""/>
       </div>
       <div class="ml-4">
         <div class="text-sm font-medium text-gray-900">
         {subject_name}
         </div>
         <div class="text-sm text-gray-500">
          {description}
         </div>
       </div>
     </div>
   </td>
   <td class="px-6 py-4 whitespace-nowrap">
     <div class="text-sm text-gray-900">{point}</div>
     {/* <div class="text-sm text-gray-500">Optimization</div> */}
   </td>
 
   <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
     
   <button value={id} onClick={this.quizStatusHandler} status={statusCheck} type="button" class="bg-gray-200 relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" role="switch" aria-checked="false">
  
 
 <span class="statuscolor" aria-hidden="true"  className={statusTogggleClassHandle}></span>
 
 
 
 </button>
 
   </td>
   <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
     <Link to={'/subject/edit/'+id} class="text-indigo-600 hover:text-indigo-900">Edit</Link>
   </td>
   <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
    <button  onClick={()=>this.deleteSubjectHandler(id)} class="text-indigo-600 hover:text-indigo-900">Delete</button>

     
  </td>
 </tr>)
  
 })
 
 
 
 
 
 







 var ModalCode =  <div class="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
 <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
  
   <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
  
   <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
 
  
   <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
     <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
       <div class="sm:flex sm:items-start">
         <div class="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
       
           <svg class="h-6 w-6 text-red-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
             <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
           </svg>
         </div>
         <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
           <h3 class="text-lg leading-6 font-medium text-gray-900" id="modal-title">
        Delete Warning
           </h3>
           <div class="mt-2">
             <p class="text-sm text-gray-500">
               Are you sure you want to delete this Quiz </p>
           </div>
         </div>
       </div>
     </div>
     <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
       <button  type="button" onClick={this.modalHide} class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm">
      Cancel
       </button>
     
       <button  onClick={()=>this.deleteSubjectConfirm()} class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm">Accept</button>
 
 
     </div>
   </div>
 </div>
 </div>;


  return (
 
          
     
    <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg p-5">




 
    {this.state.loading?<TableAnimation/>:  
    <table id="example" class="display nowrap" style={{ width: '100%' }} className="min-w-full divide-y divide-gray-200  ">
      {this.state.modalshow?ModalCode:""}
      <thead class="bg-gray-50">
        <tr>
          <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Name
          </th>
          <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
             Question/ Point
          </th>
          <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Status
          </th>
        
          <th scope="col" class="relative px-6 py-3">
            <span class="sr-only">Edit</span>
          </th>
          <th scope="col" class="relative px-6 py-3">
            <span class="sr-only">Delete</span>
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
export default AllSubject;
