import { CustomJumbotron } from "@/components/custom/CustomJumbotron";
import { HeroStats } from "@/heroes/components/HeroStats";
import { SearchControls } from "./ui/SearchControls";
import { CustomBreadcrumbs } from "@/components/custom/CustomBreadcrumbs";

export const SearchPage = () => {
    return (
        <>
            <CustomJumbotron
                title="Find your Superhero"
                description="Discover, explore, and manage your favorite superheroes and villains"
            />

            <CustomBreadcrumbs currentPage="Search heroes"
            // breadcrumbs={[
            //     { label: 'Home 1', to: '/' },
            //     { label: 'Home 1', to: '/' },
            //     { label: 'Home 1', to: '/' },
            // ]}
            />

            {/* Stats Dashboard */}
            <HeroStats />

            {/* Filter and search */}
            <SearchControls />
        </>
    )
}

export default SearchPage;
