import React from 'react'

class Header extends React.Component {
  render() {
    return(
      <header>
        <div className="branding">
          <img src="http://i.imgur.com/t2Is2ww.jpg" className="branding-image" />
          <p className="branding-title">Miguh Ruiz</p>
          <p className="branding-description">Full Stack JavaScript Developer</p>
        </div>
      </header>
    )
  }
}

export default Header
