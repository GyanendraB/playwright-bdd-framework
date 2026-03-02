const reporter = require('cucumber-html-reporter');
const fs = require('fs');

const jsonPath = 'reports/cucumber-report.json';
const outputPath = 'reports/cucumber-report.html';

if (!fs.existsSync(jsonPath)) {
  console.error(`Cucumber JSON not found at ${jsonPath}. Run tests first to generate it.`);
  process.exit(2);
}

const options = {
  theme: 'bootstrap',
  jsonFile: jsonPath,
  output: outputPath,
  reportSuiteAsScenarios: true,
  launchReport: false,
  metadata: {
    "App Version": "1.0.0",
    "Test Environment": process.env.ENV || 'qa',
    "Browser": process.env.BROWSER || 'chromium',
    "Platform": process.platform
  }
};

reporter.generate(options);
console.log(`Generated cucumber HTML report: ${outputPath}`);
