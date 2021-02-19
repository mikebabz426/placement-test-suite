import * as React from "react"
import { Box, Button } from "@material-ui/core"
import { Link } from "gatsby"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  root: {
    padding: "3rem",
    margin: "10rem auto",
  },

  link: {
    textDecoration: "none",
    color: "#333",
    fontWeight: 600,
  },
}))
const Result = ({ score }) => {
  const classes = useStyles()
  return (
    <Box>
      <h1>You scored: {score}%</h1>
      <Link to="/" className={classes.link}>
        <Button
          variant="contained"
          style={{
            background: "linear-gradient(45deg, #f9c4ff 30%, #f289fe 90%)",
          }}
        >
          Back to Home
        </Button>
      </Link>
    </Box>
  )
}

export default Result
