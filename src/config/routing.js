import React from "react";

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";
import Profile from "../components/profile";

import Error from "../components/error";
import SignupCopy from "../components/signupCopy";
import ResponsiveAppBar from "../components/dashboard";

  function RoutingApp(){




    return(
         <>
         <Router>
            
             
             <Routes>
                 <Route path="/" element={<SignupCopy/>} />
                 <Route path="/profile/:name" element={<Profile/>} />
                 <Route path="dashboard" element={<ResponsiveAppBar/>}/>
                 <Route element={<Error/>} />
               
             </Routes>
         </Router>
         
         
         </>   
    )
  };

  export default RoutingApp;