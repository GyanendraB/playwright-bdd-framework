import { ApiClient } from './ApiClient';

export class UserApi {
  constructor(private client: ApiClient) {}

  async getUsers() {
    return await this.client.getContext().get('/users');
  }

  async createUser(payload: any) {
    return await this.client.getContext().post('/users', {
      data: payload
    });
  }

  async deleteUser(id: number) {
    return await this.client.getContext().delete(`/users/${id}`);
  }
}
