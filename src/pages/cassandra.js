// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'

// Step 2: Define your component
const Cassandra = () => {
  return (
    <Layout pageTitle="Cassandra">
      <p>Testing this.</p>
    </Layout>
  )
}

export const Head = () => <Seo title="Cassandra" />
// Step 3: Export your component
export default Cassandra