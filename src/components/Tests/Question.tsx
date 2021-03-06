import * as React from "react"
import {
  Box,
  Typography,
  FormControl,
  RadioGroup,
  Radio,
  FormControlLabel,
  Button,
} from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import Fade from "@material-ui/core/Fade"
import { gql, useMutation } from "@apollo/client"
import { useNewUserContext } from "../../UserContext"
import { getLevel } from "../../services/helpers"

//Mutation for submitting test results to database

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

const Question = ({
  ele,
  test,
  question,
  options,
  counter,
  setCounter,
  correct,
  setCorrect,
  score,
  type,
}) => {
  const [value, setValue] = React.useState(null)
  const [addCompleted] = useMutation(ADD_COMPLETED)
  const [user, setUser] = useNewUserContext()
  const classes = useStyles()

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value)
  }

  const nextQuestion = que => {
    //If you are at the last question of the test, send test results to database

    if (counter + 1 === test.length) {
      if (value === que.answer) {
        setCorrect(correct + 1)
      }
      setUser(prevState => ({ ...prevState, score: score }))

      let level
      type === "Beginner" ? (level = "Beginner") : (level = getLevel(correct))

      console.log(level)

      addCompleted({
        variables: {
          firstName: user.firstName,
          lastName: user.lastName,
          score: score,
          type: type,
          level: level,
        },
      })
      setCounter(counter + 1)
      setValue(null)
    } else {
      if (value === que.answer) {
        setCorrect(correct + 1)
      }
      setCounter(counter + 1)
      setValue(null)
    }
  }

  return (
    <Fade timeout={800} in>
      <Box className={classes.box}>
        <Typography variant="body2">
          {" "}
          {counter + 1 > test.length ? null : (
            <span>
              question: {counter + 1} of {test.length}
            </span>
          )}
        </Typography>
        <Typography className={classes.question} variant="h5">
          {question}
        </Typography>
        <FormControl component="fieldset">
          <RadioGroup
            aria-label="answer-options"
            name="Options"
            value={value}
            onChange={handleChange}
          >
            {options.map(opt => (
              <FormControlLabel
                key={opt}
                value={opt}
                control={<Radio />}
                label={opt}
              />
            ))}
          </RadioGroup>

          <Button
            className={classes.btn}
            variant="contained"
            onClick={() => nextQuestion(ele)}
          >
            {counter + 1 === test.length ? "Submit for Review" : "Next"}
          </Button>
        </FormControl>
      </Box>
    </Fade>
  )
}

//Custom Styling

const useStyles = makeStyles(theme => ({
  box: {
    backgroundColor: "#f6f6f6",
    padding: "3rem",
    borderRadius: "10px",
  },
  btn: {
    background: "linear-gradient(45deg, #f9c4ff 40%, #f289fe 90%)",
    marginTop: "1.5rem",
  },
  question: {
    marginBottom: "1.5rem",
    marginTop: "1.5rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: "16px",
    },
  },
}))

export default Question
