import { Route,Switch } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import NavBar from './Components/NavBar/NavBar';
import NotFound from './Components/NotFound/NotFound';
import Movies from './Components/Movies/Movies';
import Tv from './Components/Tv/Tv';
import Register from './Components/Register/Register';
import LogIn from './Components/LogIn/LogIn';
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute';
import MovieDetails from './Components/MovieDetails/MovieDetails';

function App() {
    return ( <div className = "App" >
        <NavBar></NavBar>
        <Switch>
        <Route path="/login" component={LogIn} />
        <Route path="/register" component={Register} />
        <ProtectedRoute path='/home' component={Home} />
        <ProtectedRoute path='/Movies-app/' component={Home} />
        <ProtectedRoute path='/MovieDetails' component={MovieDetails} />     
        <ProtectedRoute path='/movies' component={Movies} />
        <ProtectedRoute path='/tv' component={Tv} />
        <ProtectedRoute exact path='/' component={Home} />
        {/* <Route path="/home" component={Home} /> */}
        {/* <Route path="/movies" component={Movies} /> */}
        {/* <Route path="/tv" component={Tv} /> */}
        {/* <Route exact path="/" component={Home} /> */}
        <Route exact path="*" component={NotFound} />
        </Switch>
        </div>
    );
}

export default App;