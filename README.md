This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

This project about complete [challenge](https://gist.github.com/istarkov/2fd23c75bba220571cf4bb03246c5c05).
Using [Hasura](https://hasura.io/) for REST api calls.
Using Postgres database on Heroku that created with `Create Heroku Database` in [Hasura](https://hasura.io/)

## Getting Started

First, configure the `.env.local` file.
```
cp .env.example .env.local
```
You can find `.env.example` file in root of this project , that will have values like: 

```
HASURA_API_URL=
HASURA_ADMIN_SECRET=
```

`HASURA_API_URL` - this is URL of hasura project (using API rest, not GraphQL).

`HASURA_ADMIN_SECRET` - this is a key for authorization on Hasura.

Second, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

The home page of app will show you a menu with 3 links, that will redirect you to results pages.
