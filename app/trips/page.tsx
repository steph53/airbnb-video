import EmptyState from "../components/EmptyState";
import ClientOnly from "../components/ClientOnly";

import getCurrentUser from "../actions/getCurrentUser";
import getReservations from "../actions/getReservations";
import TripsClient from "./TripsClient";


const TripsPage = async() => {

    const currentUser = await getCurrentUser();
    if (!currentUser) {
        return (
            <ClientOnly>
                <EmptyState 
                    title="Unathorized"
                    subtitle="Please login to view your trips"
                />;
            </ClientOnly>
        )
    }

    const reservations = await getReservations({userId: currentUser.id});

    if (reservations.length == 0) {
        return (
            <ClientOnly>
                <EmptyState 
                    title="No trips"
                    subtitle="Looks like you have not booked any trips"
                />;
            </ClientOnly>
        )
    }

    return (
        <ClientOnly>
            <TripsClient
                reservations={reservations}
                currentUser={currentUser}
            />
        </ClientOnly>
        )
}
 
export default TripsPage;