// src/app/api/auth/[...nextauth]/route.ts
import { AuthOptions } from 'next-auth';
import NextAuth from 'next-auth/next';
import CredentialsProvider from 'next-auth/providers/credentials';
import { MongoClient } from 'mongodb';
import bcrypt from 'bcryptjs';

declare module "next-auth" {
    interface Session {
        user: {
            id: string;
            name?: string | null;
            email?: string | null;
        }
    }

    interface User {
        id: string;
        name?: string | null;
        email?: string | null;
    }
}

export const authOptions: AuthOptions = {
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                username: { label: "Username", type: "text" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials) {
                if (!credentials?.username || !credentials?.password) {
                    return null;
                }

                const client = new MongoClient(process.env.MONGODB_URI || '');

                try {
                    await client.connect();
                    const db = client.db('rogueRescue');
                    const user = await db.collection('admins').findOne({
                        username: credentials.username
                    });

                    if (!user) {
                        return null;
                    }

                    const isValid = await bcrypt.compare(
                        credentials.password,
                        user.password
                    );

                    if (!isValid) {
                        return null;
                    }

                    return {
                        id: user._id.toString(),
                        name: user.username,
                        email: user.email
                    };
                } catch (error) {
                    return null;
                } finally {
                    await client.close();
                }
            }
        })
    ],
    session: {
        strategy: "jwt",
    },
    pages: {
        signIn: '/admin/login',
    },
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id;
            }
            return token;
        },
        async session({ session, token }) {
            if (session.user && token) {
                session.user.id = token.id as string;
            }
            return session;
        }
    },
    secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };