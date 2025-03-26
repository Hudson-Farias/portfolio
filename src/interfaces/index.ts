import { skillIcons } from "@/icons/skills";

export interface SkillI {
    id: number
    name: string
    icon: keyof typeof skillIcons
}


export interface SkillsI {
    title: string
    skills: SkillI[]
}

export interface ExperienceI {
    id: number
    company: string
    period: string
    role: string
    description: string
}


export interface ProjectI {
    id: number
    name: string
    description: string
    image_url: string
    homepage?: string
    html_url?: string
}



export interface ResponseI {
    skills: SkillsI[]
    experiences: ExperienceI[]
    projects: ProjectI[]
}
