import React, { useState, useEffect } from 'react'
import { useRouter } from "next/router";


export default function eventsModifAdmin(props) {


    const router = useRouter();
    const { eventId } = router.query; // Extraction de l'ID

    const [event, setEvent] = useState(null)

    console.log(eventId)

    // Récupération d'un event
    useEffect(() => {
        fetch(`http://localhost:3000/events/oneEvent/${eventId}`)
            .then((response) => response.json())
            .then((data) => {
                if (data.result) {
                    // Récupéreration de l'event
                    setEvent(data.event);
                }
            });
    }, []);




    return (
        <div></div>
    )
}
