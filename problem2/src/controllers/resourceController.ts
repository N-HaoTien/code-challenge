import { Request, Response } from "express";
import * as resourceService from "../services/resourceService";

export const create = async (req: Request, res: Response) => {
  console.log("Fetching all resources",req.body);

  const resource = await resourceService.createResource(req.body);
  res.status(201).json(resource);
};

export const getAll = async (req: Request, res: Response) => {
  console.log("Fetching all resources");
  const resources = await resourceService.getAllResources();
  res.json(resources);
};

export const getById = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const resource = await resourceService.getResourceById(id);
  if (!resource) return res.status(404).json({ message: "Resource not found" });
  res.json(resource);
};

export const update = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const resource = await resourceService.updateResource(id, req.body);
  res.json(resource);
};

export const remove = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  await resourceService.deleteResource(id);
};
