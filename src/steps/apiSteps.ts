import { Given, Then, When } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { ApiClient } from '../api/ApiClient';
import { UserApi } from '../api/UserApi';

let client: ApiClient;
let userApi: UserApi;
let response: any;

Given('API base url is configured', async function () {
  client = new ApiClient();
  await client.init('https://jsonplaceholder.typicode.com');
  userApi = new UserApi(client);
});

When('I fetch all users', async function () {
  response = await userApi.getUsers();
});

Then('response status should be 200', async function () {
  expect(response.status()).toBe(200);
  await client.dispose();
});

When('I create a new user', async function () {
  response = await userApi.createUser({
    name: 'Gyanendra',
    email: 'test@example.com'
  });
});

Then('user should be created successfully', async function () {
  expect(response.status()).toBe(201);
  await client.dispose();
});
