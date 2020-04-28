# HelloWorld: 

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.3.

## Development server:

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code To Generate New Component: 

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build:

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Adding Boostrap:

Run `npm install bootstrap@4.0.0-beta.2 jquery popper.js` to install the Bootsrap and its dependencies. Go to package.json file and remove `^` symbol infront of the Bootstrap dependency to avoid automatically updating this version in the future.

## Add dependencies to Angular.json
        
        "styles": [
            "src/styles.css",
            "./node_modules/bootstrap/dist/css/bootstrap.css"
        ],
        "scripts": [
            "./node_modules/popper.js/dist/umd/popper.js",
            "./node_modules/jquery/dist/jquery.js",
            "./node_modules/bootstrap/dist/js/bootstrap.js"
        ]