"use client";

import React from 'react'
import Link from 'next/link';
import { useSession } from 'next-auth/react';

const LoginButton = () => {
  const {status, data:session} = useSession();

  return (
    <>
    {status === "loading" && <li><div>Loading...</div></li>}
    {status === "authenticated" && 
    <>
        <li><div>{session.user!.name}</div></li>
        <li><Link href="/api/auth/signout">Sing Out</Link></li>
    </>  
    }
    {status === "unauthenticated" && <li><Link href="/api/auth/signin">Login</Link></li>}
    </>
  )
}

export default LoginButton