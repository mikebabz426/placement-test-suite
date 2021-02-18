import * as React from "react"
import { Button, Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  m: {
    margin: "1rem",
    backgroundColor: "#ff9e80",
  },
}))

const TestSelection = ({ setTest }) => {
  const classes = useStyles()
  return (
    <div>
      <Typography variant="h5">
        Please select the test you wish to take.
      </Typography>
      <Button
        onClick={() => setTest("placement")}
        variant="contained"
        className={classes.m}
      >
        Placement Test
      </Button>
      <Button variant="contained" className={classes.m}>
        Section Test
      </Button>
    </div>
  )
}

export default TestSelection
