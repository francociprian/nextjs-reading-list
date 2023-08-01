import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { BookMarked } from 'lucide-react';
import { getAuthSession } from "@/lib/auth";
import { AccountNav } from "./AccountNav";
const Navbar = async () => {
  const session = await getAuthSession()

  return (
    <div className='fixed top-0 inset-x-0 h-fit bg-zinc-100 border-b border-zinc-300 z-[10] py-2'>
      <div className='container max-w-7xl h-full mx-auto flex items-center justify-between gap-2'>
        {/* logo */}
        <Link href='/' className='flex gap-2 items-center'>
          <BookMarked className='h-8 w-8 sm:h-6 sm:w-6' />
          <p className='hidden text-zinc-700 text-base md:block'>
            <span className="font-extralight">good</span>
            <span className="font-medium">reads</span>
          </p>
        </Link>

        {session?.user ? (
          <AccountNav user={session.user}/>
        ) : (
          <Link href='/sign-in' className={buttonVariants()}>
            Sign In
          </Link>
        )}
      </div>
    </div>
  )
}

export default Navbar