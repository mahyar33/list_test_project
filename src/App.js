import React, {Component} from 'react';
import './App.scss';
import {BrowserRouter as Router, Route, Redirect, Switch} from "react-router-dom";
import {IntlProvider} from "react-intl";
import * as messages from './i18n/'
import Category from "./scenes/Category/Category";
import CategoryDetails from "./scenes/CategoryDetails/CategoryDetails";

const Routes = () => (
    <Switch>
        <Route key={0} exact path="/" component={() => <Redirect to='/Category'/>}/>,
        <Route key={1} exact path="/Category" component={Category}/>,
        <Route key={2} exact path="/Category/details" component={CategoryDetails}/>,
        <Route key={3} component={() => <Redirect to='/Category'/>}/>
    </Switch>
)

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            lang: localStorage.getItem("locale") ? localStorage.getItem("locale") : 'fa'
        }
    }

    componentDidMount() {
        window.customSetItem = function (id, item) {
            localStorage.setItem(id, item);
            let event = new Event('itemInserted');
            document.dispatchEvent(event);
        }
        document.addEventListener("itemInserted", () => {
            this.setState({lang: localStorage.getItem("locale") ? localStorage.getItem("locale") : "fa"})
        }, false);
    }

    render() {
        const locale = this.state.lang;
        return (
            <div className={locale === 'fa' ? 'rtl' : 'ltr'}>
                <IntlProvider key={locale} locale={locale} messages={messages[locale]}>
                    <Router>
                        <Routes/>
                    </Router>
                </IntlProvider>
            </div>
        );
    }
}

export default App;
