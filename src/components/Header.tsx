import React from "react"
import { Container, AppBar, Toolbar, Box } from "@material-ui/core"
import { Link } from "gatsby"
import { makeStyles } from "@material-ui/core/styles"

const Header = ({ logo }) => {
  const classes = useStyles()

  return (
    <AppBar
      style={{ background: "linear-gradient(45deg, #ff80ab 30%, #ff5252 90%)" }}
    >
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

//Custom Styling

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

export default Header
