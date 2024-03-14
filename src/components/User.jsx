import React from "react";

//get images, followers data, repos, url of repo

export default function User({ user }) {
  const {
    avatar_url,
    followers_url,
    followers,
    following_url,
    following,
    public_repos,
    url,
    name,
    login,
    twitter_username,
  } = user;


  return (
    <div className="user">
      <div>
        {avatar_url?<img src={avatar_url} className="image" alt="user avatar" /> : <img src="src\assets\profile\icons8-homer-simpson.svg" className="image" alt="profile avatar" />}
        {/* <img src={avatar_url} className="image" alt="user avatar" /> */}
      </div>
      <div className="info">
        <a href={`https://github.com/${login}`} target="_blank" className="name"><h2>{name || login}</h2></a>
        <div className="follow">
        <a href={`https://github.com/${login}`} target="_blank">followers:{followers}</a>
        <a href={`https://github.com/${login}`} target="_blank">following:{following}</a>
        <a href={`https://github.com/${login}`} target="_blank">Public Repo:{public_repos}</a>
        {twitter_username? <a href={`https://twitter.com/${twitter_username}`} target="_blank" class="twitter"><img src="src\assets\profile\icons8-twitterx.svg" className="twitter" alt="user avatar" height="25" width="25"/>{twitter_username}</a>: null}
        </div>
      </div>
    </div>
  );
}
