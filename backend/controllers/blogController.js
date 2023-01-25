
// Get all blogs
const getBlogs = (req, res)=>{
    res.status(200).json({
        status: 'success',
        massege: 'get bloges'
    })
}

// create all blogs
const setBlogs = (req, res)=>{
    res.status(200).json({
        status: 'success',
        massege: 'create new bloges'
    })
}
// update all blogs
const updateBlogs = (req, res)=>{
    res.status(200).json({
        status: 'success',
        massege: `update bloges ${req.params.id}`
    })
}

// delete blog

const deleteBlog = (req, res)=>{
    res.status(200).json({
        status: 'success',
        massege: `delete bloges ${req.params.id}`
    })
}


module.exports= {
    getBlogs,
    deleteBlog,
    updateBlogs,
    setBlogs
}