import * as React from "react"
import { useState } from "react"
import { useNewUserContext } from "../../UserContext"
import { Container, Fade } from "@material-ui/core"
import {
  PlacementTestOne,
  Beginner,
  AdvancedPlacement,
} from "../../services/placement-tests"
import Question from "./Question"
import Result from "./Result"
import IdForm from "./IdForm"

const Test = ({ type }) => {
  const [user] = useNewUserContext()
  const [counter, setCounter] = useState(0)
  const [correct, setCorrect] = useState(0)

  let test
  if (type === "Placement") {
    test = PlacementTestOne
  } else if (type === "Advanced-Placement") {
    test = AdvancedPlacement
  } else {
    test = Beginner
  }

  const getResults = () => {
    const results = Math.round((correct / test.length) * 100)

    return results
  }

  return (
    <Fade timeout={1000} in>
      <Container>
        {!user.firstName && !user.lastName ? (
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
            score={getResults()}
            type={type}
          />
        ) : (
          <Result score={getResults()} />
        )}
      </Container>
    </Fade>
  )
}

export default Test
