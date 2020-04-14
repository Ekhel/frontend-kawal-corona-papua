import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import DataIndonesia from './data/DataIndonesia';
import DataProvinsi from './data/DataProvinsi';
import DataPapua from './data/DataPapua';

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
                   <Route path="/" exact component={DataIndonesia} />
                   <Route path="/data/provinsi" component={DataProvinsi} />
                   <Route path="/data/papua" component={DataPapua} />
                </Switch>
              </BrowserRouter>
              
            </div>
            <Footer />
            </div>
            
            
        );
    }
}

export default App;