import Router from "express-promise-router";
import baseHandler from "./base.route";
import dataHandler from "./test.route";

const router = Router();

router.use("/", baseHandler);
router.use("/test", dataHandler);

export default router;