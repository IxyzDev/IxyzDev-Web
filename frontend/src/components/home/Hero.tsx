import Image from 'next/image';

export default function Component() {
  return (
    <section className="flex  justify-center min-h-[100dvh] pt-14">
      <div className="container px-4 py-12 md:py-16 lg:py-18 mx-auto">
        <div className="grid items-center gap-6 text-center md:gap-8 lg:gap-10 xl:grid-cols-2 xl:gap-12 xl:text-left">
          <div className="space-y-4 text-black">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl xl:text-7xl">
              Welcome to my Portfolio
            </h1>
            <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Im a passionate and creative individual with a love for design and
              technology. My goal is to create beautiful and user-friendly
              experiences for the web.
            </p>
          </div>
          <div className="mx-auto flex items-center justify-center max-w-[200px] md:max-w-[400px]">
            <Image
              alt="Placeholder"
              className="rounded-full border overflow-hidden object-cover object-center"
              height="400"
              width="400"
              src="/placeholder.svg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
