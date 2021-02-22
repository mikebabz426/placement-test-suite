import * as React from "react"
import { useState } from "react"
import { Container } from "@material-ui/core"
import { PlacementTestOne, SectionTest } from "../../services/placement-tests"
import Question from "./Question"
import Result from "./Result"
import { useNewUserContext } from "../../UserContext"
import IdForm from "./IdForm"

const Test = ({ type }) => {
  const [user] = useNewUserContext()
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
      {user.firstName === "" && user.lastName === "" ? (
        <IdForm />
      ) : counter < test.length ? (
        <Question
          ele={test[counter]}
          test={test}
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
