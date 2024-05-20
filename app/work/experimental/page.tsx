import Link from "next/link";
import { experimental } from "@/app/interfaces/projectInfo";

// work/experimental
export default function Page(){
  return (
    <div>
      <h2 className={"text-2xl"}>实验</h2>
      <p className={"text-gray-700"}>目的单一的功能测试项目, 以代码为主</p>
      <div className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
        {experimental.map((project) => (
          <div key={project.id} className="border-4 border-dotted p-4 flex flex-col">
            <p className="mb-2">
              <Link
                href={project.projectUrl}
                target="_blank"
                className="text-2xl underline"
              >{project.name}</Link>
            </p>
            <p className="mb-2 grow whitespace-pre-line">{project.description}</p>
            <p className="mb-2 text-sm">{project.keywords}</p>
            <div>
              <Link href={project.code} target="_blank" className="underline">Code</Link>
              <span className="float-end">{project.date}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}