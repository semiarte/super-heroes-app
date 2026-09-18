import { Link, useLocation } from "react-router"
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "../ui/navigation-menu"
import { cn } from "@/lib/utils";

export const CustomMenu = () => {
    const { pathname } = useLocation();

    const isActive = (path: string) => {
        return pathname === path;
    }

    return (
        <NavigationMenu className="py-5">
            <NavigationMenuList className="gap-4">
                {/* Home */}
                <NavigationMenuItem>
                    <NavigationMenuLink
                        render={<Link to='/' />}
                        className={cn(isActive('/') && 'bg-slate-200', 'rounded-md p-2')}>
                        Home
                    </NavigationMenuLink>
                </NavigationMenuItem>
                {/* Search */}
                <NavigationMenuItem>
                    <NavigationMenuLink
                        render={<Link to='/search' />}
                        className={cn(isActive('/search') && 'bg-slate-200', 'rounded-md p-2')}>
                        Search heroes
                    </NavigationMenuLink>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    )
}
