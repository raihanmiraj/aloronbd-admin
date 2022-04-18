import axios from 'axios'
import React, { Component } from 'react'

export class QuizAnalysis extends Component {
state = {
    totalstudent:0,
    totalteacher:0,
    totalquiz:0,
    totalsubject:0,
    totalquizattend:0,
    totalquestion:0
 }


 componentDidMount(){
     axios.get('/quiz/analytics')
     .then((response)=>{
         console.log(response.data)
         var data = response.data;
         this.setState({
            totalstudent:data.users,
            totalteacher:data.admins,
            totalquiz:data.quiz_meta,
            totalsubject:data.subjects,
            totalquizattend:data.user_quiz_results,
            totalquestion:data.questions
         })
     })
 }

  render() {
    return (
      <> 
    
      <div class="px-10 mx-auto container align-middle">
            <div class="grid grid-cols-2 gap-2">

          
        <div class="shadow rounded-lg py-3 px-5 bg-white">
          <div class="flex flex-row justify-between items-center">
            <div>
              <h6 class="text-2xl">Total Quiz</h6>
              <h4 class="text-black text-4xl font-bold text-left">{this.state.totalquiz}</h4>
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-12 w-12"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#14B8A6"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
                />
              </svg>
            </div>
          </div>
          <div class="text-left flex flex-row justify-start items-center">
            <span class="mr-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#14B8A6"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                />
              </svg>
            </span>
            <p> </p>
          </div>
        </div>


        <div class="shadow rounded-lg py-3 px-5 bg-white">
          <div class="flex flex-row justify-between items-center">
            <div>
              <h6 class="text-2xl">Total Question</h6>
              <h4 class="text-black text-4xl font-bold text-left">{this.state.totalquestion}</h4>
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-12 w-12"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#14B8A6"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
                />
              </svg>
            </div>
          </div>
          <div class="text-left flex flex-row justify-start items-center">
            <span class="mr-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#14B8A6"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                />
              </svg>
            </span>
            <p> </p>
          </div>
        </div>

        <div class="shadow rounded-lg py-3 px-5 bg-white">
          <div class="flex flex-row justify-between items-center">
            <div>
              <h6 class="text-2xl">Total Attend</h6>
              <h4 class="text-black text-4xl font-bold text-left">{this.state.totalquizattend}</h4>
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-12 w-12"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#14B8A6"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
                />
              </svg>
            </div>
          </div>
          <div class="text-left flex flex-row justify-start items-center">
            <span class="mr-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#14B8A6"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                />
              </svg>
            </span>
            <p> </p>
          </div>
        </div>


        <div class="shadow rounded-lg py-3 px-5 bg-white">
          <div class="flex flex-row justify-between items-center">
            <div>
              <h6 class="text-2xl">Total Subject</h6>
              <h4 class="text-black text-4xl font-bold text-left">{this.state.totalsubject}</h4>
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-12 w-12"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#14B8A6"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
                />
              </svg>
            </div>
          </div>
          <div class="text-left flex flex-row justify-start items-center">
            <span class="mr-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#14B8A6"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                />
              </svg>
            </span>
            <p> </p>
          </div>
        </div>


        <div class="shadow rounded-lg py-3 px-5 bg-white">
          <div class="flex flex-row justify-between items-center">
            <div>
              <h6 class="text-2xl">Total Student</h6>
              <h4 class="text-black text-4xl font-bold text-left">{this.state.totalstudent}</h4>
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-12 w-12"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#14B8A6"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
                />
              </svg>
            </div>
          </div>
          <div class="text-left flex flex-row justify-start items-center">
            <span class="mr-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#14B8A6"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                />
              </svg>
            </span>
            <p> </p>
          </div>
        </div>

      
         
        <div class="shadow rounded-lg py-3 px-5 bg-white">
          <div class="flex flex-row justify-between items-center">
            <div>
              <h6 class="text-2xl">Total Teacher</h6>
              <h4 class="text-black text-4xl font-bold text-left">{this.state.totalteacher}</h4>
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-12 w-12"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#14B8A6"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
                />
              </svg>
            </div>
          </div>
          <div class="text-left flex flex-row justify-start items-center">
            <span class="mr-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#14B8A6"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                />
              </svg>
            </span>
            <p> </p>
          </div>
        </div>


            </div>
          </div>
    </>
    )
  }
}

export default QuizAnalysis