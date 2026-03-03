import { Given, Then } from '@cucumber/cucumber';
import { config } from '../config/config';
import { CustomWorld } from '../fixtures/world';
import { RouteSmokePage } from '../pages/RouteSmokePage';

type RouteCheckResult = {
  route: string;
  status: number;
};

let routeSmokePage: RouteSmokePage;
let routeResults: RouteCheckResult[] = [];

Given('I open the remaining UI routes:', async function (this: CustomWorld, dataTable) {
  routeSmokePage = new RouteSmokePage(this.page);
  routeResults = [];

  const rows = dataTable.hashes() as Array<{ route: string }>;

  for (const row of rows) {
    const route = row.route.trim();
    const url = route.startsWith('http') ? route : `${config.baseUrl}${route}`;
    const status = await routeSmokePage.openAndAssertSuccess(url);
    routeResults.push({ route, status });
  }
});

Then('all remaining UI routes should load successfully', async function () {
  const failed = routeResults.filter((item) => item.status >= 400);

  if (failed.length > 0) {
    const details = failed.map((item) => `${item.route} (${item.status})`).join(', ');
    throw new Error(`Some routes failed: ${details}`);
  }
});
