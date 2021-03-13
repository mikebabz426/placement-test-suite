import * as React from "react"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import { Link } from "gatsby"
import { Container, Box, Typography, Fade } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import { useAuth0 } from "@auth0/auth0-react"
import Admin from "../components/Dashboard/Admin"
import LoginButton from "../components/LoginButton"
import LogoutButton from "../components/LogoutButton"
import Logo from "../components/Logo"

const AdminPage = () => {
  const classes = useStyles()
  const { isLoading, isAuthenticated, error, user } = useAuth0()

  isLoading ? (
    <Box>
      <Typography>Loading...</Typography>
    </Box>
  ) : null

  error ? (
    <Box>
      <Typography>Error: {error.message}</Typography>
    </Box>
  ) : null

  return (
    <>
      <Layout logo={false}>
        <SEO title="Admin Dashboard" />
        <Fade in timeout={700}>
          <Container maxWidth="lg" className={classes.root}>
            <Link to="/" className={classes.link}>
              <Logo />
            </Link>
            {isAuthenticated && user.email === "desislavadekova@yahoo.com" ? (
              <>
                <Admin name={user.name} />
              </>
            ) : (
              <Box className={classes.box}>
                <Typography>
                  To view this page, please log in with the correct account!
                </Typography>
                <LoginButton>Log In</LoginButton>
              </Box>
            )}
          </Container>
        </Fade>
      </Layout>
    </>
  )
}

//Custom Styling

const useStyles = makeStyles(theme => ({
  root: {
    padding: "3rem",
    margin: "auto",
  },
  box: {
    marginTop: 30,
    minHeight: 300,
    background: "rgba( 255, 255, 255, 0.45)",
    boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
    backdropFilter: " blur( 10.0px )",
    WebkitBackdropFilter: "blur(10.0px)",
    borderRadius: "10px",
    border: "1px solid rgba( 255, 255, 255, 0.18 )",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
    textAlign: "center",
    flexDirection: "column",
  },
  link: {
    textDecoration: "none",
    color: "#333",
  },
}))

export default AdminPage
