import multer from 'multer';
import Express from 'express';
import { HandleRequest } from './HandleRequire';
import path from 'path';

const router = Express.Router()
const storage = multer.diskStorage({
    destination: "../public/upload",
    filename(req, file, cb) {
        const time = new Date().getTime();
        const ext = path.extname(file.originalname);
        cb(null, `${time}${ext}`)
    }
})
const extArr = ['.img', '.png', '.gif', '.bpm']
const upload = multer({
    storage,
    limits: {
        fileSize: 1024 * 1024
    },
    fileFilter: (res, file, cb) => {
        if (extArr.includes(path.extname(file.originalname))) {
            cb(null, true)
        } else {
            cb(new Error("文件后缀名不符合规则"))
        }
    }
}).single('imgFile')


router.post("/", async (req, res) => {
    upload(req, res, error => {
        if (error) {
            HandleRequest.sendResult(null, error.message ? error.message : error, res, false)
        } else {
            HandleRequest.sendResult("上传成功", null, res, true)
        }
    })
})
export { router }