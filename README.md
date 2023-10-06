This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

### API Key Requirement

#### The Movie Database (TMDb) API Key

This Next.js project relies on the API service provided by The Movie Database (TMDb). In order to run this project successfully, you will need to obtain an API key from themoviedb.org.

#### Steps to obtain the API key:

1. Sign up or log in to [themoviedb.org](https://www.themoviedb.org/).
2. Navigate to the [API section](https://www.themoviedb.org/settings/api) in your account settings.
3. Request an API key by following the on-screen instructions.
4. Once you have your API key, create a `.env.local` file in the root of this project.
5. Add your API key as follows:
   ```
   TMDB_API_KEY=your_api_key_here
   ```

Replace `your_api_key_here` with the actual key you obtained from TMDb.

### Note:

- Please make sure not to share your personal API key in public repositories or expose it in client-side code.
- Respect the usage guidelines and limitations imposed by TMDb for their API service.



First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.



