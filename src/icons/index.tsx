import { IconType } from "react-icons";

import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaGitlab } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";


const icons = {
  linkedin: FaLinkedin,
  github: FaGithub,
  gitlab: FaGitlab,
  twitter: FaXTwitter,
  instagram: FaInstagram,
  whatsapp: FaWhatsapp,
  email: IoMdMail,
}


interface IconComponentPropsI extends React.ComponentPropsWithoutRef<IconType> {
  iconName: keyof typeof icons
}


export function IconComponent({ iconName, ...props }: IconComponentPropsI) {
  const Icon = icons[iconName]
  return <Icon {...props} />
}
