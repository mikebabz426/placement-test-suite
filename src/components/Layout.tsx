import React from "react"
import { CssBaseline } from "@material-ui/core"
import PropTypes from "prop-types"
import "@fontsource/roboto"
import GlobalThemeProvider from "../GlobalThemeProvider"
import { makeStyles } from "@material-ui/core/styles"
import BackgroundImage from "gatsby-background-image"
import { useStaticQuery, graphql } from "gatsby"

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

//Custom Styling

const useStyles = makeStyles(theme => ({
  root: {
    padding: 0,
    margin: 0,
    width: "100vw",
    minHeight: "100vh",
  },
}))

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
