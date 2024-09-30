import Welcome from "@/content/welcome.mdx";
// Home page
export default function Page() {
  return (
    <div className="flex h-screen flex-row items-start bg-green-300 pt-16">
      <div className="w-full rounded-md bg-zinc-800/50 px-6 py-16 text-white md:ml-16 md:mt-4 md:w-1/3">
        <Welcome />
      </div>
      <div
        className="hidden h-full flex-grow flex-col space-x-8 space-x-reverse p-16 text-3xl [writing-mode:vertical-rl] md:flex">
        <p>核心能力 - 前端交互开发</p>
        <p>创新能力 - 跨领域的知识体系</p>
        <p>成长中 - 两年</p>
        <p>广泛的兴趣</p>
        <p>持续的学习</p>
        <p>长期的目标</p>
        <p>及时的反馈</p>
        <p>拥抱不确定性</p>
        <p>...</p>
      </div>
    </div>
  );
}
