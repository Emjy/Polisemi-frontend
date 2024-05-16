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

    // Fonction pour mettre à jour un champ de l'événement
    const handleChange = (field, value) => {
        setEvent({ ...event, [field]: value });
    };

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

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <h1>
                    Modification d'un article
                </h1>
            </div>

            <div style={{ width: '100%', display: 'flex', justifyContent: 'center', marginBottom: '32px' }}>


                <div
                    style={{ padding: '8px', backgroundColor: 'lightblue', borderRadius: '8px', margin: '8px', cursor: 'pointer' }}
                    onClick={() => router.push(`/eventsAdmin`)}
                >
                    Retour
                </div>
                <div
                    style={{ padding: '8px', backgroundColor: 'lightgreen', borderRadius: '8px', margin: '8px', cursor: 'pointer' }}
                // onClick={() => { addEvent(event) }}
                >
                    Ajouter
                </div>
            </div>

            {event &&
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', padding: '32px', gap: '8px', width: '50vw', height: '80vh', backgroundColor: 'rgba(0,0,75, 0.08)', borderRadius: '16px', overflow: 'auto', }}>
                    {Object.entries(event).map(([key, value]) => (
                        <div key={key} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '32px' }}>

                            <label style={{ width: '150px' }} htmlFor={key}>
                                {key.replace(/_/g, ' ')}:
                            </label>

                            {key === 'pmr' || key === 'blind' || key === 'deaf' ? (
                                <input type="checkbox" id={key} checked={value} onChange={(e) => handleChange(key, e.target.checked)} />
                            ) : key === 'description' ? (
                                <textarea id={key} value={value} onChange={(e) => handleChange(key, e.target.value)} style={{ width: '600px', height: '300px', borderRadius: '8px', paddingInline: '8px' }} />
                            ) : key === 'cover_url' ? (
                                <img id={key} src={value} style={{ width: '600px', height: '300px', objectFit: 'cover', borderRadius: '8px' }} />
                            ) : (
                                <input type="text" id={key} value={value} onChange={(e) => handleChange(key, e.target.value)} style={{ width: '600px', height: '50px', borderRadius: '8px', paddingInline: '8px' }} />
                            )}

                        </div>
                    ))}
                </div>
            }


        </div>
    )
}
