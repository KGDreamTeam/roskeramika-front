import {BrowserRouter, Switch, Route} from "react-router-dom"

import Header from "./components/layout/Header"
import Home from './components/pages/Home'
import Footer from "./components/layout/Footer"

function App() {
  return (
    <div className="App">
			<BrowserRouter>
				<Header />
				<Switch>
					<Route path='/' component={Home} exact />
				</Switch>
				<Footer />
			</BrowserRouter>
    </div>
  )
}

export default App
