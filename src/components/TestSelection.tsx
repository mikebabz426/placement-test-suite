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
        style={{
          background: "linear-gradient(45deg, #f9c4ff 30%, #f289fe 80%)",
        }}
        onClick={() => setTest("placement")}
        variant="contained"
        className={classes.m}
      >
        Placement Test
      </Button>
      <Button
        style={{
          background: "linear-gradient(45deg, #f9c4ff 40%, #f289fe 90%)",
        }}
        onClick={() => setTest("section")}
        variant="contained"
        className={classes.m}
      >
        Section Test
      </Button>
    </div>
  )
}

export default TestSelection
