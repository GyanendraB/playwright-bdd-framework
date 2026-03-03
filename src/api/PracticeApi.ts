import { APIResponse } from '@playwright/test';
import { ApiClient } from './ApiClient';

export class PracticeApi {
  constructor(private client: ApiClient) {}

  async request(method: string, endpoint: string, payload?: Record<string, unknown>): Promise<APIResponse> {
    const context = this.client.getContext();
    const upperMethod = method.toUpperCase();
    const target = endpoint.startsWith('/') ? endpoint.slice(1) : endpoint;

    switch (upperMethod) {
      case 'GET':
        return context.get(target);
      case 'POST':
        return context.post(target, payload ? { data: payload } : undefined);
      case 'PUT':
        return context.put(target, payload ? { data: payload } : undefined);
      case 'PATCH':
        return context.patch(target, payload ? { data: payload } : undefined);
      case 'DELETE':
        return context.delete(target);
      default:
        throw new Error(`Unsupported HTTP method: ${method}`);
    }
  }
}
