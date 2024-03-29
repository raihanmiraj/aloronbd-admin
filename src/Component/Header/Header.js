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
 import EditQuizMeta from '../AdminComponent/EditQuizMeta/EditQuizMeta';
 import AddQuestion from '../Quiz/AddQuestion/AddQuestion';
 import QuizController from '../../Container/QuizController/QuizController';
 import AllQuizzes from '../Quiz/AllQuizzes/AllQuizzes';
import AllSubject from '../Quiz/AllSubject/AllSubject';
import QuizMetaEdit from '../Quiz/QuizMetaEdit/QuizMetaEdit';
import TableAnimation from '../TableAnimation/TableAnimation';
 import AddSubject from '../AdminComponent/AddSubject/AddSubject';
import EditSubject from '../AdminComponent/EditSubject/EditSubject';
import UserSettings from '../../Container/Profile/UserSettings/UserSettings';
import QuizAnalysis from '../Quiz/QuizAnalysis/QuizAnalysis'; 
import AllQuestion from '../../Container/Question/AllQuestion/AllQuestion';
import EditQuestion from '../Question/EditQuestion/EditQuestion';
class Header extends Component {
  state = {
    user:{},
    loggedIn:isLogin(),
    navbaropen:false,
    loading:true,
    profile_image:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
}

componentDidMount(){
 axios.get('/user' )
 .then( (response) => {
   var data = response.data;
  this.setUser(response.data);
  var imgdata =   JSON.parse(response.data.profile_image);
  var image =  imgdata.hasOwnProperty('thumb')?imgdata.thumb:(imgdata.hasOwnProperty('medium')?imgdata.medium:imgdata.image);
  this.setState({
   loggedIn:true,
   loading:false,
   profile_image:image
 })

 })
 .catch(  (error) => {
  this.setState({
    loggedIn:false,
  })
  // if(localStorage.getItem("TOKEN_KEY")){
  //   localStorage.removeItem("TOKEN_KEY");
  // }

 });
}

setProfilePicture = (data)=>{
  this.setState({profile_image:data})
}

  navbarhandle = (data)=>{
   this.setState({navbaropen:data})
 }
setUser = (user)=>{
   this.setState({user: user , loggedIn:true }) 
   console.log("set user also called");
}

setLoggedIn=()=>{
  this.setState({
    loggedIn:true
  })
  console.log("login True")
}
setLogout=()=>{
 this.setState({
   loggedIn:false
 })
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
      const loggedIn = this.state.loggedIn;
      const setLoggedIn = this.setLoggedIn;
      console.log(loggedIn);
        return (
            <>
     <Router> 
     
          <Navbar image={this.state.profile_image} loading={this.state.loading}  navbarhandle={this.navbarhandle} setLogout={this.setLogout} checklogin={this.state.loggedIn} user={this.state.user} setUser={this.setUser}  navbaropen = {this.state.navbaropen}  >
        
             <Switch>
                
             <PublicRoute restricted={false} component={Home} path="/" exact />
          <PrivateRoute component={QuizList} path="/quizlist" exact />
          <PublicRoute restricted={isLogin()} component={()=> <Login user={this.state.user} setUser = {this.setUser} />} path="/login" exact />
          <PublicRoute restricted={isLogin()}  component={Register} path="/register" exact />
              
          
              <PrivateRoute    path="/quiz" component={QuizAnalysis} exact />  
             <PrivateRoute    path="/quiz/allquiz" component={ AllQuizzes}  exact/>
             <PrivateRoute    path="/quiz/add" component={ AddQuizMeta} exact/>
             <PrivateRoute    path="/quiz/edit/:id" component={ EditQuizMeta  } exact/>
              <PrivateRoute    path="/table" component={ TableAnimation} exact/>
             <PrivateRoute    path="/subject/allsubject" component={ AllSubject} exact/>
             <PrivateRoute    path="/subject/add" component={ AddSubject}  exact/>
             <PrivateRoute    path="/subject/edit/:id" component={ EditSubject} exact/>
             <PrivateRoute    path="/question/edit/:id" component={ EditQuestion} exact/>
             <PrivateRoute    path="/question/allques" component={ AllQuestion} exact/>
             <PrivateRoute component={AddQuestion} path="/add/question/:id"    exact/>  
          
             <PrivateRoute component={()=><UserSettings user={this.state.user}/>} path="/settings" exact />


          <PrivateRoute component={QuizPage} path="/quiz/start/:id" exact />
          <PrivateRoute component={UserProfile} path="/profile" exact />
          <PrivateRoute component={UserQuizResultsPage}  path="/userquizresult/:id" exact />
          <Route component={Home} />
        </Switch>
      
   </Navbar>
    </Router>
            </>
        )
    }
}

export default Header
