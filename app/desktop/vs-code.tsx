import { VisualStudioCodeIcon } from "@/components/icons/vscode";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

export default function VisualStudioCode() {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <button type="button" className="relative flex cursor-pointer items-center justify-center size-9 rounded-lg hover:bg-white hover:shadow-lg duration-400 shadow-black/10 transition-colors">
                    <VisualStudioCodeIcon className="text-blue-500 size-7 mt-0.5" />
                </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent side="top" align="end" className="w-xl">
                <div className="h-48 flex items-center justify-center">
                    <p>Coming Soon...</p>
                </div>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}