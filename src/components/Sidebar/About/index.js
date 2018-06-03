import React, { Component } from 'react'

import './style.scss'

class About extends Component {
  render () {
    return (
      <div className="about">
        <div className="image">
        </div>
        <div className="bio">
            最近、よく書く言語はRuby/JavaScript/Python。<br />
            普段はよくWebをやってます。Webをやってる時が一番楽しいです。<br />色々なフレームワークでバックエンドを書いてみたり、SPAを作ってみたりするのが好きです。<br />
            機械学習も少しできます。<br />
            Linuxに強くなりたいです。<br />
            かっこいいVimmerになりたいです。<br />
          <div className="emoji">
          </div>
        </div>
      </div>
    )
  }
}

export default About
