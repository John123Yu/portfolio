import React from 'react'

const porfolios = [
  {
    name: 'PDF Filler',
    link: 'http://pdf-form-react.s3-website-us-east-1.amazonaws.com/'
  },
  { name: 'MineSweeper', link: 'https://john123yu.github.io/MineSweeper1/' },
  { name: 'MineSweeperRedux', link: 'https://daxbktzcfl06t.cloudfront.net/' },
  { name: 'MineSweeper3D', link: 'https://john123yu.github.io/MineSweeper3D/' }
]
function Portfolio (props) {
  return (
    <nav>
      <h1>Personal Projects</h1>
      <ul className='flex-column'>
        {porfolios.map(portfolio => (
          <li key={portfolio.name}>
            <a href={portfolio.link} target='_blank' rel='noreferrer'>
              - {portfolio.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Portfolio
