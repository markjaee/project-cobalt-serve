import { Router }from 'https://deno.land/x/oak/mod.ts'
import { getMySpace } from './controllers/space/myspace.ts';

const router = new Router();
router.get('/my/:id', getMySpace);

export default router;