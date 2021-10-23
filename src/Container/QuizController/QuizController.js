import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import AllQuizzes from '../../Component/Quiz/AllQuizzes/AllQuizzes'

  class QuizController extends Component {
state={
  mobilemenu:false
}

    mobileSideBarMenuHandler=()=>{
      this.state.mobilemenu?this.setState({mobilemenu:false}):this.setState({mobilemenu:true});

    }


    render() {


var pcSideBarMenu = <ul role="list" class="text-sm font-medium text-gray-900 space-y-4 pb-6 border-b border-gray-200">

<li>
  <Link to="/quiz">
    Quiz Analytics
  </Link>
</li>

<li>
  <Link to="/quiz/allquiz">
    All Quizzes
  </Link>
</li>

<li>
  <Link to="/subject/allsubject" >
    All Subjects
  </Link>
</li>

<li>
  <Link to="/quiz/allquiz">
    All Custom Quizzes
  </Link>
</li>

<li>
  <Link to="/quiz/add">
   Add Quiz
  </Link>
</li>

</ul>;

var mobileSideBarMenu =      <ul role="list" class="font-medium text-gray-900 px-2 py-3">
<li>
  <Link to="/quiz"class="block px-2 py-3">
    Quiz Analytics
  </Link>
</li>

<li>
  <Link to="/quiz/allquiz" class="block px-2 py-3">
    All Quizzes
  </Link>
</li>

<li>
  <Link to="/subject/allsubject" class="block px-2 py-3">
    All Subjects
  </Link>
</li>

<li>
  <Link to="/quiz/allquiz" class="block px-2 py-3">
    All Custom Quizzes
  </Link>
</li>

<li>
  <Link to="/quiz/add" class="block px-2 py-3">
  Add Quiz
  </Link>
</li>
</ul>


        return (
            <div>
                
 
                <div class="bg-white">
  <div>
  
   {this.state.mobilemenu? <div class="  inset-0 flex z-40 lg:hidden" role="dialog" aria-modal="true">
      
      <div class=" " aria-hidden="true"></div>
 
      <div class="ml-auto relative max-w-xs w-full h-full bg-white shadow-xl  pb-12 flex flex-col overflow-y-auto  py-2">
        <div class="px-4 flex items-center justify-between">
          <h2 class="text-lg font-medium text-gray-900">Mobile Menu</h2>
          <button type="button" onClick={this.mobileSideBarMenuHandler} class="-mr-2 w-10 h-10 bg-white p-2 rounded-md flex items-center justify-center text-gray-400">
            <span class="sr-only">Close menu</span>
           
            <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

       
        <form class="mt-4 border-t border-gray-200">
          <h3 class="sr-only">Categories</h3>
     {mobileSideBarMenu}

          
       
 
        </form>
      </div>
    </div>
:""}
    <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="relative z-10 flex items-baseline justify-between pt-5 pb-6 border-b border-gray-200">
        <h1 class="text-4xl font-extrabold tracking-tight text-gray-900">All Quizzes</h1>
<button class="lg:hidden" onClick={this.mobileSideBarMenuHandler} >Menu</button>
  
      </div>

      <section aria-labelledby="products-heading" class="pt-6 pb-24">
        <h2 id="products-heading" class="sr-only">Products</h2>

        <div class="grid grid-cols-1 lg:grid-cols-4 gap-x-8 gap-y-10">
         
          <form class="hidden lg:block">
            <h3 class="sr-only">Categories</h3>
           

    {pcSideBarMenu}
              
          
           
 
      
            
     
          </form>

         
          <div class="lg:col-span-3">
           
            <div class="    border-gray-200 rounded-lg h-96 lg:h-full">


 {this.props.children}

        
            </div>
           
          </div>
        </div>
      </section>
    </main>
  </div>
</div>




            </div>
        )
    }
}

export default QuizController
