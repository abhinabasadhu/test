import { Response, Request } from "express";
import fs from "fs";
let fileData: any;
export async function getData() {
    try {
        fs.createReadStream(
            "/Users/ifancydat/Desktop/test-click/backend/src/controller/utils/text.json")
            .on("data", (data: Buffer) => {
                let newData = data.toString();
                let data2 = JSON.parse(newData)
                fileData = data2;
            })
    } catch (err) {
        console.error(err);
    }
}
getData();
export async function dataWithId(req: Request, res: Response) {
    const { id } = req.body;
    if (!id) {
        res.send("Id is missing or invalid");
    }
    for (let item of fileData.tracks) {
        if (item.id === id) {
            res.send({ title: item.title, artist: item.artist });
        }
    }
}
export async function dataWithArtist(req: Request, res: Response) {
    const { artist } = req.body;
    if (!artist) {
        res.send("Artist is missing or invalid ");
    }
    for (let item of fileData.tracks) {
        if (item.artist === artist) {
            res.send({ id: item.id, title: item.title })
        }
    }
}