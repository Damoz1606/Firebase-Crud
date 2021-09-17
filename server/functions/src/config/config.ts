import * as admin from 'firebase-admin'
import serviceAccount from "./fb-crud-api-firebase-adminsdk-62mgv-3d576a3e32.json";

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});
export const database = admin.firestore();