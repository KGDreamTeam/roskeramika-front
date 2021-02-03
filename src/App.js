import {BrowserRouter, Switch, Route} from "react-router-dom"
import UpperHeader from "./components/layout/UpperHeader"
import Home from './components/pages/Home'

function App() {
  return (
    <div className="App">
			<UpperHeader />
			<BrowserRouter>
				<Switch>
					<Route path='/' component={Home} exact />
				</Switch>
			</BrowserRouter>
    </div>
  )
}

export default App
