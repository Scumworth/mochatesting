class AuthController{
    isAuthorized(roles, neededRole){
        return roles.indexOf(neededRole) >= 0;
    }
    isAuthorizedPromise(neededRole){
        return new Promise(function(resolve){
            setTimeout(()=>resolve(['user', 'admin'].indexOf(neededRole) >= 0), 0);
        });
    }
    getIndex(req, res){
        res.render('index');
    }
}

module.exports = { AuthController };

