import Router from "express-promise-router";
import { return200, returnOk } from "../controller/base.controller";
const router = Router();

router.get("/", [returnOk]);

export default router;