import { FilesIcon, UserCircle } from "lucide-react"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator, CommandShortcut } from "@/components/ui/command"
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog"
import { GithubIcon } from "@/components/icons/github";
import { VisualStudioCodeIcon } from "@/components/icons/vscode";
interface WindowsProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
}

export function Windows({ open, onOpenChange }: WindowsProps) {
    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="overflow-hidden p-0">
                <DialogTitle className="hidden">Open Window</DialogTitle>
                <DialogDescription className="hidden"> Open the command menu to quickly navigate and execute commands.</DialogDescription>
                <Command className="**:[[cmdk-group-heading]]:px-2 font-sans **:[[cmdk-group-heading]]:font-medium **:[[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 **:[[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 **:[[cmdk-input]]:h-12 **:[[cmdk-item]]:px-2 **:[[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5">
                    <CommandInput placeholder="Type a command or search..." />
                    <CommandList>
                        <CommandEmpty>No results found.</CommandEmpty>
                        <CommandGroup heading="Suggestions">
                            <CommandItem>
                                <GithubIcon />
                                <span>Github</span>
                            </CommandItem>
                            <CommandItem>
                                <VisualStudioCodeIcon />
                                <span>VS Code</span>
                            </CommandItem>
                        </CommandGroup>
                        <CommandSeparator />
                        <CommandGroup heading="About Me">
                            <CommandItem>
                                <UserCircle />
                                <span>Profile</span>
                                <CommandShortcut>⌘P</CommandShortcut>
                            </CommandItem>
                            <CommandItem>
                                <FilesIcon />
                                <span>Cover Letter</span>
                                <CommandShortcut>⌘C</CommandShortcut>
                            </CommandItem>
                        </CommandGroup>
                    </CommandList>
                </Command>
            </DialogContent>
        </Dialog>
    )
}
