import { http } from "@/util/axios.util";

export const IcomoonService = {
  get: async (projectCode: string, projectName: string) => {
    const response = await http.get<string>(
      `/umbraco/backoffice/icomoon/files/svg?code=${projectCode}&project=${projectName}`
    );

    if (response.status !== 200)
      throw new Error("failed to get response from backend");
    return response.data;
  },
};
