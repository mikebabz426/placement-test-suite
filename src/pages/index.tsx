import * as React from "react"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import { Container, Button } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import { Link } from "gatsby"

const useStyles = makeStyles(theme => ({
  root: {
    padding: "3rem",
    margin: "10rem auto",
  },
  link: {
    textDecoration: "none",
    color: "#333",
    fontWeight: 600,
  },
}))

const IndexPage = () => {
  const classes = useStyles()

  return (
    <>
      <Layout logo={false}>
        <SEO title="Log In" />
        <Container maxWidth="lg" className={classes.root}>
          Welcome Page
          <h1>To take a test, please click Select Test!</h1>
          <Link to="testing" className={classes.link}>
            <Button
              variant="contained"
              style={{
                background: "linear-gradient(45deg, #ff80ab 30%, #ff5252 90%)",
              }}
            >
              Select Test
            </Button>
          </Link>
        </Container>
      </Layout>
    </>
  )
}

export default IndexPage
