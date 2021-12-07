## What is it

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

###This project about complete [challenge](https://gist.github.com/istarkov/2fd23c75bba220571cf4bb03246c5c05).

## [Hasura Section](https://hasura.io/)

### Project setup

Firstly was created a new Project with [https://cloud.hasura.io/](https://cloud.hasura.io/) default setup.
With Postgres database on Heroku that created with `Create Heroku Database` option.

### Data keeping 

All data(like long_tails table etc.) taken from [challenge](https://gist.github.com/istarkov/2fd23c75bba220571cf4bb03246c5c05) and inserted with Hasura interface into database.
The `example.json` file is keeping in [glitch](https://glitch.com/) as a simple project.

### Project Configuration

Firstly was generated a simple GraphQl query depends on database structure.The next step was about create an [Action](https://hasura.io/docs/latest/graphql/core/actions/index.html) and [Action handlers](https://hasura.io/docs/latest/graphql/core/actions/action-handlers.html).

Relative to the documentation [Action handlers](https://hasura.io/docs/latest/graphql/core/actions/action-handlers.html) was created and deployed with [glitch](https://glitch.com/), we use it for get the `example.json` file and throw it to our [Hasura]() app.

### API REST configuration

After all steps above are passed we can [configure a simple endpoint](https://hasura.io/docs/latest/graphql/core/api-reference/restified.html) using Hasura interface and mix our Query into database and Action with example.json to get all data together.

## Getting Started

First, configure the `.env.local` file.
```bash
cp .env.example .env.local
```
You can find `.env.example` file in root of this project , that will have values like: 

```
HASURA_API_URL=
HASURA_ADMIN_SECRET=
```

`HASURA_API_URL` - this is URL of hasura project (using API rest).

`HASURA_ADMIN_SECRET` - this is a key for authorization on Hasura.

Second, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

The home page of app will show you a menu with 3 links, that will redirect you to results pages.

## Deployment

### App

You can find it by this [LINK](https://challenge-five-gamma.vercel.app/). 

This app deployed using [Vercel](https://vercel.com/).
With environment configuration like in `.env.example`.
All other configs are defaults for [Vercel](https://vercel.com/).

### Glitch
All glitch project that was mentioned in this doc have a default options of configuration.

