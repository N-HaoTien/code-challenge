// src/services/resourceService.ts
import prisma from '../database';

export const createResource = async (data: { name: string; description?: string }) => {
  return await prisma.resource.create({ data });
};

export const getAllResources = async () => {
  return await prisma.resource.findMany();
};

export const getResourceById = async (id: number) => {
  return await prisma.resource.findUnique({ where: { id } });
};

export const updateResource = async (id: number, data: { name?: string; description?: string }) => {
  return await prisma.resource.update({
    where: { id },
    data,
  });
};

export const deleteResource = async (id: number) => {
  return await prisma.resource.delete({ where: { id } });
};
