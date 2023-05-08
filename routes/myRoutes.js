import express  from "express"
const router = express.Router()

import {post,post2,post3,post4,updateData,DeleteData,GetData,GetAllUsers} from "../controllers/myController.js"

router.route('/post/electricityMeter').post(post)
router.route('/post/waterMeter').post(post2)
router.route('/post/voucher').post(post3)
router.route('/post/value').post(post4)
router.route('/update/:id').put(updateData)
router.route('/GetData').get(GetData)
router.route('/GetAllUsers').get(GetAllUsers)
router.route('/delete/:id').delete(DeleteData)
export default router