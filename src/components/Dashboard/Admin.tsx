import * as React from "react"
import {
  Box,
  Typography,
  Button,
  Container,
  CircularProgress,
} from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import { gql, useQuery, useMutation } from "@apollo/client"
import ScoreTable from "./ScoreTable"
import Review from "../../assets/review.svg"

//Clears all test submissions from database

const CLEAR_TABLE = gql`
  mutation MyMutation {
    delete_test_scores(where: {}) {
      affected_rows
    }
  }
`

//Retreives test submissions from database

const GET_SCORES = gql`
  query test_scores {
    test_scores {
      id
      firstName
      lastName
      score
      testType
      level
    }
  }
`

const Admin = () => {
  const { loading, error, data, refetch } = useQuery(GET_SCORES)
  const classes = useStyles()
  const [clearTable] = useMutation(CLEAR_TABLE)

  if (loading)
    return (
      <Container
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <CircularProgress color="primary" size={60} thickness={4} />
      </Container>
    )
  if (error)
    return <Typography variant="h5">Ooops, there was an Error!</Typography>

  const handleClick = () => {
    clearTable()
    refetch()
  }

  const scores = data.test_scores

  return (
    <Box className={classes.box}>
      <Box className={classes.item}>
        <Review className={classes.icon} />
        <Typography variant="h4">Test Score Review</Typography>
      </Box>
      <ScoreTable scores={scores} />
      <Button
        variant="contained"
        style={{
          background: "linear-gradient(45deg, #f9c4ff 20%, #f289fe 80%)",
          margin: "2rem",
        }}
        onClick={handleClick}
      >
        Clear Table
      </Button>
    </Box>
  )
}

//Custom Styling

const useStyles = makeStyles(theme => ({
  root: {
    padding: "3rem",
    margin: "auto",
  },
  box: {
    marginTop: 30,
    minHeight: 300,
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
  link: {
    textDecoration: "none",
    color: "#333",
  },
}))

export default Admin
