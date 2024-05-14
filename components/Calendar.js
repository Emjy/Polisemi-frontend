import styles from '../styles/Calendar.module.css';
import Header from './Header';

import * as React from 'react';
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';

export default function Calendar() {

    const [value, setValue] = React.useState(dayjs('2022-04-17'));

    // Pour afficher les évènements à une date
    /* function Display() {

    } */

    return (
        <div>

            <main className={styles.main}>
                <Header />
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
                <LocalizationProvider dateAdapter={AdapterDayjs}>

                    <div>
                        <label>Notre calendrier</label>
                        <DateCalendar value={value} onChange={(newValue) => setValue(newValue)} />
                    </div>
                </LocalizationProvider>

                <div className={styles.display}>
                    <div className={styles.text}>
                        <h1 className={styles.title}>The Center for the Less Good Idea</h1>
                        <div className={styles.description}>William Kentridge, Bronwyn Lace et plus de trente artistes en résidence</div>
                        <div>
                            <div className={styles.date}>Du mardi 14 mai 2024 au lundi 20 mai 2024</div>
                            <div className={styles.hour}>19h00 — 22h00</div>
                            <div className={styles.place}>Fondation Cartier</div>
                        </div>
                    </div>

                    <div className={styles.text}>
                        <h1 className={styles.title}>Pas d' évènement aujourd'hui</h1>
                        <div className={styles.description}>Parcourez le calendrier pour découvrir notre sélection d'évènements</div>
                    </div>
                </div>

            </section>
        </div >
    )

}

