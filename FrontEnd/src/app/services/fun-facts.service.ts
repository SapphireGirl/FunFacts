import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

export interface FunFact {
    id: string;
    fact: string;
    category?: string;
    createdAt: string;
}

@Injectable({ providedIn: 'root' })

export class FunFactsService {
    private apiUrl = environment.apiUrl;

    constructor(private http: HttpClient) { }

    getAll(): Observable<FunFact[]> {
        console.log(('apiUrl: ' + this.apiUrl));
        return this.http.get<FunFact[]>(this.apiUrl);
    }

    getById(id: string): Observable<FunFact> {
        return this.http.get<FunFact>(`${this.apiUrl}/${id}`);
    }

    create(funFact: FunFact): Observable<any> {
        return this.http.post(this.apiUrl, funFact);
    }
}
