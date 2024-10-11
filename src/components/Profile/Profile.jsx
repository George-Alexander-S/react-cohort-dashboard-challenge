import { useParams } from "react-router-dom";
import { useUser } from "../../context/UserProvider";
import { useEffect } from "react";

function UserProfile() {

    const { userId } = useParams();

    const { user, getUser } = useUser();

    useEffect(() => {
        getUser(userId);
    }, [userId]) 
    
    // Sweet, including userId in the dependency array makes sure it updates, even if im aldready in the profile comp in another user, then pressing on the profile icon which should take me to the hardcoded user1. The useEffect will trigger on the new userId, and refresh the component.

    if (!user) {
        return <p>Loading...</p>;
    }

    return (
        <>
            <h2>{user.firstName} {user.lastName}</h2>
            <p>This is user with id: {user.id}</p>
        </>
    )
}

export default UserProfile