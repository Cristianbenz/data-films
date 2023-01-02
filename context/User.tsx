import { createContext, ReactNode, useState } from 'react'

export const userContext = createContext<any>({})

function UserContextProvider({children}: {children: ReactNode}) {
  const [token, setToken] = useState<string | undefined>(undefined)

  function signUser(token: string) {
    setToken(token)
  }

  return (
  <userContext.Provider value={{
    token,
    signUser
  }}>
    {children}
  </userContext.Provider>
  )
}

export default UserContextProvider