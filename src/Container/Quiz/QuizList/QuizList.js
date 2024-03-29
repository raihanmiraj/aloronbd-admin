import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import QuizListAnimation from './QuizListAnimation';
export class QuizList extends Component {
    state = {
        quiz_meta_data:"",
        loading:true,
    }

    componentDidMount(){
      console.log("called")
        axios.get('/getallquizmeta')
.then( (response) => {
this.setState({
    quiz_meta_data:response.data.data,
    loading:false
 });
 

 
 
})
.catch(  (error) => {
  console.log(error);
});
    }

    render() {

  
       const QuizMeta =  this.state.quiz_meta_data;


        const quizlist =  Object.keys(QuizMeta)
        .map(key=>{
             return (
              
                <div key={QuizMeta[key].id} className="group relative">
                <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                  <img
                    src={QuizMeta[key].image}
                    alt={QuizMeta[key].image}
                    className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <Link to={'/quiz/'+QuizMeta[key].id }>
                <span aria-hidden="true" className="absolute inset-0" />
                        {QuizMeta[key].quiz_name}
                      </Link>
  
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{QuizMeta[key].point}</p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">{QuizMeta[key].subject_name}</p>
                </div>
              </div>
            )
        })

 
        //   const quizlist =    QuizMeta.map((quiz) => (
            // <div key={quiz.id} className="group relative">
            //   <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
            //     <img
            //       src={quiz.id}
            //       alt={quiz.id}
            //       className="w-full h-full object-center object-cover lg:w-full lg:h-full"
            //     />
            //   </div>
            //   <div className="mt-4 flex justify-between">
            //     <div>
            //       <h3 className="text-sm text-gray-700">
            //         <Link href={quiz.id }>
            //           <span aria-hidden="true" className="absolute inset-0" />
            //           {quiz.quiz_name}
            //         </Link>
            //       </h3>
            //       <p className="mt-1 text-sm text-gray-500">{quiz.id}</p>
            //     </div>
            //     <p className="text-sm font-medium text-gray-900">{quiz.id}</p>
            //   </div>
            // </div>
        //   ))

var renderQuizAnimation  = <QuizListAnimation/> ;
     
          
        return (
            <div>
                <div className="bg-white">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
   
        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
 {!this.state.loading?quizlist:     <QuizListAnimation/>  } 
     
        </div>
      </div>
    </div>
            </div>
        )
    }
}

export default QuizList
