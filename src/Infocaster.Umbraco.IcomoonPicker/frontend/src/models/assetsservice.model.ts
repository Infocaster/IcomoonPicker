// based on https://our.umbraco.com/apidocs/v8/ui/#/api/umbraco.services.assetsService
export interface IAssetsService {
  loadCss: (path: string) => Promise<void>;
  loadJs: (path: string) => Promise<void>;
  load: (paths: string[]) => Promise<void>;
}
