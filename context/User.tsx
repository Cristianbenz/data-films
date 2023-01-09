import { createContext, ReactNode, useEffect, useState } from 'react'
import { Cookies } from 'react-cookie'
import { jwtVerify } from 'jose'

export const userContext = createContext<any>({})

function UserContextProvider({ children }: { children: ReactNode }) {
  const [token, setToken] = useState<string | undefined>(undefined)
  const cookies = new Cookies()

  function signInUser(token: string) {
    setToken(token)
  }

  function signOutUser() {
    setToken(undefined)
  }

  useEffect(() => {
    const token = cookies.get('authToken')
    token && jwtVerify(token, new TextEncoder().encode(process.env.NEXT_PUBLIC_JWT_SECRET))
      .then(res => {
        if (res) {
          setToken(token)
        }
      })
  }, [])

  return (
    <userContext.Provider value={{
      token,
      signInUser,
      signOutUser
    }}>
      {children}
    </userContext.Provider>
  )
}

export default UserContextProvider