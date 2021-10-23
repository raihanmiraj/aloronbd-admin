 import React, { Component } from 'react'
import Navbar from '../Navbar/Navbar';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from 'react-router-dom';
  import axios from 'axios';
import Home from '../../Container/Home/Home';
import Login from '../../Container/Login/Login';
import ForgetPassword from '../../Container/ForgetPassword/ForgetPassword';
import Register from '../../Container/Register/Register';
import Profile from '../../Container/Profile/Profile';
 import QuizList from '../../Container/Quiz/QuizList/QuizList';
 import QuizStartingPage from '../../Container/Quiz/QuizStartingPage/QuizStartingPage';
 import QuizPage from '../Quiz/QuizPage/QuizPage';
 import UserProfile from '../../Container/Profile/UserProfile/UserProfile';
 import UserQuizResultsPage from '../UserProfileComponent/UserQuizResultsPage/UserQuizResultsPage';
 import PublicRoute from '../PublicRoute';
 import PrivateRoute from '../PrivateRoute';
 import AuthContext from '../Context/AuthContext';
 import {isLogin} from '../utils/index';
 import AddQuizMeta from '../AdminComponent/AddQuizMeta/AddQuizMeta';
 import AddQuestion from '../Quiz/AddQuestion/AddQuestion';
 import QuizController from '../../Container/QuizController/QuizController';
 import AllQuizzes from '../Quiz/AllQuizzes/AllQuizzes';
import AllSubject from '../Quiz/AllSubject/AllSubject';
import QuizMetaEdit from '../Quiz/QuizMetaEdit/QuizMetaEdit';
import TableAnimation from '../TableAnimation/TableAnimation';
 
class Header extends Component {
   state = {
       user:{},
       loggedIn:""
   }

       // "start": "react-scripts start",
    // "build": "react-scripts build",
    // "test": "react-scripts test",

  //  componentDidMount(){
  //   //    Login user crediential
  //   axios.get('/user' )
  //   .then( (response) => {
  //    this.setUser(response.data);
  //   })
  //   .catch(  (error) => {
  //     console.log(error);
  //   });
  //  }

  //  setUser = (user)=>{
  //     this.setState({user: user}) 
  //  }
  
  //  setLoggedIn=()=>{
  //    this.setState({
  //      loggedIn:true
  //    })
  //  }
    render() {
      // const loggedIn = this.state.loggedIn;
      // const setLoggedIn = this.setLoggedIn;
      // console.log(loggedIn);
        return (
            <>
     <Router> 
     {/* <AuthContext.Provider value={{ loggedIn, setLoggedIn }}> */}
          {/* <Navbar user={this.state.user} setUser={this.setUser} /> */}
          <Navbar/>
          {/* </AuthContext.Provider> */}
         
          {/* <Route exact path="/" component={Home} />
          <Route  path="/login" component=  {()=> <Login user={this.state.user} />} />
          <Route  exact path="/quizlist" component=  { QuizList } />
          
          <Route exact  path="/quiz/:id" component={QuizStartingPage} />
          <Route exact  path="/quiz/start/:id" component={QuizPage} />
          <Route  path="/forgetpassword" component={ForgetPassword} />
          <Route  path="/register" component={()=> <Register user={this.state.user} />}  />
          <Route  path="/profile" component={()=> <UserProfile user={this.state.user} />} />
          <Route exact   path="/userquizresult/:id" component={UserQuizResultsPage} />
           */}
             <Switch>
             <Route exact  path="/quiz" component={()=><QuizController>Hello World</QuizController>} />
             <Route exact  path="/quiz/allquiz" component={()=><QuizController><AllQuizzes/> </QuizController>} />
             <Route exact  path="/quiz/add" component={()=><QuizController><AddQuizMeta/> </QuizController>} />
             <Route exact  path="/quiz/edit/:id" component={()=><QuizController><QuizMetaEdit/> </QuizController>} />
             <Route exact  path="/table" component={()=><QuizController><TableAnimation/> </QuizController>} />
             <Route exact  path="/subject/allsubject" component={()=><QuizController><AllSubject/> </QuizController>} />
          <PublicRoute restricted={false} component={Home} path="/" exact />
          <PrivateRoute component={QuizList} path="/quizlist" exact />
          <PublicRoute restricted={isLogin()} component={()=> <Login user={this.state.user} />} path="/login" exact />
          <PublicRoute restricted={isLogin()}  component={Register} path="/register" exact />
          {/* <PrivateRoute component={QuizStartingPage} path="/quiz/:id"  exact /> */}
          {/* <PrivateRoute component={AddQuizMeta} path="/add/quiz"  exact /> */}
          <PrivateRoute component={AddQuestion} path="/add/question/:id"  exact />
          {/* <PrivateRoute component={AddQuestion} path="/add/quiz" exact /> */}
          <PrivateRoute component={QuizPage} path="/quiz/start/:id" exact />
          <PrivateRoute component={UserProfile} path="/profile" exact />
          <PrivateRoute component={UserQuizResultsPage}  path="/userquizresult/:id" exact />
          <Route component={Home} />
        </Switch>
      
   
    </Router>
            </>
        )
    }
}

export default Header
