
const getMySpace = ({ params, response }: { params: { id: string }; response: any }) => {
  if (params) {
    console.log("Database successfully connected");
    response.status = 200;
    response.body = JSON.stringify(params);
  } else {
    response.status = 404;
    response.body = { message: `Book not found.` };
  }   
}
  
export { getMySpace };