import {BrowserRouter,Route,Routes} from "react-router-dom"
import './App.css'
import Home from "./pages/Home/Home"
import Login from "./pages/Auth/Login/Login";
import Signup from "./pages/Auth/Signup/Signup";
import Final from "./pages/Final/Final";
const App: React.FC = () => (
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<Home/>} />
			<Route path="/auth/login" element={<Login/>} />
			<Route path="/auth/signup" element={<Signup/>} />
      <Route path="/final" element={<Final/>}/>
		</Routes>
	</BrowserRouter>
);

export default App
