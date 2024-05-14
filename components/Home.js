import styles from '../styles/Home.module.css';
import Header from './Header';

function Home() {
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

      <section className={styles.events}>

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


      </section>



    </div>
  );
}

export default Home;
