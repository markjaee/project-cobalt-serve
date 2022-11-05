import { MongoClient } from "https://deno.land/x/mongo@v0.22.0/mod.ts";
import { config } from "https://deno.land/x/dotenv/mod.ts";
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
    
 export { db };