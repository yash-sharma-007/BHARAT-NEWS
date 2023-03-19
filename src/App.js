import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import { News } from "./Components/News";

const App = () => {
  const [Bg, setBg] = useState("light");
  const changeBg = () => {
    if (Bg === "light") {
      setBg("dark");
    } else {
      setBg("light");
    }
  };
  const pageSize = 20;
  const apiKey = "36c7bdaf77814b44b82957a1907c46b0";
  const [progress, setProgress] = useState(0);

  return (
    <div>
      <Router>
        <div>
          <nav sticky='top' className={`navbar navbar-expand-lg navbar-light bg-${Bg} `} >
            <div  className="container-fluid">
              <Link style={{color:"blue"}} className="navbar-brand" to="/">
                BharatNews
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li  className="nav-item">
                    <Link style={{color:`${Bg==='light' ? 'black' : 'white'}` ,fontSize:"20px",margin:"5px" }} className="nav-link" aria-current="page" to="/">
                      Home
                    </Link>
                  </li>
                  <li sclassName="nav-item ">
                    <Link style={{color:`${Bg==='light' ? 'black' : 'white'}` ,fontSize:"20px",margin:"5px" }} className="nav-link" to="/business">
                      Business
                    </Link>
                  </li>
                  <li  className="nav-item">
                    <Link style={{color:`${Bg==='light' ? 'black' : 'white'}` ,fontSize:"20px",margin:"5px" }} className="nav-link" to="/entertainment">
                      Entertainment
                    </Link>
                  </li>
                  <li  className="nav-item">
                    <Link style={{color:`${Bg==='light' ? 'black' : 'white'}` ,fontSize:"20px",margin:"5px" }} className="nav-link" to="/general">
                      General
                    </Link>
                  </li>
                  <li  className="nav-item">
                    <Link style={{color:`${Bg==='light' ? 'black' : 'white'}` ,fontSize:"20px",margin:"5px" }} className="nav-link" to="/health">
                      Health
                    </Link>
                  </li>
                  <li  className="nav-item">
                    <Link style={{color:`${Bg==='light' ? 'black' : 'white'}` ,fontSize:"20px",margin:"5px" }} className="nav-link" to="/science">
                      Science
                    </Link>
                  </li>
                  <li  className="nav-item">
                    <Link style={{color:`${Bg==='light' ? 'black' : 'white'}` ,fontSize:"20px",margin:"5px" }} className="nav-link" to="/sports">
                      Sports
                    </Link>
                  </li>
                  <li  className="nav-item">
                    <Link style={{color:`${Bg==='light' ? 'black' : 'white'}` ,fontSize:"20px",margin:"5px" }} className="nav-link" to="/technology">
                      Technology
                    </Link>
                  </li>
                  <div></div>
                </ul>
                <div
                  className="btn-group btn-group-toggle"
                  data-toggle="buttons"
                  style={{ float: "right" }}
                >
                  <button  style={{color:`${Bg==='light' ? 'black' : 'white'}`}}
                    className={`btn btn-secondary active bg-${Bg}  `}
                    onClick={changeBg}
                  >
                    {Bg}
                  </button>
                </div>
              </div>
            </div>
          </nav>
        </div>

        <LoadingBar height={3} color="#f11946" progress={progress} />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <News
                clr={Bg}
                setProgress={setProgress}
                apiKey={apiKey}
                key="general"
                pageSize={pageSize}
                country="in"
                category="general"
              />
            }
          ></Route>
          <Route
            exact
            path="/business"
            element={
              <News
                clr={Bg}
                setProgress={setProgress}
                apiKey={apiKey}
                key="business"
                pageSize={pageSize}
                country="in"
                category="business"
              />
            }
          ></Route>
          <Route
            exact
            path="/entertainment"
            element={
              <News
                clr={Bg}
                setProgress={setProgress}
                apiKey={apiKey}
                key="entertainment"
                pageSize={pageSize}
                country="in"
                category="entertainment"
              />
            }
          ></Route>
          <Route
            exact
            path="/general"
            element={
              <News
                clr={Bg}
                setProgress={setProgress}
                apiKey={apiKey}
                key="general"
                pageSize={pageSize}
                country="in"
                category="general"
              />
            }
          ></Route>
          <Route
            exact
            path="/health"
            element={
              <News
                clr={Bg}
                setProgress={setProgress}
                apiKey={apiKey}
                key="health"
                pageSize={pageSize}
                country="in"
                category="health"
              />
            }
          ></Route>
          <Route
            exact
            path="/science"
            element={
              <News
                clr={Bg}
                setProgress={setProgress}
                apiKey={apiKey}
                key="science"
                pageSize={pageSize}
                country="in"
                category="science"
              />
            }
          ></Route>
          <Route
            exact
            path="/sports"
            element={
              <News
                clr={Bg}
                setProgress={setProgress}
                apiKey={apiKey}
                key="sports"
                pageSize={pageSize}
                country="in"
                category="sports"
              />
            }
          ></Route>
          <Route
            exact
            path="/technology"
            element={
              <News
                clr={Bg}
                setProgress={setProgress}
                apiKey={apiKey}
                key="technology"
                pageSize={pageSize}
                country="in"
                category="technology"
              />
            }
          ></Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
