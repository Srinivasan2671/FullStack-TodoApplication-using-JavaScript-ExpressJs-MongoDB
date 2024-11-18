export const auth = (req, res, next) => {
    console.log("Middleware");
    const user = true;
    if(user){
        next();
    } else {
        res.status(400).json("Invalid user");
    }
};