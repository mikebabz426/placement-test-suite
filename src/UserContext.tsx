import React from "react"
import {
  useState,
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
} from "react"

const initialState = {
  firstName: "",
  lastName: "",
  score: 0,
}

type ContextType = { firstName: string; lastName: string; score: number }

const UserContext = createContext<
  [ContextType, Dispatch<SetStateAction<ContextType>>] | undefined
>(undefined)

export const useNewUserContext = () => {
  const context = useContext(UserContext)
  if (context === undefined) {
    throw new Error("useNewUserContext must be used within a Context Provider")
  }
  return context
}

export const UserProvider: React.FC = props => {
  const [user, setUser] = useState(initialState)

  return (
    <UserContext.Provider value={[user, setUser]}>
      {props.children}
    </UserContext.Provider>
  )
}
