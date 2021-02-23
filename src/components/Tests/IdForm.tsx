import * as React from "react"
import { Container, Typography, Button, OutlinedInput } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import { Formik } from "formik"
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
  const [, setUser] = useNewUserContext()

  return (
    <Container>
      <Typography variant="body1">
        Please enter your first and last name.
      </Typography>
      <Formik
        initialValues={{ firstName: "", lastName: "" }}
        validationSchema={userSchema}
        onSubmit={(values, { setSubmitting }) => {
          setSubmitting(true)
          setUser(prevSt => ({
            ...prevSt,
            firstName: values.firstName,
            lastName: values.lastName,
          }))
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <form onSubmit={handleSubmit}>
            <OutlinedInput
              inputComponent="input"
              placeholder="First Name"
              fullWidth
              value={values.firstName}
              id="firstName"
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.firstName && touched.firstName && errors.firstName}
            <OutlinedInput
              inputComponent="input"
              placeholder="Last Name"
              fullWidth
              value={values.lastName}
              id="lastName"
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.lastName && touched.lastName && errors.lastName}
            <Button
              style={{ marginTop: "2rem" }}
              type="submit"
              fullWidth
              variant="contained"
              className={classes.btn}
              disabled={isSubmitting}
            >
              Confirm
            </Button>
          </form>
        )}
      </Formik>
    </Container>
  )
}

export default IdForm
