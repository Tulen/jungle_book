import React from 'react'
import { HashRouter, Link } from 'react-router-dom'

class ProfileHeader extends React.Component {
  render() {
    return (
      <div id="prof-header-container">
        <div id="prof-cvr-photo">
          <div id="prof-pic">
            <img src="https://pbs.twimg.com/media/DBF7FLLVYAAaJDX.jpg" />
          </div>
           <h2 id="prof-name"> Quokka </h2>
        </div>
        <nav id="prof-headline">
          <ul id="prof-nav-links">
            <li>
              <h5> <Link to="/user/"> Timeline </Link> </h5>
            </li>
            <li>

              <h5> <Link to="/user/about"> About </Link> </h5>
            </li>
            <li>
              <h5> <Link to="/user/friends"> Friends </Link> </h5>
            </li>
            <li>
              <h5> <Link to="/user/photos"> Photos </Link> </h5>
            </li>
          </ul>
        </nav>
      </div>
    )
  }
}

export default ProfileHeader