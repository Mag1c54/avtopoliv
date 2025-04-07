import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export const authOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: 'Username', type: 'text' },
        password: { label: 'Password', type: 'password' }
      },
      async authorize(credentials) {
        const user = { id: 1, name: 'admin', username: 'admin', password: 'admin123' };

        if (
          credentials.username === user.username &&
          credentials.password === user.password
        ) {
          return user;
        }
        return null;
      }
    })
  ],
  pages: {
    signIn: '/admin'
  },
   session: {
    strategy: 'jwt'
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) token.role = 'admin';
      return token;
    },
    async session({ session, token }) {
      session.user.role = token.role;
      return session;
    }
  }

};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };

  // session: {
  //   strategy: 'jwt'
  // },
  // callbacks: {
  //   async jwt({ token, user }) {
  //     if (user) token.role = 'admin';
  //     return token;
  //   },
  //   async session({ session, token }) {
  //     session.user.role = token.role;
  //     return session;
  //   }
  // }