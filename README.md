# Test babel error

## To reproduce in Docker

```
docker run -t -v $(pwd):/app -w /app node:6.10.0 sh -c "rm -Rf node_modules/ && yarn install && ./node_modules/.bin/jest"
```
