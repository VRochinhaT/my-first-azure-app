import { Link, Switch, Route, useParams } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div>
      <h2>URL Params</h2>

      <ul>
        <li>
          <Link to="/netflix">Netflix</Link>
        </li>
        <li>
          <Link to="/twitter">Twitter</Link>
        </li>
        <li>
          <Link to="/instagram">Instagram</Link>
        </li>
      </ul>

      <Switch>
        <Route path="/:id" children={<Child />} />
      </Switch>
    </div>
  );
}

function Child() {
  let { id } = useParams();

  return (
    <div>
      <h3>URL param Id: {id}</h3>
    </div>
  );
}

export default App;
