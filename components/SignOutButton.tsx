import Router from "next/router";
import axios from "axios";
import { userContext } from "../context/User";
import { useContext } from 'react'

function SignOutButton() {
  const { signOutUser } = useContext(userContext)
  const { push } = Router;

  function handleClick() {
    axios("/api/auth/signout")
      .then(() => {
        push('/auth/signin')
        .then(() => signOutUser())
        
      })
      .catch(() => {
        push('/auth/signin')
        .then(() => signOutUser())
      });
  }

  return (
    <p className="cursor-pointer" onClick={handleClick}>Sign Out</p>
  )
}

export default SignOutButton