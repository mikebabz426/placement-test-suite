import * as React from "react"
import { useState } from "react"
import { Container, Typography, Button, OutlinedInput } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import * as Yup from "yup"

import { useNewUserContext } from "../../UserContext"

//Form Validation:

let userSchema = Yup.object().shape({
  firstName: Yup.string().required().min(3),
  lastName: Yup.string().required().min(3),
})

//Custom Styles

const useStyles = makeStyles(theme => ({
  root: {
    padding: "3rem",
    margin: "auto",
  },
  field: {
    color: theme.palette.grey[50],
  },
  btn: {
    background: "linear-gradient(45deg, #f9c4ff 30%, #f289fe 90%)",
  },
}))

const IdForm = () => {
  const classes = useStyles()
  const [first, setFirst] = useState()
  const [last, setLast] = useState()
  const [, setUser] = useNewUserContext()

  const handleFirstNameChange = event => setFirst(event.target.value)
  const handleLastNameChange = event => setLast(event.target.value)

  const handleClick = () => {
    setUser(prevSt => ({
      ...prevSt,
      firstName: first,
      lastName: last,
    }))
  }

  return (
    <Container>
      <Typography variant="body1">
        Please enter your first and last name.
      </Typography>

      <OutlinedInput
        inputComponent="input"
        placeholder="First Name"
        fullWidth
        value={first}
        id="firstName"
        onChange={handleFirstNameChange}
      />
      <OutlinedInput
        inputComponent="input"
        placeholder="Last Name"
        fullWidth
        value={last}
        id="lastName"
        onChange={handleLastNameChange}
      />
      <Button
        style={{ marginTop: "2rem" }}
        type="submit"
        fullWidth
        variant="contained"
        className={classes.btn}
        onClick={handleClick}
      >
        Confirm
      </Button>
    </Container>
  )
}

export default IdForm
