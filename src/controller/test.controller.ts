import { Response, Request } from "express";
import fs from "fs";
import path from "path";
let fileData: any;
export async function getData() {
    let jsonPath = path.join(__dirname, '..', 'controller', 'utils', 'text.json');
    try {
        fs.createReadStream(jsonPath)
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
// for now just gives only one set of the data
// could have used array.filter for all related data with artist name
export async function dataWithArtist(req: Request, res: Response) {
    const { artist } = req.body;
    if (!artist) {
        return res.send("Artist is missing or invalid ");
    }
    for (const item of fileData.tracks) {
        if (item.artist === artist) {
            console.log(item)
            return res.send(item)
        }
    }
    return res.status(200).send({})
}