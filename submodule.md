## Creating Repository

- Create a new repository for mobile app .
- Clone the repository in the local machine .
- As of now the repository should be empty .

## Adding submodule to the mobile app repository

- copy the https url of the web-app repository.
- being there in mobile app repository(in local machine), run the following command to create a submodule of web-app in the mobile app.
  ```git
  git submodule add <url of the web app that you have copied as per point 1>
  ```
  Example: `git submodule add https://github.com/gokulprasadlogan/web-app`
- This will create a clone of the last commit of the web-app repository.
  **Exampe Folder structure of mobile-app repo**:
  ```zsh
    .
    └── mobile-app
        ├── web-app
            ├── README.md
            ├── eslint.config.js
            ├── index.html
            ├── package.json
            ├── public
            │   └── vite.svg
            ├── src
            │   ├── App.css
            │   ├── App.tsx
            │   ├── assets
            │   │   └── react.svg
            │   ├── index.css
            │   ├── main.tsx
            │   └── vite-env.d.ts
            ├── tsconfig.app.json
            ├── tsconfig.json
            ├── tsconfig.node.json
            ├── vite.config.ts
            └── yarn.lock
  ```
- You should not made any changes in the web-app folder.

## Adding Capacitor project to the mobile app repo

- In mobile app root folder create a `package.json` file with the help of the following command.
