import { AppPagesStore } from "../store/AppPages";

const store = new AppPagesStore(require("../pages"));

export const pages = { store };
