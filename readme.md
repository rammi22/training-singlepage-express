# Codebeispiel::SinglePageApplikation (SPA)
Dieses Projekt dient als *einfaches Codebeispiel* für eine **SPA (SinglePageApplikation)**
## Diese Applikation
 Der Server nimmt einen **Post-Request** entgegen, validiert diesen und sendet eine entsprechende Antwort.

Mit der Eingabe Ihres Namens in das bereitgestellte Formular und dem Klick auf Senden wird Ihre Eingabe zunächst lokal (Client) validiert und bei erfolgreicher Validierung an den Server im **JSON-Format** gesendet übermittelt.
Die vom Server gesendete **Antwort im JSON-Format** wird wiederum clientseitig aufgearbeitet und ausgegeben. 

## Starten der App
- vor Starten der App, node-Abhängigkeiten installieren, siehe ```dev/package.json```
- App Starten auf Konsole (CLI) von ```training-singlepage-express/dev``` mit ```npm start```
- Start-Script ```dev/app.js```

## Tests
- im Ordner ```dev/tests```
- Framework **Jest** und **jest-puppeeter**
- Tests starten ```npm run test```

## Eingesetzte Werkzeuge und Techniken
Grundsätzlich läuft die Applikation Serverseitig mit Node.js (V 12.15.0 LTS)

### Frameworks und Compiler
Die Umsetzung erfolgt mit folgenden *Frameworks*:
-  **Node.js** ---> Express.js (V 4.17.1)
-  **CSS Styling** ---> LESS (lesscss V 3.11.1) 

Um serveseitige Javascript-Dateien ```assets/js/*``` auf der Client-Seite ```public/js/*/``` zu Verfügung zu stellen, wird der **Compiler** ---> Webpack (V 4.42.0) verwendet.

### Entwicklerwerkzeuge
- **IDE** ---> Visual Studio Code (VSC)
- **Codeanalyse** ---> ESLint (V 6.8.0)
- **Versionsverwaltung** ---> GIT (V 2.18.0.windows.1), TortoiseGit (V 2.9.0.0) 

## Möglicher UseCase für eine SPA

Für einen Warenkorb (eine Unterseite) werden sämtliche Logiken, wie z.Bsp. *Produktauswahl*, *Berechnungen* oder vom Server gelieferte Produkt*listen filtern*, via JavaScript **Clientseitig abgearbeitet** und zu persistierende Daten als *String im JSON-Format* mit mit einem POST/UPDATE-Request an den Server geschickt.

Ein **Vorteil dieser Vorgehensweise** unter vielen: Dieses Vorgehen entlasten den Server und die Kommunikation über das Internet und der Benutzer auf der Client-Seite hat besseres Feeling beim Benutzen der App.