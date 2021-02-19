import * as React from "react"
import { Container, Typography, Button, TextField } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import * as Yup from "yup"
import { Formik, Form, Field } from "formik"
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
  const [, setUser] = useNewUserContext()
  return (
    <Container>
      <Typography variant="body1">
        Please enter your first and last name.
      </Typography>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
        }}
        validationSchema={userSchema}
        onSubmit={(values, actions) => {
          setUser(user => ({
            ...user,
            firstName: values.firstName,
            lastName: values.lastName,
          }))
          actions.resetForm()
        }}
      >
        {({ errors, touched }) => {
          return (
            <Form name="userInfo">
              <Field
                className={classes.field}
                name="firstName"
                type="input"
                variant="outlined"
                margin="normal"
                label="First Name"
                required
                fullWidth
                as={TextField}
              />
              {errors.firstName && touched.firstName ? (
                <Typography color="error">
                  Please enter a valid first name.
                </Typography>
              ) : null}
              <Field
                className={classes.field}
                name="lastName"
                type="input"
                variant="outlined"
                margin="normal"
                label="Last Name"
                required
                fullWidth
                as={TextField}
              />
              {errors.lastName && touched.lastName ? (
                <Typography color="error">
                  Please enter a valid first name.
                </Typography>
              ) : null}

              <Button
                style={{ marginTop: "2rem" }}
                type="submit"
                fullWidth
                variant="contained"
                className={classes.btn}
              >
                Confirm
              </Button>
            </Form>
          )
        }}
      </Formik>
    </Container>
  )
}

export default IdForm
