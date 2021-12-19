import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './Pages/Home/Home';
import BuyForMe from './Components/HowWorkHome/BuyForMe';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import PageNotFound from './Pages/PageNotFound/PageNotFound';
import Login from './Pages/Login/Login';
import AuthProvider from './Context/AuthProvider';
import BuyForMePage from './Pages/BuyForMe/BuyForMePage';
import AmozonProductDatails from './Pages/AmozonProductDatails/AmozonProductDatails';
import Deshboard from './Pages/Deshboard/Deshboard';
import PrivateRoute from './PrivateRoute/PrivateRoute';
function App() {
  return (
    <>
      <AuthProvider>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/buy" element={<BuyForMe />}> </Route>
          <Route path="/login" element={<Login />}> </Route>
          <Route path="/buy-for-me" element={<BuyForMePage />}> </Route>
          <Route path="/deshboard" element={
            <PrivateRoute>
              <Deshboard />
            </PrivateRoute>
          }> </Route>
          <Route path="/amozon-product-datails" element={<AmozonProductDatails />}>
            <Route path=":url" element={<AmozonProductDatails />} />
          </Route>
          <Route path='*' element={<PageNotFound />} />
        </Routes>
        <Footer></Footer>
      </AuthProvider>
    </>
  );
}

export default App;
