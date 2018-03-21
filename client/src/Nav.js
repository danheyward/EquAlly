import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import Home from './Home';
import Profile from './Profile';
import LoginTest from './TestFiles/LoginTest'
import AllBlogs from './AllBlogs';
import Chat from './Chat';
import Resources from './Resources';
import About from './About';
import NavLinks from './NavLinks';


class Nav extends Component {
  
	render(){
		return(
			<Router>
				<div>
					<NavLinks/>
					<Route exact path='/' render={() => <Home />} />
			        <Route path='/profile' render={() => <Profile />} />
			        <Route path='/about' render={() => <About />} />
			        <Route path='/blog' render={() => <AllBlogs />} />
			        <Route path='/chat' render={() => <Chat />} />
			        <Route path='/resources' render={() => <Resources />} />
	     			<Route path='/logintest' render={() => <LoginTest stateLift={this.props.stateLift}/>} />
				</div>
			</Router>
		)
	}
}
export default Nav;
