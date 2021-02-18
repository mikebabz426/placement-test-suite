import * as React from "react"
import { useState } from "react"
import { Container } from "@material-ui/core"
import { PlacementTestOne } from "../../services/placement-tests"
import Question from "./Question"

const test = PlacementTestOne

const PlacementTest = () => {
  const [counter, setCounter] = useState(0)
  const [correct, setCorrect] = useState(0)

  const getResults = () => {
    const results = Math.round((correct / test.length) * 100)
    return results
  }

  return (
    <Container>
      <h1>This is the Placement Test, question: {counter + 1}</h1>
      {counter < test.length ? (
        <Question
          ele={test[counter]}
          question={test[counter].question}
          options={test[counter].options}
          counter={counter}
          setCounter={setCounter}
          correct={correct}
          setCorrect={setCorrect}
        />
      ) : (
        <h1>Test end: your score is {getResults()}%</h1>
      )}
    </Container>
  )
}

export default PlacementTest
