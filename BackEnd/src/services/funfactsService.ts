import { FunFact } from '../models/funfact';
import { FunFactsRepository } from '../repositories/funfactsRepository';

export class FunFactsService {
    private repo: FunFactsRepository;

    constructor() {
        this.repo = new FunFactsRepository();
    }

    async getAllFunFacts(): Promise<FunFact[]> {
        return this.repo.getAll();
    }

    async getFunFactById(id: string): Promise<FunFact | null> {
        return this.repo.getById(id);
    }

    async createFunFact(funFact: FunFact): Promise<void> {
        // Add any business logic/validation here
        await this.repo.create(funFact);
    }
}
