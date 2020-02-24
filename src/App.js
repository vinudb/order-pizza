import React from 'react';
import './App.scss';
import OrderPizzaApp from './components/OrderPizzaApp';

function App() {
  return (
    <React.Fragment>
      <div className="content-container">
        <OrderPizzaApp />
      </div>
    </React.Fragment>
  );
}

export default App;
