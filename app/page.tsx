'use client';
import { GithubIcon } from "@/components/icons/github";
import { SearchIcon } from "@/components/icons/search";
import { VisualStudioCodeIcon } from "@/components/icons/vscode";
import { WindowsIcon } from "@/components/icons/windows";
import Image from "next/image";
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { LoaderIcon } from "lucide-react";

const menuItems = [
    {
        name: 'Windows',
        href: '#',
        icon: WindowsIcon,
        className: 'max-sm:size-4 size-7',
    },
    {
        name: 'Search',
        href: '#',
        icon: SearchIcon,
        className: 'max-sm:size-4 text-gray-500 size-6',
    },
    {
        name: 'GitHub',
        href: '#',
        icon: GithubIcon,
        className: 'max-sm:size-4 text-gray-600 size-7',
    },
    {
        name: 'VS Code',
        href: '#',
        icon: VisualStudioCodeIcon,
        className: 'max-sm:size-4 text-blue-500 size-7 mt-0.5',
    },
];


export default function HomePage() {

    const [currentTime, setCurrentTime] = useState(new Date());
    const [ loggingIn, setLoggingIn ] = useState(false);
    const [pin, setPin] = useState('1234');
    const router = useRouter();

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const formatTime = (date: Date) => {
        return date.toLocaleTimeString('en-US', {
            hour: 'numeric',
            minute: '2-digit',
            hour12: true
        });
    };

    const formatDate = (date: Date) => {
        return date.toLocaleDateString('en-US', {
            weekday: 'long',
            month: 'long',
            day: 'numeric',
            year: 'numeric'
        });
    };

    const loginHandler = () => {
        setLoggingIn(true);

        setTimeout(() => {
            setLoggingIn(false);
            router.push('/desktop');
        }, 1000);
    }


    return (
        <main className="min-h-screen font-sans relative bg-amber-50 text-center">
            <div className="flex flex-col gap-3 items-center justify-center min-h-screen">

                <div className="flex justify-center max-sm:mt-5 flex-col">
                    <p className="leading-4 text-sm mb-2">Welcome back,</p>
                    <time dateTime="" className="max-sm:text-3xl text-6xl font-bold"> {formatTime(currentTime)}</time>
                    <p className="max-sm:text-lg text-foreground/70 text-2xl font-medium mt-1">{formatDate(currentTime)}</p>
                </div>


                <div className="flex w-full p-5 flex-col max-sm:mt-2 mt-5 justify-center gap-5">
                    <div className="max-sm:size-20 relative size-32 bg-gray-100 rounded-full mx-auto mb-4 flex items-center justify-center ring-2 ring-amber-200 ring-offset-4">
                        <WindowsIcon className="max-sm:size-10 size-12" />

                        <Image src="/cambodia-flag-icon-128.png" alt="Avatar" width={120} height={120} className="absolute ring-2 bottom-1 -right-2 ring-amber-200 rounded w-9 hover:scale-110 transition-all duration-300 h-auto object-cover" />

                    </div>
                    <div className="max-sm:flex-col max-sm:mt-5 mt-7 items-center flex-col flex mx-auto justify-center gap-0">
                        <h1 className="font-bold font-sans text-xl">Sophat LEAT</h1>
                    </div>

                    <div className="flex w-full max-w-xs mx-auto justify-center max-sm:gap-1 gap-2">
                        <input type="password" className="text-base leading-5 w-full font-normal px-3 py-1.5 rounded-xl rounded-r-sm border" placeholder="PIN" value={pin} onChange={(e) => setPin(e.target.value)} />
                        <button type="submit" disabled={loggingIn} onClick={loginHandler} className="text-base shrink-0 bg-amber-100 disabled:opacity-50 cursor-pointer text-amber-900 leading-5 font-medium px-3 py-1.5 rounded-xl rounded-l-sm border">
                            {
                                loggingIn
                                ? <span className="flex gap-1 items-center"><LoaderIcon className="size-4 animate-spin" /> {'Sign In'} </span> : 'Sign In'
                            }
                        </button>
                    </div>
                </div>


                <footer className="pb-5 mt-10 w-full px-4 mb-5">
                    <ul className="flex w-full max-w-3xl overflow-x-auto mx-auto justify-center py-1.5 gap-5">
                        {menuItems.map((item) => (
                            <li key={item.name} className="flex items-center gap-0.5 justify-center">
                                <a href={item.href} className="relative flex flex-col items-center justify-center size-9 rounded-lg hover:bg-white hover:shadow-lg duration-400 shadow-black/10 transition-colors">
                                    <item.icon className={item.className} />
                                </a>
                                <span className="max-sm:text-xs whitespace-nowrap mt-0.5">{item.name}</span>
                            </li>
                        ))}
                    </ul>
                </footer>

            </div>
        </main>
    );
}