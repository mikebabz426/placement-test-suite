import * as React from "react"
import { useState } from "react"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import { Link } from "gatsby"
import { Container, Box } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import TestSelection from "../components/TestSelection"
import Test from "../components/Tests/Test"
import Logo from "../components/Logo"

const TestingPage = () => {
  const classes = useStyles()
  const [testType, setTestType] = useState()

  return (
    <>
      <Layout logo={false}>
        <SEO title="Testing" />
        <Container maxWidth="lg" className={classes.root}>
          <Link to="/" className={classes.homeLink}>
            <Logo />
          </Link>
          {testType ? (
            <Box className={classes.testBox}>
              <Test type={testType} />
            </Box>
          ) : (
            <Box className={classes.box}>
              <TestSelection setTest={setTestType} />
            </Box>
          )}
        </Container>
      </Layout>
    </>
  )
}

//Custom Styling

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
  box: {
    marginTop: 80,
    minHeight: 300,
    maxHeight: 500,
    padding: 50,
    background: "rgba( 255, 255, 255, 0.45)",
    boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
    backdropFilter: " blur( 10.0px )",
    WebkitBackdropFilter: "blur(10.0px)",
    borderRadius: "10px",
    border: "1px solid rgba( 255, 255, 255, 0.18 )",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  testBox: {
    marginTop: 80,
    minHeight: 300,
    maxHeight: 500,
    padding: 20,
    background: "rgba( 255, 255, 255, 0.45)",
    boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
    backdropFilter: " blur( 10.0px )",
    WebkitBackdropFilter: "blur(10.0px)",
    borderRadius: "10px",
    border: "1px solid rgba( 255, 255, 255, 0.18 )",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  homeLink: {
    textDecoration: "none",
    color: "#333",
  },
}))

export default TestingPage
