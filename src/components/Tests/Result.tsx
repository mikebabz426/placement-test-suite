import * as React from "react"
import { Box, Button } from "@material-ui/core"
import { Link } from "gatsby"
import { makeStyles } from "@material-ui/core/styles"
import { gql, useMutation } from "@apollo/client"
import { useNewUserContext } from "../../UserContext"

const ADD_COMPLETED = gql`
  mutation MyMutation($firstName: String!, $lastName: String!, $score: Int!) {
    insert_test_scores_one(
      object: { firstName: $driver, lastName: $truck, score: $trailer }
    ) {
      id
    }
  }
`

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
const Result = ({ score }) => {
  const [addCompleted] = useMutation(ADD_COMPLETED)
  const classes = useStyles()
  const [user, setUser] = useNewUserContext()

  setUser(prevState => ({ ...prevState, score: score }))

  addCompleted({
    variables: {
      firstName: user.firstName,
      lastName: user.lastName,
      score: user.score,
    },
  })

  return (
    <Box>
      <h1>You scored: {score}%</h1>
      <Link to="/" className={classes.link}>
        <Button
          variant="contained"
          style={{
            background: "linear-gradient(45deg, #f9c4ff 30%, #f289fe 90%)",
          }}
        >
          Back to Home
        </Button>
      </Link>
    </Box>
  )
}

export default Result
