import axios from "axios";
import { ENV } from "../config/env";

export class ProjectApi {

    async createProject(token: string, tenantId: string, project: any) {

        const response = await axios.post(
            `${ENV.baseURL}/api/v1/projects`,
            project,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "X-Tenant-ID": tenantId
                }
            }
        );

        return response.data;
    }

}