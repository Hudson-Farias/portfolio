import { IconType } from "react-icons";

import { IoLogoPython as Python } from "react-icons/io";
import { DiMongodb as MongoDB, DiRedis as Redis } from "react-icons/di";
import { FaReact as React } from "react-icons/fa";
import { SiTypescript as Typescript, SiNextdotjs as NextJs, SiNginx as Nginx, SiSwagger as Swagger, SiPostman as Postman, SiDbeaver as Dbeaver } from "react-icons/si";
import { RiTailwindCssFill as Tailwind, RiPhpLine as Php } from "react-icons/ri";
import { GrMysql as Sql } from "react-icons/gr";
import { FaGitAlt as Git, FaDocker as Docker, FaCloud as CloudCog } from "react-icons/fa";
import { VscVscode as VsCode } from "react-icons/vsc";


export const skillIcons = {
    python: Python,
    php: Php,
    sql: Sql,
    mongo: MongoDB,
    redis: Redis,
    typeScript: Typescript,
    nextjs: NextJs,
    react: React,
    tailwind: Tailwind,
    docker: Docker,
    cloud: CloudCog,
    nginx: Nginx,
    git: Git,
    code: VsCode,
    swagger: Swagger,
    postman: Postman,
    dbeaver: Dbeaver,
}

interface IconComponentPropsI extends React.ComponentPropsWithoutRef<IconType> {
  iconName: keyof typeof skillIcons
}


export function IconComponent({ iconName, ...props }: IconComponentPropsI) {
  const Icon = skillIcons[iconName]
  return <Icon {...props} />
}
