import * as React from "react"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import { Container, Button, Box, Fade } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import { Link } from "gatsby"
import Student from "../assets/student.svg"
import Teacher from "../assets/teacher.svg"
import Logo from "../components/Logo"

const IndexPage = () => {
  const classes = useStyles()

  return (
    <>
      <Layout logo={false}>
        <SEO title="Home" />
        <Fade in timeout={700}>
          <Container maxWidth="lg" className={classes.root}>
            <Logo />
            <Box className={classes.box}>
              <Box className={classes.item}>
                <Teacher className={classes.student} />
                <Link to="dashboard" className={classes.link}>
                  <Button
                    variant="contained"
                    style={{
                      background:
                        "linear-gradient(45deg, #f9c4ff 30%, #f289fe 90%)",
                    }}
                  >
                    Admin Dashboard
                  </Button>
                </Link>
              </Box>
              <Box className={classes.item}>
                <Student className={classes.student} />
                <Link to="testing" className={classes.link}>
                  <Button
                    variant="contained"
                    style={{
                      background:
                        "linear-gradient(45deg, #f9c4ff 30%, #f289fe 90%)",
                    }}
                  >
                    Student Testing
                  </Button>
                </Link>
              </Box>
            </Box>
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
  link: {
    textDecoration: "none",
    color: "#333",
    fontWeight: 600,
  },
  box: {
    marginTop: 80,
    minHeight: 300,
    maxHeight: 500,
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
  },
  item: {
    maxHeight: 500,
    maxWidth: 350,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(255,255,255, 0)",
  },
  student: {
    maxWidth: 150,
    maxHeight: 150,
  },
}))

export default IndexPage
