import type { IIconHelper } from "@/models/iconhelper.model";
import { createContext } from "@lit/context";
export const iconHelperKey = "iconHelper";
export const iconHelperContext = createContext<IIconHelper>(iconHelperKey);
