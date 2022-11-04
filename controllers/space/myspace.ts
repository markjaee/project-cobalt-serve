const getMySpace = ({ params, response }: { params: { id: string }; response: any }) => {
  const output : any = {data: "helloooooo"};
  if (output) {
    response.status = 200;
    response.body = output;
  } else {
    response.status = 404;
    response.body = { message: `Book not found.` };
  }   
}
  
export { getMySpace };