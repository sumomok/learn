import Express from 'express';
import { MovieService } from '../services/MovieService';
import { HandleRequest } from './HandleRequire';
import { IMovie } from '../types/Movie';

const router = Express.Router()

router.get("/:id", async (req, res) => {
    try {
        const movieid = req.params.id;
        const movie = await MovieService.findById(movieid);
        HandleRequest.sendResult(movie, null, res, true);
    } catch {
        HandleRequest.sendResult(null, "错误，请重试", res, false);
    }

})
router.get("/", async (req, res) => {
    try {
        const result = await MovieService.find(req.query);
        HandleRequest.sendResultByPage<IMovie>(result, res, true)
    } catch {
        HandleRequest.sendResult(null, "参数错误，请重试", res, false);
    }

})
router.post("/add", async (req, res) => {
    try {
        const result = await MovieService.add(req.body);
        let error: string = ""
        if (Array.isArray(result)) {
            error = result.join(',')
        }
        HandleRequest.sendResult(result, error, res, true)
    } catch {
        HandleRequest.sendResult(null, "参数错误，请重试", res, false);
    }
})
router.put("/:id", async (req, res) => {
    try {
        const result = await MovieService.edit(req.params.id, req.body);
        let error: string = ""
        if (Array.isArray(result)) {
            error = result.join(',')
        }
        HandleRequest.sendResult(error === "" ? "修改成功" : "修改失败，修改失败请查询错误", error, res, error === "")
    } catch {
        HandleRequest.sendResult(null, "参数错误，请重试", res, false);
    }

})
router.delete("/:id", async (req, res) => {
    try {
        const movieid = req.params.id;
        await MovieService.delete(movieid);
        HandleRequest.sendResult("删除成功", null, res, true);
    } catch {
        HandleRequest.sendResult(null, "test错误，请重试", res, false);
    }
})
export { router }