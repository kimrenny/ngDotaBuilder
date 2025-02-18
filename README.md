# ngDotaBuilder

## Project Description

**ngDotaBuilder** is a tool for selecting items and talents in **Dota 2**.  
This project helps players choose a hero and get item build recommendations for different stages of the game: **Start Game, Early Game, Mid Game, and Late Game**.  
It is designed to assist both beginners and experienced players in optimizing their strategies.

## Dependencies

This project relies on the following dependencies:

- **Angular**: `^19.1.0`
- **RxJS**: `~7.8.0`
- **Zone.js**: `~0.15.0`
- **TSLib**: `^2.3.0`

For development, the following dependencies are also used:

- **Angular CLI**: `^19.1.6`
- **TypeScript**: `~5.7.2`
- **Karma** (for testing): `~6.4.0`
- **Jasmine** (for unit tests): `~5.5.0`

For a complete list of dependencies, check the `package.json` file.

## How to Run the Project

### 1. Clone the Repository

Clone the project to your local machine:

```sh
git clone https://github.com/kimrenny/ngDotaBuilder.git
```

Navigate to the project folder:

```sh
cd ngDotaBuilder
```

### 2. Install Dependencies

Run the following command to install all required dependencies:

```sh
npm install
```

### 3. Configure API Keys

Before running the project, you need to set up API keys.
Open the following file:

```sh
src/app/environments/keys.environments.ts
```

### 4. Run the Project

Once configured, start the project with:

```sh
ng serve --proxy-config proxy.conf.json
```

Then, open the following URL in your browser:

```sh
http://localhost:4200
```

Now you can use ngDotaBuilder!

## Contact

For collaboration and contact with me - [kimrenny.tech@gmail.com](mailto:kimrenny.tech@gmail.com).
