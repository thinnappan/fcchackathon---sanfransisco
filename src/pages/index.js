import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <h1>Hi I am dinesh</h1>
    <p>I am studying in KG college of arts and science.</p>
    <p>Love to code</p>
	<a href='http://www.dineshmax.ga' target='_blank'>Portfolio</a>
	<br></br>
    <Link to="/page-2/">Page - 2</Link>
  </div>
)

export default IndexPage
