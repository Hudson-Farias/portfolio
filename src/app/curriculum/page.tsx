'use client'

import { Curriculum, DownloadCurriculum } from "./resume";

export default function curriculum() {
  return (
    <div className="justify-center items-center flex flex-col gap-5">
      <h1 className="text-4xl text-center">Meu Currículo</h1>
      <DownloadCurriculum />
      <Curriculum />
    </div>
  );
}
