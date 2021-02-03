import {BrowserRouter, Switch, Route} from "react-router-dom"

import Header from "./components/layout/Header"
import Home from './components/pages/Home'

function App() {
  return (
    <div className="App">
			<Header />
			<BrowserRouter>
				<Switch>
					<Route path='/' component={Home} exact />
				</Switch>
			</BrowserRouter>
    </div>
  )
}

export default App
