import { Component } from "react";
import { Link } from "react-router-dom";


export default class Navbar extends Component{

    render(){
        return(
            <>
            <ul className="w-full h-10 flex justify-around items-center bg-purple-600 text-white font-bold">
                <li><Link to='/signin' className='nav-link active'>Log In</Link></li>
                <li><Link to='/signup' className='nav-link active'>Sign Up</Link></li>
            </ul>
            </>
        )
    }

}