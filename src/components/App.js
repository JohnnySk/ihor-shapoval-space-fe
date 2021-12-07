import React from "react";
import Header from "./sub/Header";
import Footer from "./sub/Footer";
import Home from "./sub/Main/Home";
import {
    BrowserRouter as Router, Route,
    Switch
} from "react-router-dom";
import { Provider } from 'react-redux';
import store from './sub/Store';

export default function App() {
    const testData = [
        {"id": 1, "route": '/', "linkName": 'LOGO', "elementId": 'logo'},
        {"id": 2, "route": '/portfolio', "linkName": 'Link One', "elementId": 'one'},
        {"id": 3, "route": '/price', "linkName": 'Link Two', "elementId": 'two'},
        {"id": 4, "route": '/contact', "linkName": 'Link Three', "elementId": 'three'}
    ];

    return(
        <Router>
            <Header testData={testData}/>
            <main id="content-area">
                <div className="main-content">
                    <Switch>
                        <Provider store={store}>
                            <Route path="/" exact component={Home}/>
                        </Provider>
                        <Route path="/portfolio" exact component={Portfolio} />
                        <Route path="/price" exact component={Price}/>
                        <Route path="/contact" exact component={Contact}/>
                    </Switch>
                </div>
            </main>
            <Footer/>
        </Router>
    );
}
function Portfolio() {
    return <div>Portfolio</div>;
}
function Price() {
    return <div>Price</div>;
}
function Contact() {
    return <div>Contact</div>;
}