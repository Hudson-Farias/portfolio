'use client'

import { Page, Text, View, Document, StyleSheet, Link } from '@react-pdf/renderer'

import { Download } from "lucide-react";

import dynamic from "next/dynamic";

const PDFViewer = dynamic(() => import("@react-pdf/renderer").then(mod => mod.PDFViewer), {
  ssr: false,
});

const PDFDownloadLink = dynamic(() => import("@react-pdf/renderer").then(mod => mod.PDFDownloadLink), {
  ssr: false,
});


const headerStyles = StyleSheet.create({
  container: { paddingHorizontal: 30, alignItems: 'center', gap: 7, borderBottom: 1 },
  name: { fontSize: 36, fontWeight: 'bold' },
  role: { fontSize: 15, fontWeight: 'semibold', fontStyle: 'italic' },

  linkContainer: { alignItems: 'center', paddingBottom: 20, gap: 6 },
  linkSubcontainer: { display: 'flex', flexDirection: 'row', gap: 10 },
  link: { color: '000' },
})

const styles = StyleSheet.create({
  section: { paddingHorizontal: 30, marginTop: 30 },
  header: { fontSize: 20, fontWeight: 'bold', marginBottom: 10 },
  text: { fontSize: 10 },
  experience: { fontSize: 14, fontWeight: 'bold', marginBottom: 7 },
  experienceRole: { fontSize: 12, fontWeight: 'bold', fontStyle: 'italic', marginBottom: 7 },
  test: { fontSize: 16, position: 'absolute', display: 'flex', bottom: 16, width: 540, alignItems: 'center' },
})

const Resume = () => (
  <Document>
    <Page size="A4" style={{ padding: 30 }}>

      <View style={headerStyles.container}>
        <Text style={headerStyles.name}>Hudson Farias</Text>
        <Text style={headerStyles.role}>Software Engineer | Devops</Text>

        <View style={headerStyles.linkContainer}>
          <Link src='https://hudsondev.tech' style={headerStyles.link}>https://hudsondev.tech</Link>

          <View style={headerStyles.linkSubcontainer}>
            <Link src='https://www.linkedin.com/in/hudsonfarias/' style={headerStyles.link}>linkedin</Link>
            <Text>|</Text>
            <Link src='https://github.com/Hudson-Farias' style={headerStyles.link}>github</Link>
            <Text>|</Text>
            <Link src='https://gitlab.com/hudsonfarias' style={headerStyles.link}>gitlab</Link>
          </View>

          <Link src='mailto:hudson.farias.dev@gmail.com' style={headerStyles.link}>hudson.farias.dev@gmail.com</Link>
        </View>

      </View>

      <View style={styles.section}>
        <Text style={styles.header}>Objetivo</Text>
        <Text style={styles.text}>Atuar como Desenvolvedor Backend e DevOps, focando em soluções escaláveis, seguras e eficientes, aplicando boas práticas e inovação no desenvolvimento de sistemas.</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.header}>Experiência Profissional</Text>
        <Text style={styles.experience}>HUBFY | JUN 2022 - MAR 2025</Text>
        <Text style={styles.experienceRole}>Tech Leader - Fullstack Engineer</Text>

        <Text style={styles.text}>Atuando como Fullstack Engineer Pleno e Tech Leader, mantendo aplicações legadas em Laravel e Slim, além de arquitetar e codificar novas soluções em Next.js, React e FastAPI.</Text>

        <Text style={styles.text}>- Desenvolvimento de um fluxo de checkout completo e personalizado.</Text>
        <Text style={styles.text}>- Definição e implementação da arquitetura multi-tenant.</Text>
        <Text style={styles.text}>- Liderança técnica e suporte à equipe no desenvolvimento de novas funcionalidades.</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.header}>Hard Skills</Text>
        <Text style={styles.text}>Python: FastAPI, Playwright, Automação Web, Crawlers</Text>
        <Text style={styles.text}>Typescript: Next.js, React.js, TailwindCSS, ShadCN</Text>
        <Text style={styles.text}>PHP: Laravel, Slim</Text>
        <Text style={styles.text}>Outros: Linux, Docker, SQL, NoSQL, Nginx, CI/CD</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.header}>Soft Skills</Text>
        <Text style={styles.text}>Adaptabilidade</Text>
        <Text style={styles.text}>Pensamento crítico</Text>
        <Text style={styles.text}>Trabalho em equipe</Text>
        <Text style={styles.text}>Gestão do tempo</Text>
        <Text style={styles.text}>Aprendizado contínuo</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.header}>Idiomas</Text>
        <Text style={styles.text}>Português (nativo)</Text>
        <Text style={styles.text}>Inglês técnico</Text>
      </View>

      <View style={styles.test}>
        <Link src='https://hudsondev.tech' style={headerStyles.link}>https://hudsondev.tech</Link>
      </View>

    </Page>
  </Document>
)

export function Curriculum() {
  return (
    <PDFViewer showToolbar={false} width="595" height="842">
      <Resume />
    </PDFViewer>
  )
}


export function DownloadCurriculum() {
  return (
    <PDFDownloadLink document={<Resume />} fileName="hudson-farias-resume.pdf">
      <div className="inline-flex bg-gradient-to-r from-blue-500 to-slate-500 gap-2 items-center px-4 py-2 text-sm font-medium text-foreground rounded-md transition-transform duration-300 transform hover:scale-105 hover:-translate-y-1">
        <Download />  Baixar Currículo
      </div>
    </PDFDownloadLink>
  )
}

