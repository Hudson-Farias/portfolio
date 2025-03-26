'use client'

import Link from "next/link";
import { motion } from "motion/react";

import { ResponseI } from "@/interfaces";

import Experience from "@/components/experience";
import Projects from "@/components/projects";
import Skills from "@/components/skills";

export function IndexClient({data}: {data: ResponseI}) {

  return (
    <div className="flex flex-col min-h-screen w-full">
      {/* background */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
        <div className="absolute right-0 top-0 h-[500px] w-[500px] bg-blue-500/10 blur-[100px]" />
        <div className="absolute bottom-0 left-0 h-[500px] w-[500px] bg-slate-500/10 blur-[100px]" />
      </div>

      <div className="flex flex-col min-h-[100dvh] z-10">
        <section
          id="hero"
          className="h-screen flex flex-col items-center justify-center gap-16 py-20"
        >
          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-6xl">Hello World.</h1>
                <h1 className="text-4xl">
                  I'm{" "}
                  <span className="font-bold bg-gradient-to-r from-blue-500 to-slate-500 bg-clip-text text-transparent">
                    Hudson.
                  </span>
                </h1>
              </motion.div>

              <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
                <span className="text-slate-400">
                  Software Engineer | DevOps
                </span>
                <p className="text-slate-400 w-96 mt-4">
                  Um <b>Software Engineer</b> com foco no <b>Back-End</b>.
                  Busco sempre desenvolver soluções simples e otimizadas, garantindo eficiência e qualidade nas implementações. Você pode
                    conferir meu{" "}
                    <Link href={"/curriculum"}>
                      <span className="relative bg-gradient-to-r from-blue-300 to-slate-500 bg-clip-text text-transparent cursor-pointer group">
                        curriculo aqui.
                        <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-blue-300 to-slate-500 transition-all duration-300 ease-in-out group-hover:w-full" />
                      </span>
                    </Link>
                </p>
              </motion.div>
            </div>

            <motion.img
              src="/profile.jpeg"
              className="rounded-full"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            />
          </div>

          {/* elemento decorativo */}
          <motion.div
            className="p-20 hidden flex-col items-center sm:block"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            <div className="w-1 h-12 bg-gradient-to-b from-blue-600 to-slate-600 dark:from-blue-400 dark:to-slate-400 rounded-full animate-pulse"></div>
          </motion.div>
        </section>

        <motion.section
          id="skills"
          className=" flex flex-col items-center justify-center gap-10"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h1 className="text-4xl text-center">Habilidades e experiência</h1>

          <div className="flex flex-col gap-28">
            <Skills skills={data.skills} />

            <Experience experiences={data.experiences} />
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          id="projects"
          className="mt-20 flex flex-col items-center justify-center"
        >
          <Projects projects={data.projects} />
        </motion.section>
      </div>
    </div>
  );
}
