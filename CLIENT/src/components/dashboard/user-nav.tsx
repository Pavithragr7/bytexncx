import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Settings, User, LogOut } from "lucide-react";

export function UserNav() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-10 w-10 rounded-full transition-all duration-300 hover:shadow-lg">
          <Avatar className="h-10 w-10 border border-gray-300 shadow-md">
            <AvatarImage src="/placeholder.svg" alt="User" className="object-cover" />
            <AvatarFallback className="bg-gray-200 text-gray-700 font-bold">U</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-64 bg-white shadow-xl rounded-lg border" align="end" forceMount>
        <DropdownMenuLabel className="font-normal p-4">
          <div className="flex items-center space-x-3">
            <Avatar className="h-10 w-10 border border-gray-300">
              <AvatarImage src="/placeholder.svg" alt="User" className="object-cover" />
              <AvatarFallback className="bg-gray-200 text-gray-700 font-bold">U</AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <p className="text-sm font-semibold text-gray-900">John Doe</p>
              <p className="text-xs text-gray-500">john.doe@example.com</p>
            </div>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem className="flex items-center gap-2 text-gray-700 hover:bg-gray-100 px-4 py-2 rounded-md">
            <User className="size-4 text-gray-600" /> Profile
          </DropdownMenuItem>
          <DropdownMenuItem className="flex items-center gap-2 text-gray-700 hover:bg-gray-100 px-4 py-2 rounded-md">
            <Settings className="size-4 text-gray-600" /> Settings
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="flex items-center gap-2 text-red-600 hover:bg-red-100 px-4 py-2 rounded-md">
          <LogOut className="size-4 text-red-600" /> Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
