import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'

// const Home = () => {
//   return (
//     <div>
//       <h1>Home!</h1>
//     </div>
//   );
// };

const NavBar = () => {
  return (
    <div>
      <NavLink
        to='/'
        exact
        style={link}
        activeStyle={{background: 'darkblue'}}
      >Home</NavLink>
      <NavLink
        to='/about'
        exact
        style={link}
        activeStyle={{background: 'darkblue'}}
      >About</NavLink>
      <NavLink
        to='/login'
        exact
        style={link}
        activeStyle={{background: 'darkblue'}}
      >Login</NavLink>
      <NavLink
        to='/signup'
        exact
        style={link}
        activeStyle={{background: 'darkblue'}}
      >Signup</NavLink>
      <NavLink
        to='/messages'
        exact
        style={link}
        activeStyle={{background: 'darkblue'}}
      >Messages</NavLink>
    </div>
  )
}

const link = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  background: 'blue',
  textDecoration: 'none',
  color: 'white',
}

const About = () => <div><h1>This is my about component!</h1></div>

const Login = () => {
  return (
    <div>
      <form>
        <div>
          <input type="text" name="username" placeholder="Username" />
          <label htmlFor="username">Username</label>
        </div>
        <div>
          <input type="password" name="password" placeholder="Password" />
          <label htmlFor="password">Password</label>
        </div>
        <input type="submit" value="Login" />
      </form>
    </div>
  )
}
 
const SignUp = () => <div><h1>Sign Up</h1></div>

const Messages = () => <div><h1>Messages</h1></div>

ReactDOM.render((
  <Router>
    <div>
      <NavBar />
      <Route exact path='/' render={() => <h1>Home!</h1>} />
      <Route path='/about' component={About} />
      <Route path='/login' component={Login} />
      <Route path='/signup' component={SignUp} />
      <Route path='/Messages' component={Messages} />
    </div>
  </Router>),
  document.getElementById('root')
);
