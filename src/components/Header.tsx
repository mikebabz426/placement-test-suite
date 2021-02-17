import React from "react"
import { Container, AppBar, Toolbar, Box, Typography } from "@material-ui/core"
import { Link } from "gatsby"
import { makeStyles, fade } from "@material-ui/core/styles"
import SearchIcon from "@material-ui/icons/Search"
import InputBase from "@material-ui/core/InputBase"

const useStyles = makeStyles(theme => ({
  root: {
    justifyContent: "space-between",
  },
  container: {
    display: "flex",
    alignItems: "center",
  },
  navContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  logoStyle: {
    maxHeight: "40px",
    maxWidth: "170px",
  },
}))

const Header = ({ logo }) => {
  const classes = useStyles()

  return (
    <AppBar>
      <Toolbar className={classes.root}>
        <Container maxWidth="lg" className={classes.navContainer}>
          <Box className={classes.container}>
            {logo ? (
              <Link
                to="/"
                style={{
                  textDecoration: `none`,
                }}
              >
                Logo Here
              </Link>
            ) : null}
          </Box>
        </Container>
      </Toolbar>
    </AppBar>
  )
}

export default Header
