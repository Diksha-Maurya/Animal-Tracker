import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class AuthenticationService {
    isAuthenticated(): boolean {
        // Check if the JWT token is present in local storage or cookie
        if (typeof window !== 'undefined' && window.localStorage) {
            const token = localStorage.getItem('accessToken');
            return !!token;
        }
        return false;
    }
}