// import React, {Component} from "react";
// import { Link } from "react-router-dom";
// class Navbarx extends Component{

//   state = {
//     profileshow:false,
//     mobilemenushow:false
//   }


//   handleProfileButton = ()=>{
//     // document.querySelector("#profilebar").classList.toggle("hidden");
//     if(this.state.profileshow==false){
//       this.setState({profileshow:true})
//     }else{
//       this.setState({profileshow:false})
//     }
  
//   }

//   mobileMenuHandler = ()=>{
//     // document.querySelector("#mobile-menu").classList.toggle("hidden")
//     if(this.state.mobilemenushow==false){
//       this.setState({mobilemenushow:true})
//     }else{
//       this.setState({mobilemenushow:false})
//     }
//   }


//   render(){

// var MobileMenu = this.state.mobilemenushow? <div class="  sm:hidden" id="mobile-menu">
// <div class="px-2 pt-2 pb-3 space-y-1">
  
//   <Link to="/quiz" class="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium" aria-current="page">Quiz</Link>

//   <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Teachers</a>

//   <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Students</a>

//   <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Settings</a>
// </div>
// </div>:"";
//  var PcMenu =<div class="flex-1 hidden justify-center items-center sm:block sm:ml-6">
//  <div class="flex space-x-4">

//    <Link to="/quiz" class="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium" aria-current="page">Quiz</Link>

//    <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Teachers</a>

//    <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Students</a>

//    <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Settings</a>
//  </div>
// </div>;


//     return(<>
 
// <nav class="bg-gray-800">
//   <div class="max-w-full mx-auto px-2 sm:px-6 lg:px-8">
//     <div class="relative flex items-center justify-between h-16">
//       <div class="flex-1 justify-start items-start flex items-center sm:hidden">
     
//         <div class="flex-1 ">

//           <button type="button" class=" inline-flex   p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" onClick={this.mobileMenuHandler} aria-controls="mobile-menu" aria-expanded="false">
//             <span class="sr-only">Open main menu</span>
         
//              <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
//               <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
//             </svg>  
            
//             <svg class="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
//               <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
//             </svg>
//           </button>

//         </div>
       
//       </div>
//       <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
//         <div class="flex-shrink-0 flex items-center text-white text-3xl">
          
//           AloronBD
//         </div>
   
//       </div>

//       {PcMenu}


//       <div class="flex-1  justify-end flex items-center  sm:static sm:inset-auto sm:ml-6 sm:pr-0">
//         <button type="button" class="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
//           <span class="sr-only">View notifications</span>
           
//           <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
//             <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
//           </svg>
//         </button>

        
//         <div class="ml-3 relative">
//           <div>
//             <button type="button" onClick={this.handleProfileButton} class="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
//               <span class="sr-only">Open user menu</span>
//               <img class="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
//             </button>
//           </div>

       
//          {this.state.profileshow? <div id="profilebar" class=" z-40 origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1">
            
//             <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-0">Your Profile</a>
//             <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-1">Settings</a>
//             <Link onClick={() =>{  setIsOpenProfileButton(!isOpenProfileButton) ;logout();props.setLogout()  }}  to="/profile" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-2">Log Out</Link>
//           </div>:""}



//         </div>
//       </div>
//     </div>
//   </div>

 
//   {MobileMenu}


// </nav>
    
    
    
//     </>);
//   }

// }


// export default Navbarx;



 