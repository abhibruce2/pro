import React from 'react';
import VidePlayer from "./VidePlayer";
import Table from "./Table"
import Login from "./Login"
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Date from './Date';

function App() {
  return (

<Router>
<Routes>
  <Route path = "/" element = {<Login />} />
  <Route path = "/Videoplayer" element = {<VidePlayer />} />
  <Route path = "/Date" element = {<Date />} />
  <Route path = "/table" element = {<Table />} />

</Routes>
</Router>
  );
}

export default App;