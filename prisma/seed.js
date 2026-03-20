import { prisma } from '../src/lib/prisma.js';
async function main() {
await prisma.users.upsert({
where: { email: 'admin@example.com' },
update: {},
create: { email: 'admin@example.com', name: 'Admin User' },
});
}
main().then(() => prisma.$disconnect());