const express = require('express');
const router = express.Router()
const {getBlogs, setBlogs, updateBlogs, deleteBlog} = require('../controllers/blogController')


router.route('/').get(getBlogs).post(setBlogs)
router.route('/:id').put(updateBlogs).delete(deleteBlog)

// router.get('/', getBlogs)

// router.post('/', setBlogs)

// router.put('/:id', updateBlogs)

// router.delete('/', deleteBlog)

module.exports = router