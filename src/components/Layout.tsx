import React from "react"
import { CssBaseline, Container } from "@material-ui/core"
import PropTypes from "prop-types"
import "@fontsource/roboto"
import GlobalThemeProvider from "../GlobalThemeProvider"
import { makeStyles } from "@material-ui/core/styles"
import BackgroundImage from "gatsby-background-image"
import { useStaticQuery, graphql } from "gatsby"

const useStyles = makeStyles(theme => ({
  root: {
    padding: 0,
    margin: 0,
    width: "100vw",
    height: "100vh",
  },
}))
const Layout = ({ children, logo }) => {
  const classes = useStyles()
  const data = useStaticQuery(graphql`
    {
      background: file(relativePath: { eq: "background.png" }) {
        childImageSharp {
          fluid(pngQuality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const source = data.background.childImageSharp.fluid
  console.log(source)

  return (
    <GlobalThemeProvider>
      <CssBaseline>
        <BackgroundImage className={classes.root} fluid={source}>
          {children}
        </BackgroundImage>
      </CssBaseline>
    </GlobalThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
