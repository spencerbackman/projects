import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Backdrops from './components/Backdrops'
import Contact from './components/Contact'
import Faqs from './components/Faqs'
import Home from './components/Home'
import Pricing from './components/Pricing'
import Templates from './components/Templates'

class App extends React.Component {
    render() {
        return(
            <div>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route path='/backdrops' component={Backdrops}/>
                    <Route path='/contact' component={Contact}/>
                    <Route path='/faqs' component={Faqs}/>
                    <Route path='/pricing' component={Pricing}/>
                    <Route path='/templates' component={Templates}/>
                </Switch>
            </div>
        )
    }
}

export default App