import Link from "next/link";
import { projects } from "@/app/interfaces/projectInfo";

export default function Page(){
  return (
    <div>
      <h2 className={"text-2xl"}>项目</h2>
      <p className={"text-gray-700"}>设计和功能完整的个人项目, 主要用于展示</p>
      <div className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div key={project.id} className="border-2 p-4 flex flex-col">
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