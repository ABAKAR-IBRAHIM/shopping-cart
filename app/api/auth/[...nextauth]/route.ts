// import clientPromise from "@/app/lib/mongodb";
// import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
// import NextAuth, { AuthOptions } from "next-auth";
// import CredentialsProvider from "next-auth/providers/credentials";

// export const authOptions: AuthOptions = {
//   adapter: MongoDBAdapter(clientPromise),
//   providers: [
//     CredentialsProvider({
//       name: "credentials",
//       credentials: {
//         username: { label: "Username", type: "text", placeholder: "Aaron" },
//         password: { label: "Password", type: "password" },
//       },
//       async authorize(credentials, req) {
//         const { username, password } = credentials;
//         const user = await authOptions.adapter?.getUser(
//           "6471f710f772cf139bc5142e"
//         );
//         if (user) {
//           return user;
//         } else {
//           return null;
//         }
//       },
//     }),
//   ],
//   secret: process.env.NEXTAUTH_SECRET,
//   session: {
//     // Set it as jwt instead of database
//     strategy: "jwt",
//   },
//   callbacks: {
//     async jwt({ token, user }) {
//       // Persist the OAuth access_token and or the user id to the token right after signin
//       if (user) {
//         token.accessToken = user.access_token;
//         token.id = user.id;
//       }
//       return token;
//     },
//     async session({ session, token }) {
//       // Send properties to the client, like an access_token and user id from a provider.
//       session.accessToken = token.accessToken;
//       session.user.id = token.id;

//       return session;
//     },
//   },
// };

// const handler = NextAuth(authOptions);
// export { handler as GET, handler as POST };
import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
const handler = NextAuth({
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: "Credentials",
      // `credentials` is used to generate a form on the sign in page.
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const username = credentials?.username;
        const password = credentials?.password;

        if (user) {
          // Any object returned will be saved in `user` property of the JWT
          return user;
        } else {
          // If you return null then an error will be displayed advising the user to check their details.
          return null;

          // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
        }
      },
    }),
  ],
});

export { handler as GET, handler as POST };
