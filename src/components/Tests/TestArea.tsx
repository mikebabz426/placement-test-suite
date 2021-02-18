import * as React from "react"
import { Container } from "@material-ui/core"
import PlacementTest from "./PlacementTest"

const TestArea = ({ type }) => {
  return (
    <Container>
      <h1>This is the TestArea </h1>
      {type === "placement" ? <PlacementTest /> : null}
    </Container>
  )
}

export default TestArea
