import * as React from "react"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import { Container } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  root: {
    padding: "3rem",
    margin: "10rem auto",
  },
}))

const AdminPage = () => {
  const classes = useStyles()

  return (
    <>
      <Layout logo={false}>
        <SEO title="Admin Dashboard" />
        <Container maxWidth="lg" className={classes.root}>
          Admin Dashboard
        </Container>
      </Layout>
    </>
  )
}

export default AdminPage
