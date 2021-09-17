import * as functions from "firebase-functions";

import * as express from 'express';
import * as  cors from 'cors';

import { database } from './config/config'

const app = express();

app.set('port', process.env.PORT || 3000)

app.use(cors());

app.get('/', (req, res) => {
    res.json({ msg: "Hello" })
})

app.post('/', async (req, res) => {
    await database.collection('products').doc().create({
        name: req.body.name
    });
    return res.status(204).json()
})

export default functions.https.onRequest(app);

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
