import React from 'react'
import './styles.scss'

interface Load<N> {
  year: N
}

type Data = Readonly<Load<number>>
const Footer : React.FC = () => {
  const data: Data = {
    year: new Date().getFullYear()
  }
  const { year } = data
    return (
      <footer>
        <ol>
          <li>Terms</li>
          <li>Privacy Policy</li>
          <li>EULA</li>
          <li>Release Notes</li>
        </ol>
        <span>
          {year} GitHub, Inc All rights reserved
        </span>
      </footer>
    );
}

export default Footer
