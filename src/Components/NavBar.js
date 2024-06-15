import React from 'react';

const NavBar = ({ setCurrentPage }) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <button className="btn btn-link navbar-brand" onClick={() => setCurrentPage('add')}>
                    Habit
                </button>
                <button className="btn btn-link navbar-brand" onClick={() => setCurrentPage('view-weekly')}>
                    View Weekly
                </button>
            </div>
        </nav>
    );
};

export default NavBar;
