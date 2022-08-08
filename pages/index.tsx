import React from 'react'
import Link from 'next/link'

function Home() {
  return (
    <>
    <div>Welcome to the Home Page</div>
    <Link href= {"/login"}>
     <button>Go Back To Login</button>
     </Link>
    </>
  )
}
export default Home
