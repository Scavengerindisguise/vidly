import React, { Component } from 'react';

class Navbar extends Component {
    state = {}
    render() {
        return (
            <div>
                <nav className="navbar navbar-light bg-light">
        <a href="" className="navbar-brand" >Navbar <span className="badge badge-pill badge-secondary">{this.props.totalCount}</span></a>
                </nav>

            </div>
        );
    }
}

export default Navbar;