import Link from "next/link";
import { projects } from "@/app/interfaces/projectInfo";

export default function Page(){
  return (
    <div className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <div className="border-2 p-4">
          <p className="mb-2">
            <Link
              href={project.projectUrl}
              target="_blank"
              className="text-2xl underline"
            >{project.name}</Link>
          </p>
          <p className="mb-2">{project.description}</p>
          <p className="mb-2 text-sm">{project.keywords}</p>
          <Link href={project.code} target="_blank" className="underline">Code</Link>
          <span className="float-end">{project.date}</span>
        </div>
      ))}
    </div>
  );
}