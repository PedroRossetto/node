module.exports = (req, res, next) => {
    
    
    if(req.body.cliente) {
        console.log();
        console.log(`Vi que vocÊ postou ${req.body.cliente}`);
        console.log();
    }
    
    next();
}