import { json, urlencoded } from "body-parser";
import cors from "cors";

export default [
    urlencoded({
        extended: true,
    }),
    cors(),
    json(),
];