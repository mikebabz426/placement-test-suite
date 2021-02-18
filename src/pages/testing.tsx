import * as React from "react"
import { useState } from "react"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import { Container } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  root: {
    padding: "3rem",
    margin: "10rem auto",
  },
}))

const TestingPage = () => {
  const classes = useStyles()
  const [testType, setTestType] = useState()

  return (
    <>
      <Layout logo={false}>
        <SEO title="Log In" />
        <Container maxWidth="lg" className={classes.root}>
          Test Area
          {testType ? <Test type={testType} /> : <TestSelection />}
        </Container>
      </Layout>
    </>
  )
}

export default TestingPage
