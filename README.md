

# Tervetuloa FTM web projektin gittiin.


## Nettisivun linkki

Nettisivulla kaikki toteutukset eivät toimi oikein niin käynnistä sivu localisti, jotta voit testata toimivuuden täysin!

https://ftmwebproject-371315.ew.r.appspot.com/

## Käyttöönotto lokalisti.

Importtaa dumppi tiedosto MySQL Workbenchiin.

Aja npm install juureen ja server kansioon asentaaksesi tarvittavat riippuvaisuudet.

Tee .env server tiedostoon näillä tiedoilla.

ACCESS_TOKEN_SECRET = jsfgfjguwrg8783wgbjs849h2fu3cnsvh8wyr8fhwfvi2g225<br/>
REFRESH_TOKEN_SECRET = 825y8i3hnfjmsbv7gwajbl7fobqrjfvbs7gbfj2q3bgh8f42<br/>
DB_HOST = localhost<br/>
DB_USER = root<br/>
DB_PASSWORD = root<br/>
DB_DATABASE = climate<br/>
DB_DIALECT = mysql<br/>

Mene server/config.js ja vaihda password käyttämään DB_PASSWORD.

Mene server/config/Database.js ja seuraa kommentointia vaihda myös password käyttämään DB_PASSWORD.

Mene server/index.js ja vaiha 15 rivillä cors origin kommentoinnin mukaan.

Aja server kansiossa npm run devStart.

Aja juuri kansiossa npm start.

README tiedosto ei ole viimeistelty koska palautus vasta 19.12, joten tässä ohjeet lokaaliin käyttöönottoon.

## Tekijät
Kaikki toimivat full-stack kehittäjinä, tarkemmat työnkuvaukset tulevat lopullisessa README-palautuksessa.
Leevi Järvinen, Veikka Kursula, Vili Kyrö ja Joona Hautaniemi.

## Testaaminen
Login-API testaaminen on Login_Testing branchissa. Testikoodi aiheutti konfliktejä pääohjelmaan joita ei kerennyt siistimään.
