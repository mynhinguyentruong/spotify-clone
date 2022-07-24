import "bootstrap/dist/css/bootstrap.min.css"
import Login from './Login'
import Dashboard from './Dashboard'

//get the query code from the URL everytime we access the page
const code = new URLSearchParams(window.location.search).get('code')

function App() {
  return (
    code ? <Dashboard code={code}/> : <Login />
  );
}

export default App;

