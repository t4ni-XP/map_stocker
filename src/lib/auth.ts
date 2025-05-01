import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from "@/lib/prisma";

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  session: { strategy: "jwt" },
  callbacks: {
    // JWT に user.id を sub に、role を custom claim として入れる
    async jwt({ token, user, account }) {
      if (user) {
        token.sub = user.id; // ← ここ！
        token.role = user.role; // ← ここも！
      }
      if (account) {
        token.accessToken = account.access_token;
      }
      return token;
    },
    // Session に sub (＝ user.id) と role を渡す
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.sub!; // ← ここ！
        session.user.role = token.role as string;
      }
      return session;
    },
  },
};
