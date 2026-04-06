const User = require("../models/User");

const seedAdminUser = async () => {
  const { ADMIN_EMAIL, ADMIN_PASSWORD } = process.env;

  if (!ADMIN_EMAIL || !ADMIN_PASSWORD) {
    console.log("Admin seed skipped: ADMIN_EMAIL or ADMIN_PASSWORD missing");
    return;
  }

  const normalizedEmail = ADMIN_EMAIL.trim().toLowerCase();
  const existingAdmin = await User.findOne({ email: normalizedEmail });

  if (!existingAdmin) {
    await User.create({
      name: "Admin",
      email: normalizedEmail,
      password: ADMIN_PASSWORD,
      role: "admin",
    });

    console.log(`Admin user created: ${normalizedEmail}`);
    return;
  }

  let updated = false;

  if (existingAdmin.role !== "admin") {
    existingAdmin.role = "admin";
    updated = true;
  }

  if (existingAdmin.password !== ADMIN_PASSWORD) {
    existingAdmin.password = ADMIN_PASSWORD;
    updated = true;
  }

  if (updated) {
    await existingAdmin.save();
    console.log(`Admin user synced: ${normalizedEmail}`);
  } else {
    console.log(`Admin user ready: ${normalizedEmail}`);
  }
};

module.exports = seedAdminUser;
