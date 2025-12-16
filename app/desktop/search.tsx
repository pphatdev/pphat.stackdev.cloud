"use client"
import { SearchIcon } from "@/components/icons/search";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { useEffect, useState } from "react";
import { WindowsCommand } from "./windows-command";
import { Input } from "@/components/ui/input";
import { SkeletonCard } from "@/components/ui/skeleton-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { appConfig } from "@/configs/app";
import { useRouter } from "next/navigation";
import { PowerIcon } from "lucide-react";

export default function Search() {

    const [openWindows, setOpenWindows] = useState(false);

    // Ctrl + k show setOpenWindows(true)
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
                e.preventDefault();
                setOpenWindows(true);
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    const router = useRouter();
    const logout = () => {
        setTimeout(() => { router.push('/'); }, 1000);
    }

    return (
        <>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <button type="button" className="relative flex cursor-pointer items-center justify-center size-9 rounded-lg hover:bg-white hover:shadow-lg duration-400 shadow-black/10 transition-colors">
                        <SearchIcon className="text-gray-500 size-6" />
                    </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent side="top" align="center" className="w-xl rounded-t-3xl p-0 mb-2">

                    <div className="p-4 mt-2">
                        <Input type="search" placeholder="Search..." />
                    </div>

                    <div className="flex gap-0 h-96">
                        <div className="w-40 shrink-0 overflow-y-auto overflow-x-hidden h-full p-2">
                            <DropdownMenuItem onClick={() => console.log('Settings clicked')}>
                                ⚙️ Settings
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => console.log('File Explorer clicked')}>
                                📁 File Explorer
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem onClick={() => console.log('Power Options clicked')}>
                                ⚡ Power Options
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => console.log('Sign out clicked')}>
                                👤 Sign out
                            </DropdownMenuItem>
                        </div>

                        <div className="w-full grid sm:grid-cols-3 gap-3 overflow-y-auto p-3">
                            <SkeletonCard />
                            <SkeletonCard />
                            <SkeletonCard />
                        </div>
                    </div>

                    <div className="px-4 py-2 border-t flex gap-5 justify-between items-center">
                        <DropdownMenuItem className="px-2" onClick={() => console.log('Sign out clicked')}>
                            <div className="flex gap-2 items-center">
                                <Avatar>
                                    <AvatarImage src="/profile.png" />
                                    <AvatarFallback>SL</AvatarFallback>
                                </Avatar>
                                <div className="text-sm font-medium font-sans">{appConfig.name}</div>
                            </div>
                        </DropdownMenuItem>

                        <DropdownMenuItem className="p-2" onClick={logout}>
                            <PowerIcon className="size-4.5 text-foreground/60" />
                        </DropdownMenuItem>
                    </div>
                </DropdownMenuContent>
            </DropdownMenu>
            <WindowsCommand open={openWindows} onOpenChange={setOpenWindows} />
        </>
    );
}