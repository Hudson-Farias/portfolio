import Link from "next/link";

import { IconComponent } from "@/icons";
import { SocialNetworkI } from "@/interfaces/social-networks";

const menuItems = [
  { name: "Home", href: "/" },
  { name: "Skills", href: "/#skills" },
  { name: "Projetos", href: "/#projects" },
];

export function Nav({ socialNetworks }: { socialNetworks: SocialNetworkI[] }) {
  return (
    <header>
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <ul className="hidden space-x-6 sm:flex">
          {menuItems.map((item) => (
            <li key={item.name}>
              <Link href={item.href}>
                <span className="relative cursor-pointer group">
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-slate-500 transition-all duration-300 ease-in-out group-hover:w-full" />
                </span>
              </Link>
            </li>
          ))}

          <li>
            <a href="/admin/">Admin</a>
          </li>

        </ul>

        <div className="flex gap-3">
          {socialNetworks.map((socialNetwork, index) => (
            <Link href={socialNetwork.url} target="_blank" key={`header-social-network-${index}`}>
              <IconComponent iconName={socialNetwork.icon} className="cursor-pointer hover:text-slate-500 h-5 w-5 hidden sm:block"/>
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
