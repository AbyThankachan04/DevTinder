 const adminAuth = (req,res, next) => {
    const adminToken = "13"
    if(adminToken === "123"){
        next()
    }else{
        res.status(401).send("unauthorised")
    }
}

const userAuth = (req,res, next) => {
    const adminToken = "123"
    if(adminToken === "123"){
        next()
    }else{
        res.status(401).send("user unauthorised")
    }
}

module.exports = {
    adminAuth ,
    userAuth
}