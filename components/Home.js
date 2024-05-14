import styles from '../styles/Home.module.css';
import Header from './Header';
import { useEffect, useState } from 'react';
import { format } from 'date-fns';



function Home() {

  const [events, setEvents] = useState([])

  // Récupération des events
  useEffect(() => {
    fetch(`http://localhost:3000/events/allEvents`)
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
  }, []);


  const eventsData = events.map((event) => (
    <div key={event.id} style={{ display: 'flex', flexDirection: 'column', padding: '16px', margin: '16px', width: '500px', minHeight: '500px', backgroundColor: 'rgba(0,0,75, 0.08)', alignItems: 'center', borderRadius: '16px', justifyContent: 'space-between' }} >
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
    <div>

      <main className={styles.main}>
        <Header />
        {/* <img src='musee_bourdelle.webp'/> */}
        <div className={styles.text}>
          <h1 className={styles.title}>The Center for the Less Good Idea</h1>
          <div className={styles.description}>William Kentridge, Bronwyn Lace et plus de trente artistes en résidence</div>
          <div>
            <div className={styles.date}>Du mardi 14 mai 2024 au lundi 20 mai 2024</div>
            <div className={styles.hour}>19h00 — 22h00</div>
            <div className={styles.place}>Fondation Cartier</div>
          </div>
        </div>
      </main>

      {/* <section className={styles.events}> */}

       {/*  <div className={styles.card}>
          <img src='musee_bourdelle.webp' />
          <h1 className={styles.title}>The Center for the Less Good Idea</h1>
          <div className={styles.description}>William Kentridge, Bronwyn Lace et plus de trente artistes en résidence</div>
          <div>
            <div className={styles.date}>Du mardi 14 mai 2024 au lundi 20 mai 2024</div>
            <div className={styles.hour}>19h00 — 22h00</div>
            <div className={styles.place}>Fondation Cartier</div>
          </div>
        </div>

        <div className={styles.card}>
          <img src='musee_bourdelle.webp' />
          <h1 className={styles.title}>The Center for the Less Good Idea</h1>
          <div className={styles.description}>William Kentridge, Bronwyn Lace et plus de trente artistes en résidence</div>
          <div>
            <div className={styles.date}>Du mardi 14 mai 2024 au lundi 20 mai 2024</div>
            <div className={styles.hour}>19h00 — 22h00</div>
            <div className={styles.place}>Fondation Cartier</div>
          </div>
        </div>

        <div className={styles.card}>
          <img src='musee_bourdelle.webp' />
          <h1 className={styles.title}>The Center for the Less Good Idea</h1>
          <div className={styles.description}>William Kentridge, Bronwyn Lace et plus de trente artistes en résidence</div>
          <div>
            <div className={styles.date}>Du mardi 14 mai 2024 au lundi 20 mai 2024</div>
            <div className={styles.hour}>19h00 — 22h00</div>
            <div className={styles.place}>Fondation Cartier</div>
          </div>
        </div>

        <div className={styles.card}>
          <img src='musee_bourdelle.webp' />
          <h1 className={styles.title}>The Center for the Less Good Idea</h1>
          <div className={styles.description}>William Kentridge, Bronwyn Lace et plus de trente artistes en résidence</div>
          <div>
            <div className={styles.date}>Du mardi 14 mai 2024 au lundi 20 mai 2024</div>
            <div className={styles.hour}>19h00 — 22h00</div>
            <div className={styles.place}>Fondation Cartier</div>
          </div>
        </div>

        <div className={styles.card}>
          <img src='musee_bourdelle.webp' />
          <h1 className={styles.title}>The Center for the Less Good Idea</h1>
          <div className={styles.description}>William Kentridge, Bronwyn Lace et plus de trente artistes en résidence</div>
          <div>
            <div className={styles.date}>Du mardi 14 mai 2024 au lundi 20 mai 2024</div>
            <div className={styles.hour}>19h00 — 22h00</div>
            <div className={styles.place}>Fondation Cartier</div>
          </div>
        </div>

        <div className={styles.card}>
          <img src='musee_bourdelle.webp' />
          <h1 className={styles.title}>The Center for the Less Good Idea</h1>
          <div className={styles.description}>William Kentridge, Bronwyn Lace et plus de trente artistes en résidence</div>
          <div>
            <div className={styles.date}>Du mardi 14 mai 2024 au lundi 20 mai 2024</div>
            <div className={styles.hour}>19h00 — 22h00</div>
            <div className={styles.place}>Fondation Cartier</div>
          </div>
        </div> */}

        {eventsData}


      {/* </section> */}



    </div>
  );
}

export default Home;
