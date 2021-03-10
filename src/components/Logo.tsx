import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"
import { Box, Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

const Logo = () => {
  const classes = useStyles()
  const data = useStaticQuery(graphql`
    {
      logo: file(relativePath: { eq: "icon.png" }) {
        childImageSharp {
          fluid(pngQuality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Box className={classes.root}>
      <Image fluid={data.logo.childImageSharp.fluid} className={classes.img} />
      <Typography variant="h5">
        Lucky Charm <Typography variant="body2">English Academy</Typography>
      </Typography>
    </Box>
  )
}

//Custom Styling

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    maxHeight: 80,
    maxWidth: 200,
  },
  img: {
    width: 80,
    height: 80,
  },
}))

export default Logo
