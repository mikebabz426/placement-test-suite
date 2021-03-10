import * as React from "react"
import { Button, Typography, Zoom, Box } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

const TestSelection = ({ setTest }) => {
  const classes = useStyles()
  return (
    <div className={classes.container}>
      <Typography className={classes.head} variant="h5">
        Please select the placement test you wish to take:
      </Typography>
      <Zoom timeout={1000} in>
        <Box>
          {/* For app testing purposes */}
          {/* <Button
            style={{
              background: "linear-gradient(45deg, #f9c4ff 30%, #f289fe 80%)",
            }}
            onClick={() => setTest("Placement")}
            variant="contained"
            className={classes.m}
          >
            App Testing
          </Button> */}
          <Button
            style={{
              background: "linear-gradient(45deg, #f9c4ff 40%, #f289fe 90%)",
            }}
            onClick={() => setTest("Beginner")}
            variant="contained"
            className={classes.m}
          >
            Beginner
          </Button>
          <Button
            style={{
              background: "linear-gradient(45deg, #f9c4ff 40%, #f289fe 90%)",
            }}
            onClick={() => setTest("Advanced-Placement")}
            variant="contained"
            className={classes.m}
          >
            Beginner to Advanced
          </Button>
        </Box>
      </Zoom>
    </div>
  )
}

//Custom Styling

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

export default TestSelection
