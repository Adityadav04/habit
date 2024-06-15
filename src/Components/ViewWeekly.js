import React, { useState } from 'react';
import { FaCheck, FaTimes } from 'react-icons/fa';
import './ViewWeekly.css'; // Import the CSS file for styling

const ViewWeekly = () => {
  const [habits, setHabits] = useState(() => {
    const storedHabits = localStorage.getItem('habits');
    return storedHabits ? JSON.parse(storedHabits) : [];
  });

  const toggleStatus = (habitIndex, day) => {
    const updatedHabits = [...habits];
    updatedHabits[habitIndex].status[day] = !updatedHabits[habitIndex].status[day];
    setHabits(updatedHabits);
    localStorage.setItem('habits', JSON.stringify(updatedHabits));
  };

  const getPreviousDays = () => {
    return ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  };

  const previousDays = getPreviousDays();

  return (
    <div>
      <h4>Weekly Habits Progress:</h4>
      <table className="habits-table">
        <thead>
          <tr className="table-header">
            <th className="table-header-cell">Habit</th>
            {previousDays.map((day, index) => (
              <th key={index} className="table-header-cell">
                {day}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {habits.map((habit, habitIndex) => (
            <tr key={habitIndex} className="table-row">
              <td className="table-cell">
                <h4>{habit.name}</h4>
                <small>{habit.description}</small>
              </td>
              {Object.keys(habit.status).map((day, dayIndex) => (
                <td
                  key={dayIndex}
                  className="table-cell action-cell"
                  onClick={() => toggleStatus(habitIndex, day)}
                >
                  {habit.status[day] ? (
                    <FaCheck className="check-icon" title="Mark undone" />
                  ) : (
                    <FaTimes className="times-icon" title="Mark Done" />
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewWeekly;
