import { Injectable } from '@angular/core';

declare global {
  interface Window { __env?: any; }
}

@Injectable({ providedIn: 'root' })
export class RuntimeEnvService {
  get(key: string): any {
    return window.__env && window.__env[key];
  }
  getAll(): any {
    return window.__env || {};
  }
}
