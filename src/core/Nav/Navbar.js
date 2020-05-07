import React, {Component} from "react";
import { NavLink, Link } from "react-router-dom/cjs/react-router-dom";


class Navbar extends Component{

    render(){

        return(
            <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
                <Link className='navbar-brand ml-3' to='/'>Diego's Recipe App</Link>
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
                    <ul className='navbar-nav mr-auto'>
                        <li className='nav-item' key='home'>
                            <NavLink exact className='nav-link' to='/'>
                                Home
                            </NavLink>
                        </li>
                        <li className='nav-item' key='add'>
                            <NavLink exact className='btn btn-primary my-2 my-sm-0' to="/recipe/0">
                                Add Recipe
                            </NavLink>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0 right">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </nav>
        )
    }
}

export default Navbar;