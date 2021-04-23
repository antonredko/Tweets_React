import React, { useState } from "react";
import { useTweets } from "./../../hooks/useTweets";
import { useHistory } from "react-router-dom";

export default function TweetsForm() {
  const [tweetText, setTweetText] = useState("");
  const [tweetAuthor, setTweetAuthor] = useState("")
  const history = useHistory();
  const { tweetsAction } = useTweets();
  function saveTweet(e) {
    e.preventDefault();
    const createTime = Date.now();
    const newTweet = {
      id: createTime,
      author: tweetAuthor,
      text: tweetText,
      timestamp: createTime,
      liked: false,
    };
    tweetsAction({ type: "create", payload: newTweet });
    history.push("/");
  }
  function cancelTweet(e) {
    history.push("/");
  }
  return (
    <form className="tweet-form" onSubmit={saveTweet}>
      <input 
        type="text"
        name="tweetAuthor"
        placeholder="Name"
        value={tweetAuthor}
        onChange={(e) => setTweetAuthor(e.target.value)}
      />
      <textarea
        value={tweetText}
        onChange={(e) => setTweetText(e.target.value)}
        name="tweetText"
        placeholder="Tweet text"
      ></textarea>
      <div className="tweet-form-actions">
        <button type="reset" onClick={cancelTweet}>
          Cancel
        </button>
        <button type="submit">Save</button>
      </div>
    </form>
  );
}
