# Example for Cypress error

### Use case

Terminal 1:

1. `yarn`
2. `yarn build`
3. `npx serve -s dist -p 4242`

Terminal 2:

1. `DEBUG=code-coverage yarn cypress:run`

=> CypressError

```
App test suite
  code-coverage parsed sent coverage +0ms
  code-coverage wrote coverage file /Volumes/Projects/work/example/.nyc_output/out.json +9ms
  code-coverage NYC file /Volumes/Projects/work/example/.nyc_output/out.json has 4 key(s) +4s
  code-coverage 1 key /Volumes/Projects/work/example/commonjsHelpers.js file path /Volumes/Projects/work/example/commonjsHelpers.js +0ms
  code-coverage 2 key /Volumes/Projects/work/example/src/routes/App.tsx file path /Volumes/Projects/work/example/src/routes/App.tsx +0ms
  code-coverage 3 key /Volumes/Projects/work/example/src/assets/styles/index.ts file path /Volumes/Projects/work/example/src/assets/styles/index.ts +0ms
  code-coverage in file /Volumes/Projects/work/example/.nyc_output/out.json all files are not found? false +4ms
  code-coverage NYC file /Volumes/Projects/work/example/.nyc_output/out.json has 4 key(s) +1ms
  code-coverage ⚠️ cannot find file /Volumes/Projects/work/example/commonjsHelpers.js with hash 9651d8954bbfc1d463a64b666e5bd9644ac85cc1 +1ms
  code-coverage calling NYC reporter with options { 'report-dir': '/Volumes/Projects/work/example/coverage', reporter: [ 'lcov', 'clover', 'json', 'json-summary' ], extension: [ '.js', '.cjs', '.mjs', '.ts', '.tsx', '.jsx' ], excludeAfterRemap: false, 'temp-dir': '/Volumes/Projects/work/example/.nyc_output', tempDir: '/Volumes/Projects/work/example/.nyc_output', reportDir: '/Volumes/Projects/work/example/coverage' } +58ms
  code-coverage current working directory is /Volumes/Projects/work/example +2ms
    1) "after all" hook: generateReport for "should check app is rendering correctly"


  0 passing (679ms)
  1 failing

  1) App test suite
       "after all" hook: generateReport for "should check app is rendering correctly":
     CypressError: `cy.task('coverageReport')` failed with the following error:

> The argument 'path' must be a string or Uint8Array without null bytes. Received '/Volumes/Projects/work/example/coverage/lcov-report/example/\x00commonjsHelpers.js.html'

https://on.cypress.io/api/task

Because this error occurred during a `after all` hook we are skipping all of the remaining tests.

Although you have test retries enabled, we do not retry tests when `before all` or `after all` hooks fail
```
