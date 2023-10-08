import { authConfig } from "@/configs/auth";
import NextAuth from "next-auth/next";

const handler = NextAuth(authConfig);

export { handler as POST, handler as GET};