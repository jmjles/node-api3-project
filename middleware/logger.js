const logger = (req,res,next)=>{
    console.log(`Method: ${req.method}\nURL: ${req.url}\nTime: ${Date.now()}`)
    next();
}
module.exports = logger