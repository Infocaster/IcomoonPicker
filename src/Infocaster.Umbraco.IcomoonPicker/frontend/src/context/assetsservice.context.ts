import { createContext } from "@lit/context";
import { IAssetsService } from "../models/assetsservice.model";
export const assetsServiceKey = "assetsService";
export const assetsServiceContext =
  createContext<IAssetsService>(assetsServiceKey);
