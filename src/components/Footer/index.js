import React from 'react'

import { FooterComponent } from './style'

const Footer = () => {
  return (
    <FooterComponent>
      <p>
        created by{' '}
        <a className="user" href="#">
          lemartins07
        </a>{' '}
        - <a href="#">devChallenges.io</a>
      </p>
    </FooterComponent>
  )
}

export default Footer
