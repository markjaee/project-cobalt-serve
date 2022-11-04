const addUser = ({ request, response }: { request: any; response: any }) => {
    const output : any = {data: "helloooooo"};
    if (output) {
        response.status = 200;
        response.body = output;
    } else {
        response.status = 404;
        response.body = { message: `Book not found.` };
    }   
};

const editUser = ({ request, response }: { request: any; response: any }) => {
    const output : any = {data: "helloooooo"};
    if (output) {
        response.status = 200;
        response.body = output;
    } else {
        response.status = 404;
        response.body = { message: `Book not found.` };
    }   
};

const deleteUser = ({ request, response }: { request: any; response: any }) => {
    const output : any = {data: "helloooooo"};
    if (output) {
        response.status = 200;
        response.body = output;
    } else {
        response.status = 404;
        response.body = { message: `Book not found.` };
    }   
};

export { addUser, editUser, deleteUser };