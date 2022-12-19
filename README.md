
# FTM 2022 ilmastoprojekti 

## Projektin aihe ja tarkoitus

Projekti on OAMK:n 2-vuoden ohjelmistokehityksen opiskelijoiden harjoitustyö.

Projektin aiheena oli tehdä ilmastonmuutokseen liittyvä visualisointityökalu, johon tehdään erilaisilla datapaketeilla kuvaajia visualisoimaan ilmaston lämpötilatietoja ja päästölähteitä. Sovelluksessa on mahdollista luoda oma käyttäjä, jolla voi luoda oman visualisointinäkymän asettelemalla tekemiämme kuvaajia omaan tyyliin. 

Projektin tarkoitus oli toteuttaa web-sovellus ryhmässä ja perehtyä käyttämään Kanban-mallia. 

Tekstin tekoon ja muokkaukseen ovat osallistuneet kaikki ryhmän jäsenet:<br/>
Veikka Kursula, Leevi Järvinen, Vili Kyrö ja Joona Hautaniemi 

Sovelluksen esittely. <br/>
Nettisivun osoite: https://ftmwebproject-371315.ew.r.appspot.com/ 

Esittely video: https://www.youtube.com/watch?v=-71kJFHAIpY 

## Mitä teknologioita projektissa on käytetty? 

### Frontend 

Tässä sovelluksessa frontend on toteutettu käyttämällä ReactJS:ää (JavaScript-kirjasto), Bootstrapiä (CSS-kehys) ja CSS:ää HTML-tyylien muokkaamiseen. Erilaisten pakettien asentamiseen käytimme npm:ää (node package manager), joka oli ryhmän työntekijöille entuudestaan tuttu. Näistä asennetuista paketeista eniten käytettyjä olivat React-Chartjs-2, Axios, Bootsrap sekä React-Bootstrap. 

![frontend](https://user-images.githubusercontent.com/97738367/208496819-af9d4fc4-e33a-407c-8670-6d395be8c3e9.png)

### Backend 

Sovelluksen backend on toteutettu käyttämällä JavaScriptiä. Muun muassa eri tietokantaan liittyvät pyynnöt ynnä muut hoituvat sen puolella. Paketeista keskeisiä käytettyjä ovat esimerkiksi express, cors ja dotenv. Asentamiseen käytettiin npm:ää (node package manager) totuttuun tapaan. 

![backend](https://user-images.githubusercontent.com/97738367/208496855-c9a0e389-0266-4f24-8e17-fa09a8bea655.png)

## Tietokanta 

Projektissa tietokannaksi valittiin MySQL, joka on relaatiotietokanta järjestelmä. MySQL valittiin tietokantajärjestelmäksi sen takia, koska se oli ryhmän jäsenien kesken ennestään tuttu. Tietokanta sisältää kuvaajien datat ja käyttäjätiedot. 

## Versionhallinta 

Projektissa versionhallintatyökaluna käytettiin GitHubia, joka oli ryhmän jäsenille ennestään tuttu. 

## Ketkä tekivät ja mikä oli kenenkin rooli 

Projektin tekijät ovat Leevi Järvinen (LeeviJarvinen), Joona Hautaniemi (Hakis1), Veikka Kursula (VeikkaK) ja Vili Kyrö (vilikyro). 

Projektissa kaikki toimivat full-stack ohjelmoijina. 

## Sovelluksen käyttöönotto 

- Importtaa dumppi tiedosto MySQL Workbenchiin 

- Aja npm install juureen ja server kansioon asentaaksesi tarvittavat riippuvaisuudet 

- Tee .env server tiedostoon näillä tiedoilla: 
```bash
ACCESS_TOKEN_SECRET = secret_token
REFRESH_TOKEN_SECRET = another_secret_token
DB_HOST = localhost
DB_USER = root
DB_PASSWORD = secret_password
DB_DATABASE = climate
DB_DIALECT = mysql
```

- Mene server/config.js ja vaihda password käyttämään DB_PASSWORD. 

- Mene server/config/Database.js ja seuraa kommentointia vaihda myös password käyttämään DB_PASSWORD 

- Mene server/index.js ja vaiha 15 rivillä cors origin kommentoinnin mukaan 

- Aja server kansiossa “npm run devStart” 

- Aja juuri kansiossa “npm start” 

## Testit 

Login-API testaaminen on Login_Testing branchissa. Testikoodi aiheutti konfliktejä pääohjelmaan joita ei kerennyt siistimään. 
