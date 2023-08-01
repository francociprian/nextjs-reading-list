import Link from 'next/link'
import { Metadata } from "next"
import UserAuthForm from '@/components/UserAuthForm';
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { ChevronLeft } from 'lucide-react'
import { FC } from 'react'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


export const metadata: Metadata = {
  title: "Sign In",
}

function CardContainer({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "flex items-center justify-center [&>div]:w-full",
        className
      )}
      {...props}
    />
  )
}

const page: FC = () => {
  return (
    <div className='absolute inset-0'>
      <div className='h-full max-w-2xl mx-auto flex flex-col items-center justify-center gap-10 px-2'>
        <Link
          href='/'
          className={cn(
            buttonVariants({ variant: 'subtle' }),
            'self-start text-lg'
          )}>
          <ChevronLeft className='mr-2 h-4 w-4' />
          Back to home
        </Link>
        <CardContainer>
          <Card className='py-8 px-4'>
            <CardHeader className="space-y-1">
              <CardTitle className="text-black dark:text-white text-center font-normal tracking-tighter text-3xl md:text-4xl lg:text-5xl min-w-[20vw]">
                Sign In
              </CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className='grid gap-2'>
                <UserAuthForm />
              </div>
            </CardContent>
          </Card>
        </CardContainer>
      </div>
    </div>
  )
}

export default page