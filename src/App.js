
import React, {Fragment} from 'react';
import './App.css';

import Header from './component/Header';
import Todos from './component/Todos';

const App = () => {
  return (
    <Fragment>
      <Header />
      
      <Todos />

    </Fragment>
    
  );
}

export default App;
