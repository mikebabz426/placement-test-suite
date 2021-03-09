import * as React from "react"
import { Box, Button, Typography, Grow } from "@material-ui/core"
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
  msg: {
    marginBottom: "1.5rem",
    textAlign: "center",
  },
  box: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
}))
const Result = ({ score }) => {
  const classes = useStyles()

  return (
    <Grow in timeout={1500}>
      <Box className={classes.box}>
        <Typography variant="h3" className={classes.msg}>
          You scored: {score}%
        </Typography>
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
    </Grow>
  )
}

export default Result
