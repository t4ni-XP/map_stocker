// next-auth.d.ts
import { DefaultSession, DefaultUser } from "next-auth";
// import { JWT } from "next-auth/jwt";

declare module "next-auth" {
  interface User extends DefaultUser {
    uid: string;
    role: string;
  }
  interface Session extends DefaultSession {
    user: {
      id: string;
      role: string;
    } & DefaultSession["user"];
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    uid: string;
    role: string;
  }
}
