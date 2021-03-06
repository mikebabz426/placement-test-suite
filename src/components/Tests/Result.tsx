import * as React from "react"
import { Box, Button, Typography, Grow } from "@material-ui/core"
import { Link } from "gatsby"
import { makeStyles } from "@material-ui/core/styles"
import { gql, useMutation } from "@apollo/client"
import { useNewUserContext } from "../../UserContext"
import { navigate } from "gatsby"
import { getLevel } from "../../services/helpers"

const ADD_COMPLETED = gql`
  mutation MyMutation(
    $firstName: String!
    $lastName: String!
    $score: Int!
    $type: String!
    $level: String!
  ) {
    insert_test_scores_one(
      object: {
        firstName: $firstName
        lastName: $lastName
        score: $score
        testType: $type
        level: $level
      }
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
  msg: {
    marginBottom: "1.5rem",
    textAlign: "center",
  },
  box: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
}))
const Result = ({ score, type, correct }) => {
  const classes = useStyles()
  const [addCompleted] = useMutation(ADD_COMPLETED)
  const [user, setUser] = useNewUserContext()

  const handleClick = () => {
    setUser(prevState => ({ ...prevState, score: score }))
    const level = getLevel(correct)

    addCompleted({
      variables: {
        firstName: user.firstName,
        lastName: user.lastName,
        score: score,
        type: type,
        level: level,
      },
    })
    navigate("/")
  }

  return (
    <Grow in timeout={1500}>
      <Box className={classes.box}>
        <Typography variant="h3" className={classes.msg}>
          You scored: {score}%
        </Typography>
        <Link to="/" className={classes.link}>
          <Button
            variant="contained"
            style={{
              background: "linear-gradient(45deg, #f9c4ff 30%, #f289fe 90%)",
            }}
            onClick={handleClick}
          >
            Back to Home
          </Button>
        </Link>
      </Box>
    </Grow>
  )
}

export default Result
