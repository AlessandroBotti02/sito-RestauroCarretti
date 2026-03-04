# Procedura creazione e pubblicazione su GitHub Pages

## 1) Creazione progetto in locale
1. Crea una cartella del progetto (es. `sito-restauro-carretti`).
2. Inserisci almeno questi file:
   - `index.html`
   - `styles.css`
3. Verifica in browser aprendo `index.html` con doppio clic.

## 2) Creazione repository su GitHub
1. Vai su GitHub e crea un nuovo repository (es. `restauro-carretti`).
2. Impostalo come pubblico (consigliato per GitHub Pages base).
3. Non è obbligatorio inizializzarlo con README se hai già i file in locale.

## 3) Collegamento cartella locale a GitHub
Apri il terminale nella cartella del progetto ed esegui:

```bash
git init
git add .
git commit -m "Prima bozza sito statico"
git branch -M main
git remote add origin https://github.com/TUO-UTENTE/NOME-REPOSITORY.git
git push -u origin main
```

## 4) Attivazione GitHub Pages
1. Apri il repository su GitHub.
2. Vai in **Settings** → **Pages**.
3. In **Build and deployment** seleziona:
   - **Source**: `Deploy from a branch`
   - **Branch**: `main`
   - **Folder**: `/ (root)`
4. Salva.

## 5) URL del sito pubblicato
1. Attendi 1-3 minuti.
2. L’URL sarà in formato:
   - `https://TUO-UTENTE.github.io/NOME-REPOSITORY/`
3. Aggiorna la pagina finché risulta online.

## 6) Collegamento a dominio personalizzato
1. Acquista/usa un dominio da provider (Aruba, OVH, Namecheap, ecc.).
2. In GitHub: **Settings** → **Pages** → **Custom domain** e inserisci il dominio.
3. Nel pannello DNS del provider imposta i record richiesti da GitHub Pages:
   - record `A` per dominio principale (apex)
   - record `CNAME` per `www` verso `TUO-UTENTE.github.io`
4. Attiva **Enforce HTTPS** in GitHub Pages quando disponibile.

## 7) Aggiornamenti futuri
Ogni modifica si pubblica con:

```bash
git add .
git commit -m "Aggiornamento sito"
git push
```

Dopo il push, GitHub Pages rigenera il sito automaticamente.
