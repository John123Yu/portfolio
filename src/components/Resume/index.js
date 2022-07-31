import React from 'react'

function Header () {
  return (
    <>
      <section className='my-5'>
        <h1>Resume</h1>
        <a href='../../assets/Resume.pdf' download>
          Click to download
        </a>

        <h2>Technologies</h2>
        <p>
          HTML, CSS, Git, Responsive Web Design, Bootstrap, Angular, React,
          Redux, SQL, NoSQL, Node, Linux, D3, Leaflet.JS, Highcharts JS, Numpy,
          Pandas, Scikit-learn, Elasticsearch, Datatables, Google Scripts,
          Babel, Webpack, AWS
        </p>
      </section>
    </>
  )
}

export default Header
