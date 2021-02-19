import * as React from "react"
import { useState } from "react"
import { Container } from "@material-ui/core"
import { PlacementTestOne, SectionTest } from "../../services/placement-tests"
import Question from "./Question"
import Result from "./Result"

const Test = ({ type }) => {
  const [counter, setCounter] = useState(0)
  const [correct, setCorrect] = useState(0)

  let test
  if (type === "placement") {
    test = PlacementTestOne
  } else {
    test = SectionTest
  }

  const getResults = () => {
    const results = Math.round((correct / test.length) * 100)
    return results
  }

  return (
    <Container>
      {counter + 1 > test.length ? null : (
        <h4>
          question: {counter + 1} of {test.length}
        </h4>
      )}

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
        <Result score={getResults()} />
      )}
    </Container>
  )
}

export default Test
