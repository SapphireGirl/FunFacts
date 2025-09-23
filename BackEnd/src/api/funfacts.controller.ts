import { Router, Request, Response } from 'express';

const router = Router();

// Mock data for development
function formatDate(date: Date): string {
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}

const mockFunFacts = [
    {
        id: '1',
        fact: 'Honey never spoils.',
        category: 'Food',
        createdAt: formatDate(new Date())
    },
    {
        id: '2',
        fact: 'Bananas are berries, but strawberries are not.',
        category: 'Botany',
        createdAt: formatDate(new Date())
    },
    {
        id: '3',
        fact: 'Octopuses have three hearts.',
        category: 'Animals',
        createdAt: formatDate(new Date())
    }
];

// GET /api/funfacts
router.get('/', (req: Request, res: Response) => {
    try {
        console.log('GET /api/funfacts route hit');
        if (!mockFunFacts || !Array.isArray(mockFunFacts)) {
            throw new Error('mockFunFacts is not defined or not an array');
        }
        console.log('mockFunFacts:', mockFunFacts);
        res.json(mockFunFacts);
    } catch (err) {
        console.log("################################################");
        console.error('Error in GET /api/funfacts:', err);
        res.status(500).json({ error: 'Failed to fetch fun facts', details: err instanceof Error ? err.message : err });
    }
});

// GET /api/funfacts/:id
router.get('/:id', async (req: Request, res: Response) => {
    const funFact = mockFunFacts.find(f => f.id === req.params.id);
    if (funFact) {
        res.json(funFact);
    } else {
        res.status(404).json({ error: 'Fun fact not found' });
    }
});

// POST /api/funfacts
router.post('/', async (req: Request, res: Response) => {
    // For now, just echo back the posted fun fact
    res.status(201).json({ message: 'Fun fact created (mocked)', funFact: req.body });
});

export default router;
