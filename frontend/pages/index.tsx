import type { NextPage } from 'next'
import React, { useEffect } from 'react'
import { useRouter } from 'next/router'

const Home: NextPage = () => {
  const router = useRouter()

  useEffect(() => {
    if (router.asPath === '/') {
      router.push('/Signin')
    }
  }, [router.asPath])

  return (
    <>
    </>
  )
}

export default Home
