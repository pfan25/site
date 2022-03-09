import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { FaTwitter } from 'react-icons/fa'
import dynamic from 'next/dynamic';

const Image = dynamic(()=>import('components/Image'))

export default function Header () {
  const router = useRouter()
  return (
    <div
      className="mx-auto w-4xl sm:w-8/12 xs:w-11/12 md:w-xl lg:w-2xl flex relative justify-between items-center mb-4 z-50 text-black"
      style={{ color: router.route.startsWith('/about') ? 'white' : '' }}
    >
      <div className="flex items-center py-4 xs:py-2">
        <Image className="w-4 h-4 mr-2" src="https://cdn.jsdelivr.net/gh/manonicu/pics@master/uPic/icons/terminal.svg" alt="Manon.icu" loading="lazy" width={16} height={16}/>
        <Link href="/">
          <a>Manon.Icu</a>
        </Link>
      </div>
      <div className="flex items-center py-4 xs:py-2">
        <Link href="/about">
          <a>About</a>
        </Link>
        <Link href="https://twitter.com/Manonicu">
          <a className="flex items-center justify-center rounded p-1.5 text-sm bg-sky-500 text-white ml-4">
            <FaTwitter className="mr-2" />
            Follow Me
          </a>
        </Link>
      </div>
    </div>
  )
}
