import React from 'react';
import { BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router-dom'; // HashRouter

const App = () => {
    return (
        <>
          
          <BrowserRouter>

            <Link to="/">Allen</Link> | 

            <Link to="/neet/online-coaching-class-11">Class11</Link> | 

            <Link to="/neet/online-coaching-class-12">Class12</Link> 

            <Routes>
            <Route path="/neet/online-coaching-class-11" element={<Class11Program />} />
            <Route path="/neet/online-coaching-class-12" element={<Class12Program />} />
            <Route path="/" element={<Landing />} />
            <Route path="*" element={<ErrorPage />} />

            </Routes>
          </BrowserRouter>          
        </>
    
    );
};

function ErrorPage(){

  const navigate = useNavigate();
  function redirectUser(){
    navigate("/");
  }
  return <div>
    Sorry page not found
    <br />
    <button onClick={redirectUser}>Go to Home</button>
  </div>
}

function Landing(){
  return <>
    <div>
      Welcome to Allen
    </div>
  </>
}

function Class11Program(){
  const navigate = useNavigate();

  function redirectUser(){
    navigate("/");
  }
  return <>
    <div>
      NEET programs for Class 11
      <br />
      <button onClick={redirectUser}>Back to landing page</button>
    </div>
  </>
}

function Class12Program(){

  const navigate = useNavigate();

  function redirectUser(){
    navigate("/");
  }

  return <>
    <div>
      NEET programs for Class 12
      <br />
      <button onClick={redirectUser}>Back to landing page</button>
    </div>
  </>
}


export default App;
