import * as React from "react"
import { useAuth0 } from "@auth0/auth0-react"
import { Button } from "@material-ui/core"

const LoginButton: React.FC = () => {
  const { loginWithRedirect } = useAuth0()

  return (
    <Button
      variant="contained"
      style={{
        background: "linear-gradient(45deg, #f9c4ff 30%, #f289fe 90%)",
      }}
      onClick={() => loginWithRedirect()}
    >
      Log In
    </Button>
  )
}

export default LoginButton
