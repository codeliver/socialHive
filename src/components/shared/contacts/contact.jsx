import { useEffect, useState } from "react";
import IndividualContact from "./contact-ind";

const Contact = (props) => {

    const [height2, setHeight2] = useState(window.innerHeight * 0.35); // Initialize with 100% of viewport height

    useEffect(() => {
        const updateHeight = () => {
            setHeight2(window.innerHeight); // Update height to 100% of viewport height
        };

        window.addEventListener('resize', updateHeight);
        return () => {
        window.removeEventListener('resize', updateHeight);
        };
    }, []);

    return (
        <div class="hover-scroll-y" style={{ height: `${height2}px` }}>
            {
                props.contactList.map((cont, index) => (
                    <IndividualContact ind={cont} key={index} />
                ))
            }
        </div>
    
    );
};

export default Contact;
