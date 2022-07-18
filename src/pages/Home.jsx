import { signOut } from 'firebase/auth'
import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useNavigate } from 'react-router-dom'
import { auth } from '../config/firebase'

export default function Home() {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const handleOnclick = async () => {
    try{
      await signOut(auth)
      navigate('/login')
    }catch(error){
      console.log(error.message)
    }
  }
  return (
    <>
    <div>Home</div>
    <span>User : </span>{user?.email}
    <button onClick={handleOnclick}>Logout</button>
    </>

  )
}
