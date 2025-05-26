// src/components/Dashboard.jsx
import React from 'react';
import CinemaItem from './CinemaItem';

const Dashboard = () => {
  const cinemas = [
  {
    id: 1,
    name: 'Multicine',
    dashboardUrl: 'https://cloudwatch.amazonaws.com/dashboard.html?dashboard=Multicine&context=eyJSIjoidXMtZWFzdC0xIiwiRCI6ImN3LWRiLTc4MjE5MjU5MDAzOCIsIlUiOiJ1cy1lYXN0LTFfdUZyZFRQRlBsIiwiQyI6IjRkMW9lZGwybGdzYjJnazNxOGExaTdiNWo3IiwiSSI6InVzLWVhc3QtMTo4ZWJmNzlhYy00YTk2LTQ1MDUtOWVhMy1hNmIxOTRiZGM2MDciLCJPIjoiYXJuOmF3czppYW06Ojc4MjE5MjU5MDAzODpyb2xlL3NlcnZpY2Utcm9sZS9DV0RCU2hhcmluZy1QdWJsaWNSZWFkT25seUFjY2Vzcy1PT0ZHOVVSWCIsIk0iOiJQdWJsaWMifQ==&start=PT3H&end=null',
  },
   {
    id: 2,
    name: 'prytania',
    dashboardUrl: 'https://cloudwatch.amazonaws.com/dashboard.html?dashboard=Multicine&context=eyJSIjoidXMtZWFzdC0xIiwiRCI6ImN3LWRiLTc4MjE5MjU5MDAzOCIsIlUiOiJ1cy1lYXN0LTFfdUZyZFRQRlBsIiwiQyI6IjRkMW9lZGwybGdzYjJnazNxOGExaTdiNWo3IiwiSSI6InVzLWVhc3QtMTo4ZWJmNzlhYy00YTk2LTQ1MDUtOWVhMy1hNmIxOTRiZGM2MDciLCJPIjoiYXJuOmF3czppYW06Ojc4MjE5MjU5MDAzODpyb2xlL3NlcnZpY2Utcm9sZS9DV0RCU2hhcmluZy1QdWJsaWNSZWFkT25seUFjY2Vzcy1PT0ZHOVVSWCIsIk0iOiJQdWJsaWMifQ==&start=PT3H&end=null',
  },
   {
    id: 3,
    name: 'platinum-Cineplax',
    dashboardUrl: 'https://cloudwatch.amazonaws.com/dashboard.html?dashboard=Multicine&context=eyJSIjoidXMtZWFzdC0xIiwiRCI6ImN3LWRiLTc4MjE5MjU5MDAzOCIsIlUiOiJ1cy1lYXN0LTFfdUZyZFRQRlBsIiwiQyI6IjRkMW9lZGwybGdzYjJnazNxOGExaTdiNWo3IiwiSSI6InVzLWVhc3QtMTo4ZWJmNzlhYy00YTk2LTQ1MDUtOWVhMy1hNmIxOTRiZGM2MDciLCJPIjoiYXJuOmF3czppYW06Ojc4MjE5MjU5MDAzODpyb2xlL3NlcnZpY2Utcm9sZS9DV0RCU2hhcmluZy1QdWJsaWNSZWFkT25seUFjY2Vzcy1PT0ZHOVVSWCIsIk0iOiJQdWJsaWMifQ==&start=PT3H&end=null',
  },
   {
    id: 4,
    name: 'Oxford-Cinema',
    dashboardUrl: 'https://cloudwatch.amazonaws.com/dashboard.html?dashboard=Multicine&context=eyJSIjoidXMtZWFzdC0xIiwiRCI6ImN3LWRiLTc4MjE5MjU5MDAzOCIsIlUiOiJ1cy1lYXN0LTFfdUZyZFRQRlBsIiwiQyI6IjRkMW9lZGwybGdzYjJnazNxOGExaTdiNWo3IiwiSSI6InVzLWVhc3QtMTo4ZWJmNzlhYy00YTk2LTQ1MDUtOWVhMy1hNmIxOTRiZGM2MDciLCJPIjoiYXJuOmF3czppYW06Ojc4MjE5MjU5MDAzODpyb2xlL3NlcnZpY2Utcm9sZS9DV0RCU2hhcmluZy1QdWJsaWNSZWFkT25seUFjY2Vzcy1PT0ZHOVVSWCIsIk0iOiJQdWJsaWMifQ==&start=PT3H&end=null',
  },
  {
    id: 5,
    name: 'Levy-Cinema',
    dashboardUrl: 'https://www.youtube.com/',
  },
   {
    id: 6,
    name: 'Downtown-Cinema',
    dashboardUrl: 'https://www.youtube.com/',
  },
   {
    id: 7,
    name: 'Dakota-Cinema',
    dashboardUrl: 'https://www.youtube.com/',
  },
   {
    id: 8,
    name: 'palace-Cinema',
    dashboardUrl: 'https://www.youtube.com/',
  },
  // more...
];

return (
  <>
    <div className="dashboard-container1">
      <header>
        <img src="logo.svg" alt="Cinesync Logo" className="logo" />
        <h1>Cinesync-Cloudwatch-Dashboard</h1>
      </header>
    </div>

    <div className="dashboard-container">
    
        <div className="cinema-list">
          {cinemas.map((cinema) => (
            <CinemaItem key={cinema.id} cinemaName={cinema.name} dashboardUrl={cinema.dashboardUrl} />
          ))}
        </div>
      </div>
    
  </>
);
};

export default Dashboard;
