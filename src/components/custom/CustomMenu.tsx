import { Link, useLocation } from "react-router"
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "../ui/navigation-menu"
import { cn } from "@/lib/utils";

export const CustomMenu = () => {
    const { pathname } = useLocation();

    const isActive = (path: string) => {
        return pathname === path;
    }

    return (
        <NavigationMenu>
            <NavigationMenuList className="gap-4">
                {/* Home */}
                <NavigationMenuItem>
                    <NavigationMenuLink className={cn(isActive('/') && 'bg-slate-200', 'rounded-md p-2')}>
                        <Link to='/'>Home</Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>
                {/* Search */}
                <NavigationMenuItem>
                    <NavigationMenuLink className={cn(isActive('/search') && 'bg-slate-200', 'rounded-md p-2')}>
                        <Link to='/search'>Search heroes</Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    )
}
