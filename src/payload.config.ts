import { buildConfig } from 'payload';
import { mongooseAdapter } from '@payloadcms/db-mongodb';
import path from 'path';
import { Users } from './collections/Users';
import { Services } from './collections/Services';
import { TrainingCourses } from './collections/TrainingCourses';
import { TeamMembers } from './collections/TeamMembers';
import { Media } from './collections/Media';

export default buildConfig({
    serverURL: process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000',
    admin: {
        user: 'users'
    },
    db: mongooseAdapter({
        url: process.env.MONGODB_URI || '',
    }),
    collections: [Users, Services, TrainingCourses, TeamMembers, Media],
    typescript: {
        outputFile: path.resolve(__dirname, 'payload-types.ts'),
    },
    graphQL: {
        schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
    },
    secret: process.env.PAYLOAD_SECRET || 'YOUR-SECRET-KEY',
});
