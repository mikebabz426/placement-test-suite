import * as React from "react"
import { Container } from "@material-ui/core"
import Test from "./Test"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    padding: 50,
    borderRadius: "10px",
  },
}))

const TestArea = ({ type }) => {
  const classes = useStyles()
  return (
    <Container maxWidth="lg" className={classes.root}>
      <Test type={type} />
    </Container>
  )
}

export default TestArea
