'use client'

import { useEffect } from "react";
import Image from "next/image";
import Windows from "./windows";
import Search from "./search";
import Github from "./github";
import VisualStudioCode from "./vs-code";
import { ContextMenu, ContextMenuCheckboxItem, ContextMenuContent, ContextMenuItem, ContextMenuLabel, ContextMenuRadioGroup, ContextMenuRadioItem, ContextMenuSeparator, ContextMenuShortcut, ContextMenuSub, ContextMenuSubContent, ContextMenuSubTrigger, ContextMenuTrigger } from "@/components/ui/context-menu";

export default function HomePage() {
    useEffect(() => {
        const enterFullscreen = async () => {
            try {
                if (document.documentElement.requestFullscreen) {
                    await document.documentElement.requestFullscreen();
                }
            } catch (error) {
                console.log('Fullscreen request failed:', error);
            }
        };

        enterFullscreen();
    }, []);

    const menu = [
        { element: <Search /> },
        { element: <Windows /> },
        { element: <Github /> },
        { element: <VisualStudioCode /> },
    ]

    return (
        <main className="min-h-screen relative">
            <Image src="/angkor-wat-cambodia.jpg" alt="Background" fill className="absolute pointer-events-none -z-1 inset-0 object-cover" />

            <ContextMenu>
                <ContextMenuTrigger className="h-full absolute inset-0 w-full"></ContextMenuTrigger>
                <ContextMenuContent className="w-52">
                    <ContextMenuSub>
                        <ContextMenuSubTrigger inset>View</ContextMenuSubTrigger>
                        <ContextMenuSubContent className="w-44">
                            <ContextMenuCheckboxItem checked>Large icons</ContextMenuCheckboxItem>
                            <ContextMenuCheckboxItem>Medium icons</ContextMenuCheckboxItem>
                            <ContextMenuCheckboxItem>Small icons</ContextMenuCheckboxItem>
                            <ContextMenuSeparator />
                            <ContextMenuCheckboxItem>Auto arrange icons</ContextMenuCheckboxItem>
                            <ContextMenuCheckboxItem>Align icons to grid</ContextMenuCheckboxItem>
                            <ContextMenuSeparator />
                            <ContextMenuCheckboxItem>Show desktop icons</ContextMenuCheckboxItem>
                        </ContextMenuSubContent>
                    </ContextMenuSub>
                    <ContextMenuSub>
                        <ContextMenuSubTrigger inset>Sort by</ContextMenuSubTrigger>
                        <ContextMenuSubContent className="w-32">
                            <ContextMenuRadioGroup value="name">
                                <ContextMenuRadioItem value="name">Name</ContextMenuRadioItem>
                                <ContextMenuRadioItem value="size">Size</ContextMenuRadioItem>
                                <ContextMenuRadioItem value="type">Item type</ContextMenuRadioItem>
                                <ContextMenuRadioItem value="modified">Date modified</ContextMenuRadioItem>
                            </ContextMenuRadioGroup>
                        </ContextMenuSubContent>
                    </ContextMenuSub>
                    <ContextMenuItem inset>
                        Refresh
                        <ContextMenuShortcut>F5</ContextMenuShortcut>
                    </ContextMenuItem>
                    <ContextMenuSeparator />
                    <ContextMenuItem inset disabled>
                        Paste
                        <ContextMenuShortcut>Ctrl+V</ContextMenuShortcut>
                    </ContextMenuItem>
                    <ContextMenuItem inset disabled>
                        Paste shortcut
                    </ContextMenuItem>
                    <ContextMenuSeparator />
                    <ContextMenuSub>
                        <ContextMenuSubTrigger inset>New</ContextMenuSubTrigger>
                        <ContextMenuSubContent className="w-44">
                            <ContextMenuItem>Folder</ContextMenuItem>
                            <ContextMenuItem>Shortcut</ContextMenuItem>
                            <ContextMenuSeparator />
                            <ContextMenuItem>Text Document</ContextMenuItem>
                            <ContextMenuItem>Bitmap Image</ContextMenuItem>
                        </ContextMenuSubContent>
                    </ContextMenuSub>
                    <ContextMenuSeparator />
                    <ContextMenuItem inset>Display settings</ContextMenuItem>
                    <ContextMenuItem inset>Personalize</ContextMenuItem>
                </ContextMenuContent>
            </ContextMenu>
            <footer className="fixed bottom-0 inset-x-0 border-t backdrop-blur-sm border-black/5 bg-white/90">
                <ul className="flex w-full max-w-3xl mx-auto justify-center py-1.5 gap-1">
                    {menu.map((item, index) => (
                        <li key={index}> {item.element} </li>
                    ))}
                </ul>
            </footer>
        </main>
    );
}