import * as React from "react"
import { Container, Typography } from "@material-ui/core"
import LogoutButton from "../components/LogoutButton"
import { makeStyles } from "@material-ui/core/styles"

const AdminHeader = ({ name }) => {
  const classes = useStyles()
  return (
    <Container maxWidth="lg" className={classes.container}>
      <Typography className={classes.welcome} variant="h6">
        Welcome, {name}!
      </Typography>
      <LogoutButton />
    </Container>
  )
}
const useStyles = makeStyles(theme => ({
  welcome: {
    margin: `2rem 0`,
  },
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
}))

export default AdminHeader
