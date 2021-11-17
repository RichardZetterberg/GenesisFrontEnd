import React from 'react';
import ReactDOM from 'react-dom'
import { HashRouter, Route, Switch } from "react-router-dom"
import './App.css';
import Header from './components/Header'
import Home from './pages/Home'
import Upload from './pages/Upload'
import AboutAuthor from "./pages/AboutAuthor";

const App = () => {

    return (
        <HashRouter>
            <Header />
            <Switch>
                <Route path= "/about" component={AboutAuthor}/>
                <Route path= "/upload" component={Upload}/>
                <Route path= "/" component={Home}/>
            </Switch>
        </HashRouter>
    )
}

export default App;

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
