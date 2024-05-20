import Welcome from "@/content/welcome.mdx";
// Home page
export default function Page() {
  return (
    <div className="flex h-screen pt-16 flex-row items-start bg-green-300">
      <div className="w-full rounded-md bg-zinc-800/50 px-6 py-16 text-white md:ml-16 md:mt-4 md:w-1/3">
        <Welcome />
      </div>
      <div className="hidden h-full flex-grow flex-col space-x-reverse space-x-8 p-16 text-3xl [writing-mode:vertical-rl] md:flex">
        <p>Looking for a job</p>
        <p>求職中</p>
        <p>求职中</p>
        <p>仕事を探している</p>
        <p>일자리를 찾고</p>
        <p>Ищу работу</p>
        <p>🏬🚶💻🤝👌</p>
        <p>...</p>
      </div>
    </div>
  );
}
