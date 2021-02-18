import * as React from "react"
import { Container } from "@material-ui/core"

const TestArea = ({ type }) => {
  return (
    <Container>
      <h1>This is the TestArea </h1>
      <h4>You are taking the {type} test!</h4>
    </Container>
  )
}

export default TestArea
