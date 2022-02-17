import React, { useState } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';
import Footer from './components/Footer';

const App = () => {
  const pageSize = 3;
  const apiKey = process.env.REACT_APP_NEWS_API
  const [progress, setProgress] = useState(0);
  const [country, setCountry] = useState('de');
  const [language, setLanguage] = useState('de');

  const handleGermany = () => {
    setCountry('de');
    setLanguage('de');
  }
  
  const handleIndia = () => {
    setCountry('in');
    setLanguage('en');
  }

  return (
    <div>
      <Router>
        <NavBar />
        <LoadingBar
          height={3}
          color='#f11946'
          progress={progress}
        />
        <div className="container d-flex justify-content-between mt-2">

          <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
            <input type="radio" className="btn-check" name="btnradio" id="btnradio1" autoComplete="off" defaultChecked={country === 'de' ? true : false} />
            <label className="btn btn-outline-warning" htmlFor="btnradio1" onClick={handleGermany}>Germany</label>

            <input type="radio" className="btn-check" name="btnradio" id="btnradio3" autoComplete="off" defaultChecked={country === 'in' ? true : false} />
            <label className="btn btn-outline-warning" htmlFor="btnradio3" onClick={handleIndia}>India</label>
          </div>

        </div>
        <Switch>
          <Route exact path="/"><News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country={country} topic="general" language={language} /></Route>
          <Route exact path="/business"><News setProgress={setProgress} apiKey={apiKey} key="business" pageSize={pageSize} country={country} topic="business" language={language} /></Route>
          <Route exact path="/entertainment"><News setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize={pageSize} country={country} topic="entertainment" language={language} /></Route>
          <Route exact path="/health"><News setProgress={setProgress} apiKey={apiKey} key="health" pageSize={pageSize} country={country} topic="health" language={language} /></Route>
          <Route exact path="/science"><News setProgress={setProgress} apiKey={apiKey} key="science" pageSize={pageSize} country={country} topic="science" language={language} /></Route>
          <Route exact path="/sports"><News setProgress={setProgress} apiKey={apiKey} key="sports" pageSize={pageSize} country={country} topic="sports" language={language} /></Route>
          <Route exact path="/technology"><News setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={pageSize} country={country} topic="technology" language={language} /></Route>
        </Switch>
      </Router>
      <Footer />
    </div>
  )
}

export default App;