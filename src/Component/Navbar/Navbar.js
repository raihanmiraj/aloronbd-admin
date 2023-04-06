import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  state ={
    checklogin:false
  }
  componentDidMount(){
    this.setState({checklogin:this.props.checklogin})
  }
  render() {
  
const menu = <ul className="mt-3 text-white">
 
<li className="mt-3">
  <Link to="/quiz/allquiz" className="">
  All Quizzes
  </Link>
</li>
<li  className="mt-3">
      <Link to="/question/allques">
        All Question
      </Link>
    </li>
    
    <li  className="mt-3">
      <Link to="/subject/allsubject" >
        All Subjects
      </Link>
    </li>
   
    
    <li  className="mt-3">
      <Link to="/quiz/add">
       Add Quiz
      </Link>
    </li>
    <li  className="mt-3">
      <Link to="/subject/add" >
      Add Subject
      </Link>
    </li>
</ul>;

   
    
    return (
      <>
      {this.state.checklogin?
    
           <>
  <div className="font-sans text-gray-900 antialiased">
    <div className="min-h-screen flex bg-gray-200">
      <div className="flex-shrink-0 w-64 bg-gray-900">
        <Link to="/quiz">
          <div className="flex items-center h-16 px-4 bg-gray-900 text-xl text-white font-medium">
      
            <div className="ml-2" style={{ paddingTop: 2 }}>
             AloronBD
            </div>
          </div>
        </Link>
        <div>
          <div className="px-2 py-2">
            <div>{/**/}</div>
          </div>
          <div className="px-6 py-6 text-white">
            <Link
              to="/quiz"
              className="router-link-exact-active router-link-active"
            >
            Quiz Analytics
            </Link>
          </div>
          {/**/}
          <div className="px-6 py-6 border-t border-gray-700">
            <h4 className="text-sm text-gray-600 uppercase font-bold tracking-widest">
              Resources
            </h4>
            {menu}
          </div>
        </div>
      </div>
      <div className="flex-grow flex flex-col">
        <div className="relative shadow-md bg-white flex-shrink-0">
          <div className="flex justify-between items-center h-16 px-12">
            <div>
              <div className="relative w-64">
                <div className="relative z-50">
                  <input
                    type="text"
                    className="block w-full py-2 pl-12 pr-4 bg-gray-200 rounded-full border border-transparent focus:bg-white focus:border-gray-300 focus:outline-none"
                  />
                  <div className="flex items-center absolute left-0 inset-y-0 pl-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      className="h-6 w-6 fill-current text-gray-600"
                    >
                      <path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
                    </svg>
                  </div>
                </div>
                {/**/}
                {/**/}
              </div>
            </div>
            <div className="flex items-center">
              <Link to="/quiz">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="h-6 w-6"
                >
                  <path
                    d="M12 21a2 2 0 0 1-1.41-.59l-.83-.82A2 2 0 0 0 8.34 19H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h4a5 5 0 0 1 4 2v16z"
                    className="fill-current text-gray-400"
                  />
                  <path
                    d="M12 21V5a5 5 0 0 1 4-2h4a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1h-4.34a2 2 0 0 0-1.42.59l-.83.82A2 2 0 0 1 12 21z"
                    className="fill-current text-gray-600"
                  />
                </svg>
              </Link>
              <div className="ml-6">
                {/**/}
                <div className="relative">
                  <button
                    type="button"
                    className="block w-full focus:outline-none"
                  >
                    <span className="flex items-center" onClick={()=>{this.props.navbarhandle(this.props.navbaropen?false:true)}}>
                      <img
                        src="https://www.gravatar.com/avatar/9240e2357dc0b9a4cfd1b109c23af063?d=https%3A%2F%2Fui-avatars.com%2Fapi%2Fmuse"
                        className="h-8 w-8 rounded-full"
                      />
                      <span className="ml-3">{this.props.user.name}</span>


                     {this.props.navbaropen? <div class="origin-top-right absolute right-0 mt-2 top-10 w-48 rounded-md shadow-lg py-1 z-40 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1" bis_skin_checked="1">
                        
                        {/* <Link class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-0" to="/profile">Your Profile</Link> */}
                        <Link class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-1" to="/settings">Settings</Link><buttn class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-2"  onClick={()=>{
                          localStorage.removeItem("TOKEN_KEY");
                          window.location.href = window.location.origin
                        }}>Log Out</buttn>
                      
                      </div>:""}

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-6 w-6 ml-2 text-gray-600"
                      >
                        <path d="M15.3 9.3a1 1 0 0 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 1.4-1.4l3.3 3.29 3.3-3.3z" />
                      </svg>
                    </span>
                  </button>
                  {/**/}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-grow flex flex-col p-5">
        {this.props.children}

        </div>
      </div>
    </div>
  </div>
 
</> :this.props.children}</>
    );
  }
}

export default Navbar;
