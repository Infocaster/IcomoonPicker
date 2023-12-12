import { createContext } from "@lit/context";
import type { ILocalizationService } from "../models/localizationservice.model";
export type { ILocalizationService } from "../models/localizationservice.model";
export const localizationServiceKey = "localizationService";
export const localizationServiceContext = createContext<ILocalizationService>(
  localizationServiceKey
);
