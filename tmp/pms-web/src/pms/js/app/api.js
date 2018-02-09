import { RestConnector } from "utils/connectors";

export const INVALID_GRANT = "invalid_grant";


export const api = new RestConnector({ baseUrl: "/api/" });
