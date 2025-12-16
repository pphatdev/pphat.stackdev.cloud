import { GithubIcon } from "@/components/icons/github";
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

export default function Github() {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <button type="button" className="relative flex cursor-pointer items-center justify-center size-9 rounded-lg hover:bg-white hover:shadow-lg duration-400 shadow-black/10 transition-colors">
                    <GithubIcon className="text-gray-600 size-7" />
                </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent side="top" align="center" className="w-xl">
                <div className="h-48 flex items-center justify-center">
                    <p>Coming Soon...</p>
                </div>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}