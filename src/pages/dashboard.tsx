import * as React from "react"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import { Container, Box, Typography, CircularProgress } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import Logo from "../components/Logo"
import Review from "../assets/review.svg"
import { gql, useQuery } from "@apollo/client"
import Score from "../components/Dashboard/Score"

const useStyles = makeStyles(theme => ({
  root: {
    padding: "3rem",
    margin: "auto",
  },
  box: {
    marginTop: 30,
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
    justifyContent: "space-evenly",
    textAlign: "center",
    flexDirection: "column",
  },
  item: {
    maxHeight: 500,
    maxWidth: 350,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(255,255,255, 0)",
  },
  icon: {
    maxWidth: 150,
    maxHeight: 150,
  },
  results: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  field: {
    margin: ".5rem",
  },
  scoreField: {
    margin: ".5rem .5rem .5rem 3rem",
  },
}))

const GET_SCORES = gql`
  query test_scores {
    test_scores {
      id
      firstName
      lastName
      score
    }
  }
`
const AdminPage = () => {
  const classes = useStyles()
  const { loading, error, data } = useQuery(GET_SCORES)

  if (loading)
    return (
      <Container
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <CircularProgress />
      </Container>
    )
  if (error) return "Ooops, there was an Error!"

  const scores = data.test_scores

  return (
    <>
      <Layout logo={false}>
        <SEO title="Admin Dashboard" />
        <Container maxWidth="lg" className={classes.root}>
          <Logo />
          <Box className={classes.box}>
            <Box className={classes.item}>
              <Review className={classes.icon} />
              <Typography variant="h4">Test Score Review</Typography>
            </Box>
            {scores.map(score => (
              <Score {...score} />
            ))}
          </Box>
        </Container>
      </Layout>
    </>
  )
}

export default AdminPage
