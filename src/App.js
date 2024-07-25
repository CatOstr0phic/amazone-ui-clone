import Header from "./components/Header";
import Home from "./pages/Home";
import CheckOut from './pages/CheckOut'
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import { useEffect } from "react";
import { auth } from "./pages/firebase";
import { useStateValue } from "./redux/StateProvider";
import Payment from './pages/Payment';
import Footer from "./components/Footer";

function App() {

  const [{}, dispatch] = useStateValue()

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log('the user is', authUser);
      if (authUser){
         dispatch({
          type: 'SET_USER',
          user: authUser
         })
      }else{
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })

  }, [])
  return (
    <Router>
      <div className="app">
        
        <Header />
        <Routes>
  
          <Route path="/login" element={<Login />} />
          <Route path="/" exact element={<Home />} />
          <Route path="/check-out" element={<CheckOut />} />
          <Route path="/payment" exact element={<Payment />} />

        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
