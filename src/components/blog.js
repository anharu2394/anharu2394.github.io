import React, {Component} from 'react'
import Avater from "./../assets/images/anharu.jpg"
import Link from "gatsby-link";

class Blog extends Component {
  render () {
    return (
       <div>
            <header className="header">
              <div className="buttons">
                <div className="avater"><img src={Avater}/></div>
                <Link to="/"><div className="button"><div className="text">HOME</div></div></Link>
                <Link to="/blog"><div className="button"><div className="text">BLOG</div></div></Link>
              </div>
            </header>
          {this.props.children}
       </div>
    )
  }
}

export default Blog
