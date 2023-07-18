'use client'

import Image from "next/legacy/image"
import { useRouter } from "next/navigation"

const Logo = () => {
    const router = useRouter();
    return (
        <div className="hidden md:flex cursor-pointer ">
            <Image
            onClick={()=> router.push('/')}
            alt="Logo"
            width={102}
            height={31.88}
            className="hidden md:block cursor-pointer"
            src="/images/logo.png"/>
        </div>
        
      );
}
 
export default Logo;