import React from "react";
import Navbar from "./navbar";
import './index.css';


export default class LoginForm extends React.Component {
    render(){
     return (

         
         <div className="container">
             <div className="navbar">
             <Navbar />
             </div><br></br>
             
             <div className="container">
                <h3>Log-In Please</h3>
                <form>
                <label>
                    Username:
                    <input type="text" name="name" />
                    </label>
                    <label>
                    Password:
                    <input type="text" name="password" />
                    </label>
                </form>

             </div>



         </div>
           
         
     )
    }
    
 
 }
    