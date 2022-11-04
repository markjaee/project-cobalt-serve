import { Router }from 'https://deno.land/x/oak/mod.ts'
import { getMySpace } from './controllers/space/myspace.ts';
import { addUser, deleteUser, editUser } from './controllers/utils/users.ts';

const router = new Router();

//👇 routes setup
router.get('/my/:id', getMySpace);

export default router;