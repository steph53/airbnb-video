import EmptyState from "../components/EmptyState";
import ClientOnly from "../components/ClientOnly";
import getCurrentUser from "../actions/getCurrentUser";
import getFavoriteListings from "../actions/getFavoriteListings";
import FavoritesClient from "./FavoritesClient";


const ListingPage = async () => {
    const listings = await getFavoriteListings();
    const user = await getCurrentUser();
    if (listings.length == 0) {
        return (
            <ClientOnly>
                <EmptyState
                    title="You don't have any favorites yet"
                    subtitle="Click the heart icon on a listing to save it to your favorites"
                />
            </ClientOnly>
        );
    }

    return (
        <ClientOnly>
            <FavoritesClient
                listings={listings}
                currentUser={user}
            />
        </ClientOnly>
    )
}

export default ListingPage;