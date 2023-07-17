'use client'

import Image from "next/legacy/image"
import { useRouter } from "next/navigation"

const Logo = () => {
    const router = useRouter();
    return (
        <Image
            onClick={()=> router.push('/')}
            alt="Logo"
            width={102}
            height={40}
            className="hidden md:block cursor-pointer"
            src="/images/logo.png"/>
      );
}
 
export default Logo;