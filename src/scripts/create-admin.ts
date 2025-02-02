// scripts/create-admin.ts
import { MongoClient } from 'mongodb';
import bcrypt from 'bcryptjs';

async function createAdmin() {
  // Default admin credentials
  const adminUser = {
    username: 'rogue',
    password: 'RRSAdmin', // This will be hashed
    email: 'info@roguerescueservices.com',
  };

  const client = new MongoClient(
    process.env.MONGODB_URI || 'mongodb://localhost:27017'
  );

  try {
    await client.connect();
    const db = client.db('rogueRescue');
    const admins = db.collection('admins');

    // Check if admin already exists
    const existingAdmin = await admins.findOne({
      username: adminUser.username,
    });
    if (existingAdmin) {
      console.log('Admin user already exists');
      return;
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(adminUser.password, 10);

    // Create admin user
    await admins.insertOne({
      username: adminUser.username,
      password: hashedPassword,
      email: adminUser.email,
      createdAt: new Date(),
    });

    console.log('Admin user created successfully');
    console.log('Username:', adminUser.username);
    console.log('Password:', adminUser.password);
  } catch (error) {
    console.error('Error creating admin:', error);
  } finally {
    await client.close();
  }
}

createAdmin();
