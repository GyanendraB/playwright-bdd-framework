import { After, Given, Then, When } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { ApiClient } from '../api/ApiClient';
import { PracticeApi } from '../api/PracticeApi';
import { UserApi } from '../api/UserApi';

let client: ApiClient;
let practiceApi: PracticeApi;
let userApi: UserApi;
let response: any;
let responseBody: any;

Given('API client is initialized with base url {string}', async function (baseUrl: string) {
  client = new ApiClient();
  const normalizedBaseUrl = baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`;
  await client.init(normalizedBaseUrl);
  practiceApi = new PracticeApi(client);
  userApi = new UserApi(client);
  response = undefined;
  responseBody = undefined;
});

When('I send a {string} request to {string}', async function (method: string, endpoint: string) {
  response = await practiceApi.request(method, endpoint);
  responseBody = await response.json();
});

When('I send a {string} request to {string} with JSON payload:', async function (method: string, endpoint: string, docString: string) {
  const payload = JSON.parse(docString);
  response = await practiceApi.request(method, endpoint, payload);
  responseBody = await response.json();
});

When('I fetch all users', async function () {
  response = await userApi.getUsers();
  responseBody = await response.json();
});

When('I fetch user by id {int}', async function (id: number) {
  response = await userApi.getUserById(id);
  responseBody = await response.json();
});

When('I create a user with payload:', async function (docString: string) {
  const payload = JSON.parse(docString);
  response = await userApi.createUser(payload);
  responseBody = await response.json();
});

When('I update user id {int} with payload:', async function (id: number, docString: string) {
  const payload = JSON.parse(docString);
  response = await userApi.updateUser(id, payload);
  responseBody = await response.json();
});

When('I patch user id {int} with payload:', async function (id: number, docString: string) {
  const payload = JSON.parse(docString);
  response = await userApi.patchUser(id, payload);
  responseBody = await response.json();
});

When('I delete user id {int}', async function (id: number) {
  response = await userApi.deleteUser(id);
  try {
    responseBody = await response.json();
  } catch {
    responseBody = {};
  }
});

Then('the API response status should be {int}', async function (expectedStatus: number) {
  expect(response.status()).toBe(expectedStatus);
});

Then('the API response status should be one of {string}', async function (allowedStatuses: string) {
  const expected = allowedStatuses
    .split(',')
    .map((value) => Number(value.trim()))
    .filter((value) => !Number.isNaN(value));

  expect(expected).toContain(response.status());
});

Then('the API response should include key {string}', async function (key: string) {
  expect(responseBody).toBeTruthy();
  expect(responseBody[key]).not.toBeUndefined();
});

Then('the API response key {string} should equal {string}', async function (key: string, expected: string) {
  expect(String(responseBody[key])).toBe(expected);
});

Then('the API response should be an array', async function () {
  expect(Array.isArray(responseBody)).toBe(true);
});

Then('the API response array should not be empty', async function () {
  expect(Array.isArray(responseBody)).toBe(true);
  expect(responseBody.length).toBeGreaterThan(0);
});

After({ tags: '@api' }, async function () {
  if (client) {
    await client.dispose();
  }
});
