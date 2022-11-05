import { MongoClient } from '../../deps.ts';
import { config } from '../../deps.ts';
import { Schema } from '../objects/schema.ts';

const env = config();
const client = new MongoClient();
await client.connect({
    db: env.MONGO_DB,
    tls: true,
    servers: [
        { 
        host: env.MONGO_HOST,
        port: 27017,
        },
    ],
    credential: {
        username: env.MONG_HOST_USERNAME,
        password: env.MONG_HOST_PASSWORD,
        db: env.MONGO_DB,
        mechanism: "SCRAM-SHA-1",
    },
});
    
const db = client.database(env.MONGO_DB);

export async function addRecord(collection: string, id: string, data: any) {
    const dbCollection = db.collection<Schema>(collection);
    await dbCollection.insertOne({
        _id: id,
        ...data,
    });
}

export async function getRecord(collection:string, id: string) {
    const dbCollection = db.collection<Schema>(collection);
    return await dbCollection.findOne({ _id: id });
}