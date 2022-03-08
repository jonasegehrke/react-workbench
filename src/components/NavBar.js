import React from "react";
import { Link } from 'react-router-dom'

function NavBar() {
    return (
        <>
            <nav class="navbar navbar-dark bg-dark navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">ReactWorkbench</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <a class="nav-link"><Link to="/" className="nav-link">Home</Link></a>
                            <a class="nav-link"><Link to="/shopping" className="nav-link">Shopping</Link></a>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default NavBar;