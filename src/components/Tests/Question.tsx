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
  },
}))

const Question = ({
  ele,
  test,
  question,
  options,
  counter,
  setCounter,
  correct,
  setCorrect,
}) => {
  const [value, setValue] = React.useState(null)
  const classes = useStyles()

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value)
  }

  const nextQuestion = que => {
    if (value === que.answer) {
      setCorrect(correct + 1)
      setCounter(counter + 1)
      setValue(null)
    } else {
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
            Next
          </Button>
        </FormControl>
      </Box>
    </Fade>
  )
}

export default Question
