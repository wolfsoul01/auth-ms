import { Images, Users } from '@prisma/client';

type PrismaScope<T> = { [K in keyof Partial<T>]: true };

export const userFullReturn: PrismaScope<Users> = {
  id: true,
  email: true,
  fullName: true,
  isActive: true,
  isEmailConfirmed: true,
  isSuperAdmin: true,
  isLogued: true,
  sex: true,
  updatedAt: true,
  createdAt: true,
  lastLogin: true,
};

export const simpleUserReturn: PrismaScope<Users> = {
  id: true,
  email: true,
  fullName: true,
};

export const imagesUser: PrismaScope<Images> = {
  id: true,
  src: true,
  path: true,
  userId: true,
};
