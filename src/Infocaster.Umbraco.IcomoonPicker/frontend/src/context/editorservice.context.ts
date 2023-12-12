import { createContext } from "@lit/context";
import { IEditorService } from "../models/editorservice.model";
export type { IEditorService } from "../models/editorservice.model";
export const editorServiceKey = "editorService";
export const editorServiceContext =
  createContext<IEditorService<any>>(editorServiceKey);
