import React from 'react'

function About () {
  return (
    <>
      <img alt="avatar" height='200px' src={require('../../assets/images/avatar.png')}></img>
      <section className='my-5'>
        <p>
          John is a Full Stack developer specializing in JavaScript and Python.
          He also has an AWS solutions architect associate certificate.
        </p>
      </section>
    </>
  )
}

export default About
