import "./App.css";
import TweetsList from "./components/TweetsList/TweetsList";
import TweetsForm from "./components/TweetForm/TweetForm";
import { useTweets } from "./hooks/useTweets";
import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link, useParams } from "react-router-dom";

function App() {
  const { tweets } = useTweets();
  useEffect(() => {
    console.log(tweets);
  }, [tweets]);
  return (
    <Router>
      <div className="container">
        <nav className="navbar">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/add">Add tweet</Link>
            </li>
            <li>
              <Link to="/liked">Liked tweets</Link>
            </li>
          </ul>
        </nav>
        <div className="content">
          <Switch>
            <Route path="/liked">
              <h1 className="page-title">Liked tweets</h1>
              <TweetsList tweetsData={tweets.filter(tweet => tweet.liked)} />
            </Route>
            <Route path="/add">
              <h1 className="page-title">Add new tweet</h1>
              <TweetsForm />
            </Route>
            <Route path="/">
              <h1 className="page-title">Simple twitter</h1>
              <TweetsList tweetsData={tweets} />
            </Route>
          </Switch>
        </div>

        {/* <div>edit form</div> */}
      </div>
    </Router>
  );
}

export default App;