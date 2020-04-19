import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import DataIndonesia from './data/DataIndonesia';
import DataProvinsi from './data/DataProvinsi';
import DataPapua from './data/DataPapua';
import DataRumahSakit from './data/DataRumahSakit';
import GrafikInfoPapua from '/data/GrafikInfoPapua';

import Header from './Header';
import Footer from './Footer';

class App extends React.Component {
    render() {
        return (
            <div>
              <div className="ui container">
              <BrowserRouter>
                <Header />
                <br/>
                <br/>
                <br/>
                <Switch>
                   <Route path="/frontend-kawal-corona-papua/" exact component={DataIndonesia} />
                   <Route path="/frontend-kawal-corona-papua/provinsi" component={DataProvinsi} />
                   <Route path="/frontend-kawal-corona-papua/papua" component={DataPapua} />
                   <Route path="/frontend-kawal-corona-papua/rumahsakit" component={DataRumahSakit} />
                   <Route path="/frontend-kawal-corona-papua/grafikinfo" component={GrafikInfoPapua} />
                </Switch>
              </BrowserRouter>
            </div>
            <Footer />
          </div>
            
            
        );
    }
}

export default App;