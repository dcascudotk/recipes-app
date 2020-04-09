import React, {Component} from "react";
import { NavLink, Link } from "react-router-dom/cjs/react-router-dom";


class Navbar extends Component{

    render(){

        return(
            <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
                <Link className='navbar-brand ml-3' to='/dogs'>Recipe App</Link>
                <button
                className='navbar-toggler'
                type='button'
                data-toggle='collapse'
                data-target='#navbarNav'
                aria-controls='navbarNav'
                aria-expanded='false'
                aria-label='Toggle navigation'>
                    <span className='navbar-toggler-icon'/>
                </button>
                <div className='collapse navbar-collapse mr-3' id='navbarNav'>
                    <ul className='navbar-nav'>
                        <li className='nav-item' key='home'>
                            <NavLink exact className='nav-link' to='/'>
                                Home
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Navbar;