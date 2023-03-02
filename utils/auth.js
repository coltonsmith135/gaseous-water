const withAuth = (req, res, next) => {
    if (!req.session.logged_in) {
      res.redirect('/login');
    } else {
      next();
    }
  };

  const isAuthorized = (req, res, next) => {
    if(req.session.logged_id !== req.params.id){
        res.status(403).json({ message: 'you are not authorized'})
    } else {
        next()
    }
  }
  
  module.exports = {withAuth, isAuthorized};
  