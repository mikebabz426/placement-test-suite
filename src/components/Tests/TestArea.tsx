import * as React from "react"
import { Container } from "@material-ui/core"
import Test from "./Test"

const TestArea = ({ type }) => {
  return (
    <Container>
      <Test type={type} />
    </Container>
  )
}

export default TestArea
