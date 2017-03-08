# Test babel error

## To reproduce in Docker

```
# Install Dependencies
docker run -t -v $(pwd):/app -w /app node:6.10.0 sh -c "rm -Rf node_modules/ && yarn install"

# Run react-scripts test
docker run -t -v $(pwd):/app -w /app node:6.10.0 sh -c "./node_modules/.bin/react-scripts test --env=jsdom"

# Run Jest directly
docker run -t -v $(pwd):/app -w /app node:6.10.0 sh -c "./node_modules/.bin/jest"

# Get shell access
docker run -ti -v $(pwd):/app -w /app node:6.10.0 bash
```

## Running `./node_modules/.bin/react-scripts test --env=jsdom`

```
 FAIL  src/App.test.js
  ● Test suite failed to run

    TypeError: Cannot read property 'bind' of undefined

      at Runtime._createRuntimeFor (node_modules/jest-runtime/build/index.js:640:37)
      at process._tickCallback (internal/process/next_tick.js:103:7)

Test Suites: 1 failed, 1 total
Tests:       0 total
Snapshots:   0 total
Time:        2.157s
Ran all test suites.

Watch Usage
 › Press o to only run tests related to changed files.
 › Press p to filter by a filename regex pattern.
 › Press t to filter by a test name regex pattern.
 › Press q to quit watch mode.
 › Press Enter to trigger a test run.
```

# Running `./node_modules/.bin/jest`

```
 FAIL  src/App.test.js
  ● Test suite failed to run

    /app/src/App.js: Unexpected token (7:11)
         5 | export const test = (string) => {
         6 |   const base = { base: true, value: string };
      >  7 |   return { ...base, extends: true };
           |            ^
         8 | }
         9 |
        10 | class App extends Component {

Test Suites: 1 failed, 1 total
Tests:       0 total
Snapshots:   0 total
Time:        6.144s
Ran all test suites.
```