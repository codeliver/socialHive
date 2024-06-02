import { useState } from "react";
import Contact from "./contact";

const ConctactList = () => {
    const [cons, setCons] = useState(
        [
            {
                name: "Ben Parker",
                email: "ben@dotnetmastery.com",
            },
            {
                name: "Kathy Patrick",
                email: "kathy@dotnetmastery.com",
            },
            {
                name: "Paul Show",
                email: "paul@dotnetmastery.com",
            },
            {
                name: "Sam Williams",
                email: "sam@dotnetmastery.com",
            },
            {
                name: "Chad Gabriel",
                email: "chad@dotnetmastery.com",
            },
            {
                name: "Anthony Mackie",
                email: "mac@dotnetmastery.com",
            },
        ]
    );

    return (
        <>
            <Contact contactList = {cons} />
        </>
    );
}

export default ConctactList;