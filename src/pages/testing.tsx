import * as React from "react"
import { useState } from "react"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import { Container, Button } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import TestSelection from "../components/TestSelection"
import TestArea from "../components/Tests/TestArea"
import { Link } from "gatsby"

const useStyles = makeStyles(theme => ({
  root: {
    padding: "3rem",
    margin: "auto",
  },

  link: {
    textDecoration: "none",
    color: "#333",
    fontWeight: 600,
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
          <h1>This is the Testing Page</h1>
          {testType ? (
            <TestArea type={testType} />
          ) : (
            <TestSelection setTest={setTestType} />
          )}
        </Container>
      </Layout>
    </>
  )
}

export default TestingPage
