import * as React from "react"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import { Container, Button, Box } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
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
  box: {
    marginTop: 130,
    minHeight: 300,
    maxHeight: 500,
    background: "rgba( 255, 255, 255, 0.45)",
    boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
    backdropFilter: " blur( 10.0px )",
    WebkitBackdropFilter: "blur(10.0px)",
    borderRadius: "10px",
    border: "1px solid rgba( 255, 255, 255, 0.18 )",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
}))

const IndexPage = () => {
  const classes = useStyles()

  return (
    <>
      <Layout logo={false}>
        <SEO title="Log In" />
        <Container maxWidth="lg" className={classes.root}>
          <Box className={classes.box}>
            <h1>To take a test, please click Select Test!</h1>
            <Link to="testing" className={classes.link}>
              <Button
                variant="contained"
                style={{
                  background:
                    "linear-gradient(45deg, #f9c4ff 30%, #f289fe 90%)",
                }}
              >
                Student Testing
              </Button>
            </Link>
          </Box>
        </Container>
      </Layout>
    </>
  )
}

export default IndexPage
