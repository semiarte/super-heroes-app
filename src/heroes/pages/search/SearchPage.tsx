import { CustomJumbotron } from "@/components/custom/CustomJumbotron";
import { HeroStats } from "@/heroes/components/HeroStats";
import { SearchControls } from "./ui/SearchControls";
import { CustomBreadcrumbs } from "@/components/custom/CustomBreadcrumbs";
import { HeroGrid } from "@/heroes/components/HeroGrid";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router";
import { searchHeroesActions } from "@/heroes/actions/search-heroes.actions";

export const SearchPage = () => {
    const [searcParams] = useSearchParams();

    const name = searcParams.get('name') ?? undefined;

    const { data: heroes = [] } = useQuery({
        queryKey: ['search', { name }],
        queryFn: () => searchHeroesActions({ name }),
        staleTime: 1000 * 60 * 5,
    })

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

            <HeroGrid heroes={heroes} />
        </>
    )
}

export default SearchPage;
