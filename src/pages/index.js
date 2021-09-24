import React from 'react'
import App from '../components/App'
import { Link } from 'gatsby'
import './index.css'

const Index = () => (
  <>
    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
      <Link to="/docs/" activeStyle={{ color: 'red' }}>
        Documentation
      </Link>
    </div>
    <App />
  </>
)

export default Index
