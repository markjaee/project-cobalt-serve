import { Router } from './deps.ts';
import { getMySpace } from './controllers/space/myspace.ts';

const router = new Router();

//👇 routes setup
router
    .get('/my/:id', getMySpace); //displaying your own space

export default router;