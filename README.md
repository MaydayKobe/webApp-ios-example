# WebAppIosExample

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.1.

**WARNING**

> Verify that you are running node 12.4.0 by running node -v in a terminal/console window. Older
> versions produce errors, but newer versions are fine.
## Development server

```bash
npm i
npm start
```
you can point your browser at http://localhost:4200/.


## Build

```bash
ng build --prod
```

## Running unit tests

```bash
npm run test
```

## Support PWA
Now, build the project
```bash
ng build --prod
```
Because ng serve does not work with service workers, you must use a separate HTTP server to test your project locally. You can use any HTTP server. The example below uses the http-server package from npm. 
```bash
npm i -g http-server
```
To serve the directory containing your web files with http-server, run the following command:
```bash
http-server -p 8080 -c-1 dist/webApp-ios/example
```
With the server running, you can point your browser at http://localhost:8080/. Your application should load normally.
