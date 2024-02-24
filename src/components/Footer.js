import React from 'react'
import PropTypes from 'prop-types'

export default function Footer(props) {
  return (
    <footer id="footer" style={props.timeout ? { display: 'none' } : {}}>
      <p className="copyright">
        &copy; © 2024 TWENTY SIX CLUB. All Rights Reserved. | email :
        funnyfacee7777@gmail.com
      </p>
    </footer>
  )
}

Footer.propTypes = {
  timeout: PropTypes.bool,
}
