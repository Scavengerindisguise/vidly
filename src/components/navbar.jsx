import React, { Component } from 'react';
import { NavLink,Link } from 'react-router-dom';

class Navbar extends Component {
    state = {}
    render() {
        return (
            <div>
                {/* <nav className="navbar navbar-light bg-light">
                  <a href="" className="navbar-brand" >Navbar <span className="badge badge-pill badge-secondary">{this.props.totalCount}</span></a>
                </nav> */}
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <Link className="navbar-brand" to="/movies"><b>Vidly</b></Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <NavLink className="nav-link"to="/movies">Movies</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link"to="/customers">Customers</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link"to="/rentals">Rentals</NavLink>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Navbar;