import * as React from "react"
import { Button, Typography, Zoom, Box } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  m: {
    margin: "1rem",
    backgroundColor: "#ff9e80",
  },
  head: {
    margin: "1rem",
  },
}))

const TestSelection = ({ setTest }) => {
  const classes = useStyles()
  return (
    <div className={classes.container}>
      <Typography className={classes.head} variant="h5">
        Please select the test you wish to take:
      </Typography>
      <Zoom timeout={1000} in>
        <Box>
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
          <Button
            style={{
              background: "linear-gradient(45deg, #f9c4ff 40%, #f289fe 90%)",
            }}
            onClick={() => setTest("quick-placement")}
            variant="contained"
            className={classes.m}
          >
            Quick Placement
          </Button>
        </Box>
      </Zoom>
    </div>
  )
}

export default TestSelection
