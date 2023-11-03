import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import LeaveApplicationForm from './components/LeaveApplicationForm';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/apply-for-leave" component={LeaveApplicationForm} />
        {/* Other routes here */}
      </Switch>
    </Router>
  );
}

export default App;
