import "./App.css";
import Result from "./Result";
function App() {
  return (
    <div className="app">
      <div className="container">
        <div className="text-center">
          <h1 className="display-4 text-center mb-3">Mastering Axios!</h1>
          <button className="btn btn-primary my-3" id="get">
            GET
          </button>
          <button className="btn btn-info" id="post">
            POST
          </button>
          <button className="btn btn-warning" id="update">
            PUT/PATCH
          </button>
          <button className="btn btn-danger" id="delete">
            DELETE
          </button>
          <button className="btn btn-secondary" id="sim">
            Sim Requests
          </button>
          <button className="btn btn-secondary" id="headers">
            Custom Headers
          </button>
          <button className="btn btn-secondary" id="transform">
            Transform
          </button>
          <button className="btn btn-secondary" id="error">
            Error Handling
          </button>
          <button className="btn btn-secondary" id="cancel">
            Cancel
          </button>
        </div>
        <hr />
        <div id="results">
          <Result />
        </div>
      </div>
    </div>
  );
}

export default App;
