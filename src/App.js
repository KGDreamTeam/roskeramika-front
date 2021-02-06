import {BrowserRouter, Switch, Route} from "react-router-dom"

import Header from "./components/layout/Header"
import Home from './components/pages/Home'
import Footer from "./components/layout/Footer"
import Product from './components/pages/Product'
import Basket from "./components/pages/Basket"

function App() {
  return (
    <div className="App">
			<BrowserRouter>
				<Header />
				<Switch>
					<Route path='/' component={Home} exact />
					<Route path='/product/:id' component={Product}/>
					<Route path='/basket' component={Basket}/>
				</Switch>
				<Footer />
			</BrowserRouter>
    </div>
  )
}

export default App
