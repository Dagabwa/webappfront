## Backend

Install `cors` on the backend and add the following line in the index.js:
```bash
const cors = require("cors");
...
app.use(cors());
```
Then run it.

## Frontend
To run the app, go at least to the my-app repository and enter the following command :
```bash
npm run dev
```
Then, go on `http://127.0.0.1:5173/` or directly on `http://127.0.0.1:5173/login`.

## User Stories

All the user stories asked are possible :

US1: As a random visitor, I want to be able to register an account or log-in, so I can
access all features

US2: As a random visitor, I want to be redirected to the login/register page when I click on
“location" tab, so that I know I must log-in to see its content

US3: As a logged-in user, I want to see locations and be able to click on one location to
open a modal containing details, so that the website is useful

US4: As an “admin" user, I want to see a “Add Location” button in the location page, so
that I can create a new location

US5: As an “admin" user, I want to see a button to edit locations in the array of locations,
so that I can edit existing locations

US6: As an “admin" user, I want to see a button to delete locations in the array of
locations so that I can delete existing locations

