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
    const id = Number(req.body.id)
    if (!id) {
        return res.send("Id is missing or invalid");
    }
    for (const item of fileData.tracks) {

        if (item.id === id) {
            return res.status(200).send({ title: item.title, artist: item.artist });
        }
    }
}

export async function dataWithArtist(req: Request, res: Response) {
    const { artist } = req.body;
    if (!artist) {
        return res.send("Artist is missing or invalid ");
    }
    for (const item of fileData.tracks) {
        if (item.artist === artist) {
            return res.send({ id: item.id, title: item.title })
        }
    }
    return res.status(200).send({})
}