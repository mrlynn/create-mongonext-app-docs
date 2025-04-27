---
id: nextauth
title: NextAuth.js Integration
sidebar_label: 🔒 NextAuth.js Integration
---

# NextAuth.js Integration

MongoNext uses [NextAuth.js](https://next-auth.js.org/) for secure, flexible authentication. NextAuth.js supports email/password, OAuth providers (Google, GitHub, etc.), and session management out of the box.

## 1. Configuration

Authentication is configured in the `src/app/api/auth/[...nextauth].js` file. You can customize providers, callbacks, and session settings here.

**Example:**
```js
import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

export default NextAuth({
  providers: [
    Providers.Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    // Add more providers as needed
  ],
  database: process.env.MONGODB_URI,
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    async session({ session, user, token }) {
      // Customize session object
      return session;
    },
  },
});
```

## 2. Adding Providers

- Add OAuth providers (Google, GitHub, etc.) by including them in the `providers` array and setting the required environment variables.
- For email/password, you can use the built-in Email provider or extend with custom logic.

## 3. User Registration & Login

- Users can sign up or log in using any enabled provider.
- NextAuth.js handles session creation and user persistence automatically.
- User data is stored in MongoDB Atlas via Mongoose models.

## 4. Session Management

- Sessions are managed with JWTs by default for scalability.
- You can access the current session in your app using the `useSession` hook from `next-auth/react`.

**Example:**
```js
import { useSession, signIn, signOut } from 'next-auth/react';

function AuthButton() {
  const { data: session } = useSession();
  if (session) {
    return <button onClick={() => signOut()}>Sign out</button>;
  }
  return <button onClick={() => signIn()}>Sign in</button>;
}
```

## 5. Protecting Routes

- Use the `getServerSession` helper or `useSession` hook to protect pages and API routes.
- Redirect unauthenticated users to the login page as needed.

---

For more details, see the [NextAuth.js documentation](https://next-auth.js.org/) or explore the authentication code in your MongoNext project. 