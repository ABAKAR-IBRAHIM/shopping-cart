import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth from "next-auth";
import axios from "axios";

async function SignIn(email: string, password: string) {
  const options = {
    method: "GET",
    url: `http://localhost:3000/api/signin?email=${email}&password=${password}`,

    data: {
      email: email,
      password: password,
    },
  };
  try {
    const response = await axios.request(options);

    return response.data;
  } catch (error) {
    return null;
  }
}

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "jsmith" },
        password: {
          label: "Password",
          type: "password",
          placeholder: "password",
        },
      },
      async authorize(credentials, req) {
        const email = credentials?.email;
        const password = credentials?.password;

        console.log(` email ${email}  password ${password}`);

        try {
          const res = await SignIn(email!, password!);

          if (res.error) throw new Error(res.error);
          return res;
        } catch (err) {
          return null;
        }
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,

  session: {
    strategy: "jwt",
  },
  theme: {
    colorScheme: "light", // "auto" | "dark" | "light"
    brandColor: "", // Hex color code
    logo: "/logo.svg", // Absolute URL to image
    buttonText: "", // Hex color code
  },
  // pages: {
  //   signIn: "/auth/signin",
  // },
});

export { handler as GET, handler as POST };
