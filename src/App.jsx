import "./App.css";
import TweetsList from "./components/TweetsList/TweetsList";
import TweetsForm from "./components/TweetForm/TweetForm";
import { useTweets } from "./hooks/useTweets";
import React from "react";
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";

function App() {
  const { tweets } = useTweets();
  return (
    <Router>
      <div className="container">
        <nav className="navbar">
          <ul>
            <li>
              <NavLink exact to="/">Home</NavLink>
            </li>
            <li>
              <NavLink exact to="/add">Add tweet</NavLink>
            </li>
            <li>
              <NavLink exact to="/liked">Liked tweets</NavLink>
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
            <Route path="/edit/:tweetId">
              <h1 className="page-title">Edit tweet</h1>
              <TweetsForm />
            </Route>
            <Route exact path="/">
              <h1 className="page-title">Simple twitter</h1>
              <TweetsList tweetsData={tweets} />
            </Route>
            <Route path="*">
              <h1 className="page-title">Page not found!</h1>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;