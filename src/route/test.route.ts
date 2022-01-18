import Router from "express-promise-router";
import { dataWithId, dataWithArtist } from "../controller/test.controller";

const router = Router();

// post requests
router.post("/id", [dataWithId]);
router.post("/artist", [dataWithArtist]);


export default router;