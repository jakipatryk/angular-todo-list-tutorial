# App for Community-Based Angular Course on [utopian.io](https://utopian.io/)

## Curriculum so far:
1. [Setting up our project](https://utopian.io/utopian-io/@jakipatryk/community-based-angular-course-from-scratch-setting-up-our-project)
2. [At the beginning there was chaos](https://utopian.io/utopian-io/@jakipatryk/cbac-2-at-the-beginning-there-was-chaos)

## How to participate in this community-based course?

Do you want to do pull request with changes to my code or even with a new feature? 

Take advantage of the utopian.io, which will allow you to get a reward for your contribution to this project. You don't have to write theoretical issues to what you have created. That's what I'll take care of. If your pull request is accepted and you add a contribution to utopian.io, I will resteem your post and **30%** of the reward from the part of the course which you have contributed to will go to you (if more than one pull request is accepted, the reward will be divided equally for all).

Of course, not only developers are welcome. In addition to the resteem, another **10%** reward of each post will go to people who will publish other contributions to jakipatryk/angular-todo-list-tutorial project (e.g. a proven increase in course visability).

## Development

### Environment configuration variables

Initialize your Google Firebase project (simply follow the instructions in the [first part of the course](https://utopian.io/utopian-io/@jakipatryk/community-based-angular-course-from-scratch-setting-up-our-project)) and add this code to src/environments/environment.ts:
```typescript
export const environment = {
production: false,
firebaseConfig: {
apiKey: '<your-apikey>',
authDomain: '<your-project-authdomain>',
databaseURL: '<your-database-URL>',
projectId: '<your-project-id>',
storageBucket: '<your-storage-bucket>',
messagingSenderId: '<your-messaging-sender-id>'
}
};
```

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
