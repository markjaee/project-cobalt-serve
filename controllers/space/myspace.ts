import { db } from '../../db/config/mongodb.ts';

const getMySpace = ({ params, response }: { params: { id: string }; response: any }) => {
  if (db) {
    console.log("Database successfully connected");
    response.status = 200;
    response.body = JSON.stringify(db);
  } else {
    response.status = 404;
    response.body = { message: `Book not found.` };
  }   
}
  
export { getMySpace };