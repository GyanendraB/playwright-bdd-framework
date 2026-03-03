module.exports = {
  default: {
    require: [
      "src/steps/**/*.ts",
      "src/hooks/**/*.ts"
    ],
    requireModule: ["ts-node/register/transpile-only"],
    format: [
      "progress-bar",
      "summary",
      "json:reports/cucumber-report.json",
      "allure-cucumberjs/reporter"
    ],
    paths: [
      "features/**/*.feature"
    ],
    parallel: 10
  }
};