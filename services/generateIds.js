import { uuid } from "uuid";

export const generateId = () => {
  return uuid.v4().slice(0, 10);
};