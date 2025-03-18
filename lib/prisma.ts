import { Pool } from '@neondatabase/serverless';
import { PrismaClient } from '@prisma/client';

// Глобальная переменная для кэширования PrismaClient
const globalForPrisma = global as unknown as { prisma: PrismaClient };

export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    // Больше не используем adapter напрямую
    // Neon работает через DATABASE_URL с пулами
  });

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

export default prisma;
