import "./App.css";
import Weather from "./Weather";
function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <div className="references">
          <ul>
            <li>
              This project was coded by{" "}
              <a
                href="https://www.linkedin.com/in/faeze-azimi-50a931255/"
                alt="faeze linkedin"
                rel="noreferrer"
                target="_blank"
              >
                Faeze Azimi
              </a>{" "}
              and is open sourced on{" "}
              <a
                href="https://github.com/fa3ze/Faeze-Weather-App"
                alt="github"
                rel="noreferrer"
                target="_blank"
              >
                github
              </a>
              .
            </li>
            <li>
              {" "}
              <div>
                icons by{" "}
                <a
                  target="_blank"
                  href="https://icons8.com"
                  rel="noreferrer"
                  alt="icons"
                >
                  Icons8
                </a>
                .
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
