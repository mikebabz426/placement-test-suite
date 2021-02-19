import * as React from "react"
import { Box, Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  results: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  field: {
    margin: ".5rem",
  },
  scoreField: {
    margin: ".5rem .5rem .5rem 3rem",
  },
}))
const Score = ({ firstName, lastName, score, id }) => {
  const classes = useStyles()
  return (
    <Box className={classes.results}>
      <Typography className={classes.field} variant="h6">
        {firstName}
      </Typography>
      <Typography className={classes.field} variant="h6">
        {lastName}
      </Typography>
      <Typography className={classes.scoreField} variant="h6">
        {score}
      </Typography>
    </Box>
  )
}

export default Score
