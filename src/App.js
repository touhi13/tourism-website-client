import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './contexts/AuthProvider';
import AddTour from './Pages/AddTour/AddTour';
import Booking from './Pages/Booking/Booking';
import EditTour from './Pages/EditTour/EditTour';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import ManageBookings from './Pages/ManageBookings/ManageBookings';
import ManageTours from './Pages/ManageTours/ManageTours';
import MyBookings from './Pages/MyBookings/MyBookings';
import NotFound from './Pages/NotFound/NotFound';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute path="/add-tour">
              <AddTour></AddTour>
            </PrivateRoute>
            <PrivateRoute path="/edit-tour/:tourId">
              <EditTour></EditTour>
            </PrivateRoute>
            <PrivateRoute path="/manage-tour">
              <ManageTours></ManageTours>
            </PrivateRoute>
            <PrivateRoute path="/booking/:tourId">
              <Booking></Booking>
            </PrivateRoute>
            <PrivateRoute path="/manage-bookings">
              <ManageBookings></ManageBookings>
            </PrivateRoute>
            <PrivateRoute path="/my-bookings">
              <MyBookings></MyBookings>
            </PrivateRoute>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>

    </div>
  );
}

export default App;
