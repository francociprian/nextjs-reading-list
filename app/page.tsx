export default function Home() {
  return (
    <main className="container min-h-screen mx-auto">
      <div className="flex flex-col md:flex-row justify-center items-center gap-4 h-screen min-w-[55vw] ms-auto me-auto">
        <p className="font-semibold text-[5rem] md:text-[8rem] tracking-[-.07em]">
          Template Nextjs
        </p>

        <div>
          <p className="text-[2rem] md:text-[3rem] font-normal tracking-[-.09em] leading-none">
            Created by
          </p>
          <p className="text-[2rem] md:text-[3rem] font-normal tracking-[-.09em] leading-none">
            Franco Ciprian
          </p>
        </div>
      </div>
    </main>
  )
}
