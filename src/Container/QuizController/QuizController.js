import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import AllQuizzes from '../../Component/Quiz/AllQuizzes/AllQuizzes'

  class QuizController extends Component {
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
  <Link to="/quiz/allquiz">
    All Subjects
  </Link>
</li>

<li>
  <Link to="/quiz/allquiz">
    All Custom Quizzes
  </Link>
</li>

<li>
  <Link to="/quiz/allquiz">
    Quiz Topics
  </Link>
</li>

</ul>;


        return (
            <div>
                
 
                <div class="bg-white">
  <div>
  
    <div class="  inset-0 flex z-40 lg:hidden" role="dialog" aria-modal="true">
      
      <div class=" " aria-hidden="true"></div>
 
      <div class="ml-auto relative max-w-xs w-full h-full bg-white shadow-xl  pb-12 flex flex-col overflow-y-auto hidden">
        <div class="px-4 flex items-center justify-between">
          <h2 class="text-lg font-medium text-gray-900">Filters</h2>
          <button type="button" class="-mr-2 w-10 h-10 bg-white p-2 rounded-md flex items-center justify-center text-gray-400">
            <span class="sr-only">Close menu</span>
           
            <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

       
        <form class="mt-4 border-t border-gray-200">
          <h3 class="sr-only">Categories</h3>
          <ul role="list" class="font-medium text-gray-900 px-2 py-3">
            <li>
              <a href="#" class="block px-2 py-3">
                Quiz Analytics
              </a>
            </li>

            <li>
              <a href="#" class="block px-2 py-3">
                All Quizzes
              </a>
            </li>

            <li>
              <a href="#" class="block px-2 py-3">
                All Subjects
              </a>
            </li>

            <li>
              <a href="#" class="block px-2 py-3">
                All Custom Quizzes
              </a>
            </li>

            <li>
              <a href="#" class="block px-2 py-3">
                Quiz Topics
              </a>
            </li>
          </ul>

          <div class="border-t border-gray-200 px-4 py-6">
            <h3 class="-mx-2 -my-3 flow-root">
             
              <button type="button" class="px-2 py-3 bg-white w-full flex items-center justify-between text-gray-400 hover:text-gray-500" aria-controls="filter-section-mobile-0" aria-expanded="false">
                <span class="font-medium text-gray-900">
                  Color
                </span>
                <span class="ml-6 flex items-center">
                 
                  <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd" />
                  </svg>
                  
                  <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z" clip-rule="evenodd" />
                  </svg>
                </span>
              </button>
            </h3>
           
            <div class="pt-6" id="filter-section-mobile-0">
              <div class="space-y-6">
                <div class="flex items-center">
                  <input id="filter-mobile-color-0" name="color[]" value="white" type="checkbox" class="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"/>
                  <label for="filter-mobile-color-0" class="ml-3 min-w-0 flex-1 text-gray-500">
                    White
                  </label>
                </div>

                <div class="flex items-center">
                  <input id="filter-mobile-color-1" name="color[]" value="beige" type="checkbox" class="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"/>
                  <label for="filter-mobile-color-1" class="ml-3 min-w-0 flex-1 text-gray-500">
                    Beige
                  </label>
                </div>

                <div class="flex items-center">
                  <input id="filter-mobile-color-2" name="color[]" value="blue" type="checkbox" checked class="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"/>
                  <label for="filter-mobile-color-2" class="ml-3 min-w-0 flex-1 text-gray-500">
                    Blue
                  </label>
                </div>

                <div class="flex items-center">
                  <input id="filter-mobile-color-3" name="color[]" value="brown" type="checkbox" class="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"/>
                  <label for="filter-mobile-color-3" class="ml-3 min-w-0 flex-1 text-gray-500">
                    Brown
                  </label>
                </div>

                <div class="flex items-center">
                  <input id="filter-mobile-color-4" name="color[]" value="green" type="checkbox" class="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"/>
                  <label for="filter-mobile-color-4" class="ml-3 min-w-0 flex-1 text-gray-500">
                    Green
                  </label>
                </div>

                <div class="flex items-center">
                  <input id="filter-mobile-color-5" name="color[]" value="purple" type="checkbox" class="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"/>
                  <label for="filter-mobile-color-5" class="ml-3 min-w-0 flex-1 text-gray-500">
                    Purple
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div class="border-t border-gray-200 px-4 py-6">
            <h3 class="-mx-2 -my-3 flow-root">
             
              <button type="button" class="px-2 py-3 bg-white w-full flex items-center justify-between text-gray-400 hover:text-gray-500" aria-controls="filter-section-mobile-1" aria-expanded="false">
                <span class="font-medium text-gray-900">
                  Category
                </span>
                <span class="ml-6 flex items-center">
               
                  <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd" />
                  </svg>
                
                  <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z" clip-rule="evenodd" />
                  </svg>
                </span>
              </button>
            </h3>
           
            <div class="pt-6" id="filter-section-mobile-1">
              <div class="space-y-6">
                <div class="flex items-center">
                  <input id="filter-mobile-category-0" name="category[]" value="new-arrivals" type="checkbox" class="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"/>
                  <label for="filter-mobile-category-0" class="ml-3 min-w-0 flex-1 text-gray-500">
                   All Quizzes
                  </label>
                </div>

                <div class="flex items-center">
                  <input id="filter-mobile-category-1" name="category[]" value="sale" type="checkbox" class="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"/>
                  <label for="filter-mobile-category-1" class="ml-3 min-w-0 flex-1 text-gray-500">
                    Sale
                  </label>
                </div>

                <div class="flex items-center">
                  <input id="filter-mobile-category-2" name="category[]" value="travel" type="checkbox" checked class="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"/>
                  <label for="filter-mobile-category-2" class="ml-3 min-w-0 flex-1 text-gray-500">
                    Travel
                  </label>
                </div>

                <div class="flex items-center">
                  <input id="filter-mobile-category-3" name="category[]" value="organization" type="checkbox" class="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"/>
                  <label for="filter-mobile-category-3" class="ml-3 min-w-0 flex-1 text-gray-500">
                    Organization
                  </label>
                </div>

                <div class="flex items-center">
                  <input id="filter-mobile-category-4" name="category[]" value="accessories" type="checkbox" class="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"/>
                  <label for="filter-mobile-category-4" class="ml-3 min-w-0 flex-1 text-gray-500">
                    Accessories
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div class="border-t border-gray-200 px-4 py-6">
            <h3 class="-mx-2 -my-3 flow-root">
             
              <button type="button" class="px-2 py-3 bg-white w-full flex items-center justify-between text-gray-400 hover:text-gray-500" aria-controls="filter-section-mobile-2" aria-expanded="false">
                <span class="font-medium text-gray-900">
                  Size
                </span>
                <span class="ml-6 flex items-center">
              
                  <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd" />
                  </svg>
          
                  <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z" clip-rule="evenodd" />
                  </svg>
                </span>
              </button>
            </h3>
           
         
          </div>
        </form>
      </div>
    </div>

    <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="relative z-10 flex items-baseline justify-between pt-5 pb-6 border-b border-gray-200">
        <h1 class="text-4xl font-extrabold tracking-tight text-gray-900">All Quizzes</h1>
<button class="lg:hidden" >Click</button>
  
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
