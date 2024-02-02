# Express prisma template

A basic template for Backend with Express, Prisma and TypeScript.

## Endpoints

| Method     | Route       | Body                       | Description         |
| ---------- | ----------- | -------------------------- | ------------------- |
| **GET**    | `/cats`     | _`null`_                   | Get all the cats.   |
| **GET**    | `/cats/:id` | _`null`_                   | Get a cat by id.    |
| **POST**   | `/cats`     | [`Body`](#create-cat-body) | Create a cat.       |
| **PATCH**  | `/cats/:id` | [`Body`](#update-cat-body) | Update a cat by id. |
| **DELETE** | `/cats/:id` | _`null`_                   | Delete a cat by id. |

#### Create Cat Body

```jsonc
{
  "name": "Catalina",
  "age": 8,
  "race": "Van turco", // idk
}
```

#### Update Cat Body

```jsonc
{
  "name": "Catalina", // Optional
  "age": 8, // Optional
  "race": "Van turco", // Optional
}
```

## Configuration

1.  Create a `.env` file with the following content:

    ```env
    DATABASE_URL="Your database URL here"
    ```

2.  Configure the Prisma provider (in `./prisma/schema.prisma`).

    ```prisma
    datasource db {
      provider = "sqlite"
      ...
    }
    ```

3.  Install the dependencies.

    ```bash
    npm install # If you're using npm
    ```

    ```bash
    yarn install # If you're using yarn
    ```

    ```bash
    pnpm install # If you're using pnpm
    ```

    ```bash
    bun install # If you're using bun
    ```

4.  Migrate your prisma schema (**Only if your use a SQL database**).

    ```bash
    npx prisma migrate dev --name init
    ```

5.  Start the server

    - In development

      ```bash
      npm run dev # or with yarn, pnpm, bun
      ```

    - In production

      ```bash
      npm run build # Compile TS
      npm start
      ```
