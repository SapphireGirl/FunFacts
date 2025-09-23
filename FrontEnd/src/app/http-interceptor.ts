import { Injectable } from '@angular/core';
import {
    HttpEvent,
    HttpInterceptor,
    HttpHandler,
    HttpRequest,
    HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class AppHttpInterceptor implements HttpInterceptor {
    
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // Example: Add headers or log requests here
        // const cloned = req.clone({ setHeaders: { Authorization: 'Bearer token' } });
        return next.handle(req).pipe(
            catchError((error: HttpErrorResponse) => {
                // Global error handling
                console.error('HTTP Error:', error);
                return throwError(() => error);
            })
        );
    }
}
