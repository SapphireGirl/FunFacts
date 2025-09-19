import AWS from 'aws-sdk';
import { DocumentClient } from 'aws-sdk/clients/dynamodb';
import { FunFact } from '../models/funfact';

const TABLE_NAME = process.env.DYNAMODB_TABLE || 'FunFacts';

const dynamoDb = new AWS.DynamoDB.DocumentClient();

export class FunFactsRepository {
    async getAll(): Promise<FunFact[]> {
        const params: DocumentClient.ScanInput = {
            TableName: TABLE_NAME,
        };
        const result = await dynamoDb.scan(params).promise();
        return (result.Items as FunFact[]) || [];
    }

    async getById(id: string): Promise<FunFact | null> {
        const params: DocumentClient.GetItemInput = {
            TableName: TABLE_NAME,
            Key: { id },
        };
        const result = await dynamoDb.get(params).promise();
        return (result.Item as FunFact) || null;
    }

    async create(funFact: FunFact): Promise<void> {
        const params: DocumentClient.PutItemInput = {
            TableName: TABLE_NAME,
            Item: funFact,
        };
        await dynamoDb.put(params).promise();
    }
}
