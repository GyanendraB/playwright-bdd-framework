module.exports = {
  default: {
    require: [
      "src/steps/**/*.ts",
      "src/hooks/**/*.ts"
    ],
    requireModule: ["ts-node/register"],
    format: [
      "progress-bar",
      "summary",
      "json:reports/cucumber-report.json",
      "rerun:@rerun.txt",                 // 👈 important
      "allure-cucumberjs/reporter"
    ],
    paths: [
      "features/**/*.feature"
    ],
    parallel: 2
  },

  rerun: {
    require: [
      "src/steps/**/*.ts",
      "src/hooks/**/*.ts"
    ],
    requireModule: ["ts-node/register"],
    format: [
      "progress-bar",
      "summary",
      "allure-cucumberjs/reporter"
    ],
    paths: [
      "@rerun.txt"                        // 👈 failed scenarios
    ]
  }
};