import { ApiClient } from './ApiClient';

export class UserApi {
  constructor(private client: ApiClient) {}

  async getUsers() {
    return this.client.getContext().get('/users');
  }

  async getUserById(id: number) {
    return this.client.getContext().get(`/users/${id}`);
  }

  async createUser(payload: Record<string, unknown>) {
    return this.client.getContext().post('/users', {
      data: payload
    });
  }

  async updateUser(id: number, payload: Record<string, unknown>) {
    return this.client.getContext().put(`/users/${id}`, {
      data: payload
    });
  }

  async patchUser(id: number, payload: Record<string, unknown>) {
    return this.client.getContext().patch(`/users/${id}`, {
      data: payload
    });
  }

  async deleteUser(id: number) {
    return this.client.getContext().delete(`/users/${id}`);
  }
}
