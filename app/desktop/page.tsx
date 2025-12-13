import { GithubIcon } from "@/components/icons/github";
import { SearchIcon } from "@/components/icons/search";
import { VisualStudioCodeIcon } from "@/components/icons/vscode";
import { WindowsIcon } from "@/components/icons/windows";
import { cn } from "@/lib/utils";
import Image from "next/image";

const menuItems = [
    {
        name: 'Windows',
        href: '#',
        icon: WindowsIcon,
        className: '',
    },
    {
        name: 'Search',
        href: '#',
        icon: SearchIcon,
        className: 'text-gray-500 size-6',
    },
    {
        name: 'GitHub',
        href: '#',
        icon: GithubIcon,
        className: 'text-gray-600 size-7',
    },
    {
        name: 'VS Code',
        href: '#',
        icon: VisualStudioCodeIcon,
        className: 'text-blue-500 size-7 mt-0.5',
    },
];


export default function HomePage() {
    return (
        <main className="min-h-screen relative bg-linear-to-b from-amber-50 to-amber-100 text-center">
            <Image src="/angkor-wat-cambodia.jpg" alt="Background" fill className="absolute pointer-events-none  inset-0 object-cover" />
            <footer className="fixed bottom-0 inset-x-0 border-t backdrop-blur-sm border-black/5 bg-white/90">
                <ul className="flex w-full max-w-3xl mx-auto justify-center py-1.5 gap-1">
                    {menuItems.map((item) => (
                        <li key={item.name}>
                            <a href={item.href} className="relative flex items-center justify-center size-9 rounded-lg hover:bg-white hover:shadow-lg duration-400 shadow-black/10 transition-colors">
                                <item.icon className={cn('size-7 text-gray-600', item.className )} />
                            </a>
                        </li>
                    ))}
                </ul>
            </footer>
        </main>
    );
}