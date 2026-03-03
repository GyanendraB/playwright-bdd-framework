import { APIRequestContext, request } from '@playwright/test';

export class ApiClient {
  private requestContext!: APIRequestContext;

  async init(baseURL: string) {
    this.requestContext = await request.newContext({
      baseURL,
      extraHTTPHeaders: {
        'Content-Type': 'application/json'
      }
    });
  }

  getContext() {
    return this.requestContext;
  }

  async dispose() {
    await this.requestContext.dispose();
  }
}
