import React, { Component } from 'react'

import './style.scss'
import 'font-awesome/css/font-awesome.min.css'

class Links extends Component {
  render() {
    return (
      <div className="links">
        <ul className="icons-list">
          <li className="icon">
            <a href="https://github.com/anharu2394" target="_blank">
              <i className="fa fa-github"></i>
            </a>
          </li>
          <li className="icon">
            <a href="https://twitter.com/haru_programing" target="_blank">
              <i className="fa fa-twitter"></i>
            </a>
          </li>
        </ul>
        <div className="small">
        </div>
      </div>
    )
  }
}

export default Links
