import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen  h-[calc(100dvh)] flex-col items-center justify-between p-4 overflow-visible">
      <div className="fixed top-56 flex place-items-center lg:top-40">
        <Image
          className=" dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/stowarzyszenie_wszyscy_w_gory.jpeg"
          alt="Stowarzyszenie Wszyscy w góry"
          width={1000}
          height={537}
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 45vw"
        />
      </div>

      <div className="fixed top-8 left-0 flex h-48 w-full items-end justify-center  from-white via-white dark:from-black dark:via-black bg-gradient-to-b lg:top-6 lg:bg-gradient-to-b">
        <Image
          src="/wszyscy_w_gory_logo.png"
          alt="Wszyscy w góry logo"
          className="dark:invert"
          width={130}
          height={36}
          priority
        />
        <div className="absolute bottom-0 px-4 py-3">
          <p className="fixed left-0 top-0 flex w-full justify-center text-center border-b border-yellow-400 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit ">
            Strona w trakcie budowy.. zapraszamy niedługooo :)
          </p>
        </div>
      </div>
    </main>
  );
}
