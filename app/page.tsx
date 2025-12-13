'use client';
import { SearchIcon } from "@/components/icons/search";
import Image from "next/image";
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { LoaderIcon } from "lucide-react";

const menuItems = [
    {
        name: 'Sophat LEAT',
        href: 'https://google.com/search?q=sophat+leat',
        icon: SearchIcon,
        className: 'text-gray-500 size-4',
    },
    {
        name: 'LEAT Sophat',
        href: 'https://google.com/search?q=leat+sophat',
        icon: SearchIcon,
        className: 'text-gray-500 size-4',
    },
    {
        name: 'pphatdev',
        href: 'https://google.com/search?q=pphatdev',
        icon: SearchIcon,
        className: 'text-gray-500 size-4',
    },
    {
        name: 'sophatleat',
        href: 'https://google.com/search?q=sophatleat',
        icon: SearchIcon,
        className: 'text-gray-500 size-4',
    },
    {
        name: 'leatsophat',
        href: 'https://google.com/search?q=leatsophat',
        icon: SearchIcon,
        className: 'text-gray-500 size-4',
    },
];


export default function HomePage() {

    const [currentTime, setCurrentTime] = useState(new Date());
    const [ loggingIn, setLoggingIn ] = useState(false);
    const [pin, setPin] = useState('1234');
    const router = useRouter();

    const greetings = () => {
        const hour = currentTime.getHours();
        if (hour < 12) return 'Good Morning';
        if (hour < 18) return 'Good Afternoon';
        return 'Good Evening';
    }


    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const formatTime = (date: Date) => {
        return date.toLocaleTimeString('en-US', {
            hour: '2-digit',
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
        <main className="min-h-screen font-sans relative bg-linear-to-b from-amber-50 to-amber-100 text-center">
            <Image src="/angkor-wat-cambodia.jpg" alt="Background" fill className="absolute pointer-events-none opacity-7 inset-0 object-cover" />
            <div className="flex flex-col gap-3 items-center justify-center min-h-screen">

                <div className="flex justify-center max-sm:mt-10 flex-col mb-5">
                    <p className="leading-4 text-sm mb-2">{greetings()}, Welcome back</p>
                    <time dateTime="" className="max-sm:text-3xl text-6xl font-bold"> {formatTime(currentTime)}</time>
                    <p className="max-sm:text-lg text-foreground/70 text-2xl mt-1">{formatDate(currentTime)}</p>
                </div>

                <div className="flex w-full px-5 flex-col max-sm:mt-2 mt-6 justify-center gap-3">
                    <div className="max-sm:size-20 relative size-32 bg-gray-100 rounded-full mx-auto mb-4 flex items-center justify-center ring-2 ring-amber-300 ring-offset-4">
                        <Image src="/profile.png" alt="Avatar" width={400} height={400} className="w-full h-full p-2 rounded-2xl" />
                        <Image src="/cambodia-flag-icon-128.png" alt="Avatar" width={120} height={120} className="absolute ring-2 bottom-1 -right-2 ring-amber-200 rounded w-9 hover:scale-110 transition-all duration-300 h-6 object-cover" />
                    </div>
                    <div className="max-sm:flex-col max-sm:mt-5 mt-9 items-center flex-col flex mx-auto justify-center gap-0">
                        <h1 className="font-bold font-sans text-xl">Sophat LEAT</h1>
                    </div>

                    <div className="flex w-full max-w-60 mx-auto justify-center max-sm:gap-2 gap-2 shadow-2xl">
                        <input type="password" className="text-base leading-5 font-black tracking-[3px] bg-background w-full px-3 py-1.5 rounded-lg rounded-r-sm outline-0 ring-2 ring-amber-200/70 focus-within:ring-amber-400" placeholder="PIN" value={pin} onChange={(e) => setPin(e.target.value)} />
                        <button type="submit" disabled={loggingIn} onClick={loginHandler} className="text-base transition-all duration-300 shrink-0 bg-amber-600 disabled:opacity-50 cursor-pointer text-white leading-5 font-medium px-3 py-1.5 rounded-lg rounded-l-sm ring-2 ring-amber-300 focus-within:ring-amber-400">
                            {
                                loggingIn
                                ? <span className="flex gap-1 items-center transition-all duration-300">
                                    <LoaderIcon className="size-4 animate-spin" />
                                    {'Check'}
                                </span> : 'Check'
                            }
                        </button>
                    </div>
                </div>

                <footer className="pb-5 mt-10 w-full px-4 mb-5 flex gap-2 flex-col items-center justify-center">
                    <div className="h-0.5 w-full max-w-xs mx-auto mt-5 bg-linear-to-r from-transparent via-amber-300 to-transparent"></div>
                    <ul className="flex flex-wrap w-full max-w-3xl overflow-x-auto pb-5 mx-auto justify-center py-1.5 gap-x-8">
                        {menuItems.map((item) => (
                            <li key={item.name} className="flex items-center gap-0.5 justify-center">
                                <a href={item.href} target="_top" className="relative flex flex-col items-center justify-center size-9 rounded-lg hover:bg-white hover:shadow-lg duration-200 shadow-black/10 transition-colors">
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