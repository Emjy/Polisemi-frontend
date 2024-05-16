import React, { useState, useEffect } from 'react'
import { useRouter } from "next/router";

// Formattage des dates 
import { format } from 'date-fns';

export default function eventsAdmin() {

    const router = useRouter();

    const [events, setEvents] = useState([])
    const [addedEvent, setAddedEvent] = useState(false)

    // Fonction pour envoyer les données de l'événement au backend
    const addEvent = (newEvent) => {
        fetch('http://localhost:3000/events/addEvent', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newEvent),
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.result) {
                    // L'événement a été ajouté avec succès, vous pouvez rediriger l'utilisateur ou effectuer d'autres actions
                    console.log('Event added successfully:', data.event);
                    setAddedEvent(!addedEvent)
                } else {
                    // Une erreur s'est produite lors de l'ajout de l'événement
                    console.error('Error adding event:', data.error);
                }
            })
            .catch((error) => {
                console.error('Error adding event:', error);
            });
    };

    // Récupération des events
    useEffect(() => {
        fetch(`http://localhost:3000/events/`)
            .then((response) => response.json())
            .then((data) => {
                if (data.result) {

                    // Tri des affiches par date de création
                    const sortedEvents = data.events.sort((a, b) => {
                        return new Date(b.updated_at) - new Date(a.updated_at); // Pour un tri décroissant, inversez pour un tri croissant
                    });
                    // Récupéreration des events
                    setEvents(sortedEvents);
                }
            });
    }, [addedEvent]);

    const eventsData = events.map((event) => (
        <div key={event.id} style={{ display: 'flex', flexDirection: 'column', padding: '16px', margin: '16px', width: '500px', minHeight: '500px', backgroundColor: 'rgba(0,0,75, 0.08)', alignItems: 'center', borderRadius: '16px', justifyContent: 'space-between' }} >
            <div style={{ display: 'flex' }}>
                <div
                    style={{ padding: '8px', backgroundColor: 'lightblue', borderRadius: '8px', margin: '8px', cursor: 'pointer' }}
                    onClick={() => router.push(`/eventsModifAdmin?eventId=${event.id}`)}>
                    Modifier
                </div>
                <div
                    style={{ padding: '8px', backgroundColor: 'lightgreen', borderRadius: '8px', margin: '8px', cursor: 'pointer' }}
                    onClick={() => { addEvent(event) }}
                >
                    Ajouter directement
                </div>
            </div>
           
            <div>
                {format(new Date(event.date_start), 'dd/MM/yyyy') + ' - ' + format(new Date(event.date_end), 'dd/MM/yyyy')}
            </div>

            <h2 style={{ textAlign: 'center' }}>{event.title}</h2>

            <div>
                <div style={{ width: 'auto', height: 'auto', display: 'flex', flexDirection: 'column' }}>
                    <img src={event.cover_url} style={{ width: '300px', height: 'auto', borderRadius: '16px' }}></img>
                </div>

                {/* <div style={{ width: '1000px', height: 'auto' }} dangerouslySetInnerHTML={{ __html: event.description }} /> */}

            </div>

            <div style={{ paddingBlock: '8px', fontWeight: 'bold' }}>
                {event.tags.join(', ')}
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', paddingBlock: '16px' }}>
                <div>
                    {event.address_name}
                </div>
                <div>
                    {event.address_street}
                </div>
                <div>
                    {event.address_zipcode + ', ' + event.address_city}
                </div>

            </div>

            <div style={{ fontSize: '10px' }}>
                {'Date de publication : ' + format(new Date(event.updated_at), 'dd/MM/yyyy')}
            </div>

           
        </div>

    ))

    return (

        <>
            <div style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
                <h1>
                    Ajout des articles
                </h1> 
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-start', justifyContent: 'center', overflow:'auto' }}>
                {eventsData.length > 0 ? eventsData : <p>Loading...</p>}
            </div>
        </>
        
    );


}
