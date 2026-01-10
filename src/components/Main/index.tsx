import Image from 'next/image'

const Main = ({
  title = 'next-starter',
  description = 'TypeScript, ReactJS, NextJS e Tailwind CSS'
}) => (
  <main className="flex min-h-screen flex-col items-center justify-center bg-[#06092b] p-12 text-center text-white">
    <Image
      src="/img/next-boilerplate-logo-white.svg"
      alt="Imagem de um Caldeirão com liquido roxo com texto ao lado Next Boilerplate"
      className="mb-8 w-[25rem]"
      width={400}
      height={400}
    />
    <h1 className="text-4xl font-bold">{title}</h1>
    <h2 className="text-2xl font-normal">{description}</h2>
  </main>
)

export default Main
