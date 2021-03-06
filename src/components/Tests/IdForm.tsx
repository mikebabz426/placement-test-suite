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

const IdForm = () => {
  const classes = useStyles()
  const [, setUser] = useNewUserContext()

  return (
    <Container className={classes.root}>
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
          <form onSubmit={handleSubmit} className={classes.form}>
            <Typography variant="h6" align="center" className={classes.head}>
              Before taking the test, please enter your first and last name.
            </Typography>
            <OutlinedInput
              className={classes.input}
              inputComponent="input"
              placeholder="First Name"
              fullWidth
              value={values.firstName}
              id="firstName"
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.firstName && touched.firstName ? (
              <Typography color="error">
                Please enter a valid first name!
              </Typography>
            ) : null}
            <OutlinedInput
              className={classes.input}
              inputComponent="input"
              placeholder="Last Name"
              fullWidth
              value={values.lastName}
              id="lastName"
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.lastName && touched.lastName ? (
              <Typography color="error">
                Please enter a valid last name!
              </Typography>
            ) : null}
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

//Custom Styles

const useStyles = makeStyles(theme => ({
  root: {
    margin: "auto",
  },
  head: {
    marginBottom: "3rem",
  },
  form: {
    backgroundColor: "#f4f4f4",
    minWidth: 200,
    padding: "3rem",
    borderRadius: "10px",
    [theme.breakpoints.down("sm")]: {
      padding: "1rem",
    },
  },

  field: {
    color: theme.palette.grey[50],
  },
  btn: {
    background: "linear-gradient(45deg, #f9c4ff 30%, #f289fe 90%)",
  },
  input: {
    margin: ".5rem auto",
  },
}))

export default IdForm
