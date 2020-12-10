import React, { useState, useEffect } from "react";
import "./App.css";
import { Route, Link, Switch, Redirect } from "react-router-dom";
import axios from "axios";
import Home from "./Home";
import AllGuides from "./AllGuides.js";
import GuideDetail from "./GuideDetail.js";
const backendUrl =
  process.env.REACT_APP_BACKEND_URL || "http://localhost:3000/api";

function App() {
  const [guides, setGuides] = useState([]);

  useEffect(() => {
    async function getGuides() {
      let axiosGuides = await axios(`${backendUrl}/guides`);
      setGuides(axiosGuides.data.allGuides);
    }
    getGuides();
  }, []);

  const createReview = async (e) => {
    e.preventDefault();
    let guideId = parseInt(e.target.guideId.value);
    let response = await axios.post(
      `${backendUrl}/guides/${guideId}/newreview`,
      {
        title: e.target.title.value,
        guideId: guideId,
      }
    );

    let data = response.data;
    console.log(data);

    await setGuides(
      guides.map((guide) => {
        if (guide.id === data.review.guideId) {
          // artist.Reviews.push(data.review);
          guide.Reviews = [...guide.Reviews, data.review];
        }
        return guide;
      })
    );
  };

  const createGuide = async (e) => {
    e.preventDefault();
    let response = await axios.post(`${backendUrl}/guides/`, {
      name: e.target.name.value,
    });

    let newGuide = response.data.newGuide;

    await setGuides([...guides, newGuide]);
  };

  const deleteGuide = async (e) => {
    e.preventDefault();
    let guideId = parseInt(e.target.id);
    let arrayIndex = e.target.getAttribute("arrayindex");

    await axios.delete(`${backendUrl}/guides/${guideId}`);

    const guidesCopy = [...guides];
    guidesCopy.splice(arrayIndex, 1);
    await setGuides([...guidesCopy]);
  };

  const updateGuide = async (e) => {
    e.preventDefault();
    let guideId = parseInt(e.target.guideId.value);
    let response = await axios.put(`${backendUrl}/guides/${guideId}`, {
      name: e.target.name.value,
      guideId: guideId,
    });

    let updatedGuide = response.data.guide;

    await setGuides(
      guides.map((guide, index) => {
        if (guide.id === updatedGuide.id) {
          return updatedGuide;
        } else {
          return guide;
        }
      })
    );
  };

  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/guides">All Guides</Link>
      </nav>
      <main>
        <Switch>
          <Route exact path="/" component={() => <Home />} />
          <Route
            exact
            path="/guides"
            component={() => (
              <AllGuides
                guides={guides}
                createGuide={(e) => createGuide(e)}
                deleteGuide={(e) => deleteGuide(e)}
              />
            )}
          />
          <Route
            exact
            path="/guides/:id"
            component={(routerProps) => (
              <GuideDetail
                {...routerProps}
                guides={guides}
                createReview={(e) => createReview(e)}
                updateGuide={(e) => updateGuide(e)}
              />
            )}
          />
          <Route path="/*" render={() => <Redirect to="/" />} />
        </Switch>
      </main>
    </div>
  );
}

export default App;