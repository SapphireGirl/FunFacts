import { Router, Request, Response } from 'express';
import { FunFactsService } from '../services/funfactsService';

const router = Router();
const service = new FunFactsService();

// GET /api/funfacts
router.get('/', async (req: Request, res: Response) => {
    try {
        const funFacts = await service.getAllFunFacts();
        res.json(funFacts);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch fun facts' });
    }
});

// GET /api/funfacts/:id
router.get('/:id', async (req: Request, res: Response) => {
    try {
        const funFact = await service.getFunFactById(req.params.id);
        if (funFact) {
            res.json(funFact);
        } else {
            res.status(404).json({ error: 'Fun fact not found' });
        }
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch fun fact' });
    }
});

// POST /api/funfacts
router.post('/', async (req: Request, res: Response) => {
    try {
        const funFact = req.body;
        await service.createFunFact(funFact);
        res.status(201).json({ message: 'Fun fact created' });
    } catch (err) {
        res.status(500).json({ error: 'Failed to create fun fact' });
    }
});

export default router;
