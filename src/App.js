import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/NavBar';
import AddHabit from './Components/AddHabit';
import ViewWeekly from './Components/ViewWeekly';

const App = () => {
    const [currentPage, setCurrentPage] = useState('add'); // 'add' or 'view-weekly'

    const renderPage = () => {
        switch (currentPage) {
            case 'add':
                return <AddHabit />;
            case 'view-weekly':
                return <ViewWeekly />;
            default:
                return <AddHabit />;
        }
    };

    return (
        <>
            <NavBar setCurrentPage={setCurrentPage} />
            <div className="container mt-5">
                {renderPage()}
            </div>
        </>
    );
};

export default App;
