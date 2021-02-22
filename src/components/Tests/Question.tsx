import * as React from "react"
import { useState } from "react"
import {
  Box,
  Typography,
  FormControl,
  RadioGroup,
  Radio,
  FormControlLabel,
  Button,
} from "@material-ui/core"

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
    <Box>
      <Typography variant="body2">
        {" "}
        {counter + 1 > test.length ? null : (
          <h4>
            question: {counter + 1} of {test.length}
          </h4>
        )}
      </Typography>
      <Typography variant="h5">{question}</Typography>
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
        <Button variant="contained" onClick={() => nextQuestion(ele)}>
          Next
        </Button>
      </FormControl>
    </Box>
  )
}

export default Question
