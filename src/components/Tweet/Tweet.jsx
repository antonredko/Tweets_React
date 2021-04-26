import { useTweets } from './../../hooks/useTweets';
import { useHistory } from "react-router-dom";

export default function Tweet({tweetData}) {
    const history = useHistory()
    const {tweetsAction} = useTweets()
    const dateFormatter = new Intl.DateTimeFormat()
    const timeFormatter = new Intl.DateTimeFormat(undefined, {
        hour: '2-digit',
        minute: '2-digit'
    })
    return (
        <div className="tweet">
            <div className="tweet-header">
                <img className="tweet-author-photo" width="30" height="30" loading="lazy" src="https://placeimg.com/30/30/people" alt="Author"/>
                <div className="tweet-author">{tweetData.author}</div>
            </div>
            <div className="tweet-text">{tweetData.text}</div>
            <div className="tweet-actions">
                <button onClick={() => history.push(`/edit/${tweetData.id}`)}>Edit</button>
                <button onClick={() => tweetsAction({type: 'remove', payload: {id: tweetData.id}})}>Remove</button>
            </div>
            <div className="tweet-footer">
                <button className="tweet-like" onClick={() => tweetsAction({type: 'like', payload: {id: tweetData.id}})}>
                    {tweetData.liked ? <span className="liked">&#10084;</span> : <span className="unliked">&#10084;</span>}
                </button>
                <div className="tweet-date">
                    {tweetData.id !== tweetData.timestamp && 'Edited'} {timeFormatter.format(tweetData.timestamp)} {dateFormatter.format(tweetData.timestamp)}
                </div>
            </div>
        </div>
    )
}