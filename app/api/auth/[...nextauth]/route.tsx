import NextAuth from "next-auth/next";
import CredentialsProvider  from "next-auth/providers/credentials";
import prisma from "@/prisma/client";
import bcrypt from "bcrypt";

export const authOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials:{
                email: {label: "Email", type: "email", placeholder: "Email"},
                password: {label: "Password", type: "password", placeholder: "Password"},
            },
            async authorize(credentials): Promise<any>{
                if (!credentials?.email || !credentials.password) {
                    return null;
                };

                const user = await prisma.user.findUnique({
                    where: {
                        email: credentials.email
                    }    
                });

                if (!user) return null;
                const passwordMatch = await bcrypt.compare(credentials.password, user.hashedPassword);

                return passwordMatch ? user : null
            }
        })
    ]
}

const  handler = NextAuth(authOptions);

export { handler as GET, handler as POST }