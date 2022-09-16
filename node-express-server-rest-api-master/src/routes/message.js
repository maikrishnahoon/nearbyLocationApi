import { v4 as uuidv4 } from 'uuid';
import { Router } from 'express';
import findNearbyCities from '../models/findNearbyCities';

const router = Router();

router.get('/', (req, res) => { 
  const lat =31.1471 ;
  const lon = 75.3412;
  return res.send(Object.values(findNearbyCities(lat, lon)));
});

export default router;
