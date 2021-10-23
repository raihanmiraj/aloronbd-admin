import React, { Component } from 'react'
import axios from 'axios';

export class QuizMetaEdit extends Component {
    componentDidMount(){
        
 
axios.get('/quiz/all')
.then( (response) =>{
//  response.data
 
})
.catch(  (error) =>{
 
})
.then(function () {
  // always executed
});
    }
    render() {
        return (
            <div>
             
          
		 
				 
		
  
            </div>
        )
    }
}

export default QuizMetaEdit
