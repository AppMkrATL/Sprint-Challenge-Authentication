// middleware for users constraints
function registerConstraints(req, res, next) {
  const USERNAME = req.body.username;
  const CLEARPASSWORD = req.body.password;

  if (!USERNAME || USERNAME.length < 1) {
    return next({
      code: 400,
      error: `Please provide a 'username'.`,
    });
  }

  if (USERNAME.length > 128) {
    return next({
      code: 400,
      error: `The 'username' must be 128 characters or less.`,
    });
  }

  if (!CLEARPASSWORD || CLEARPASSWORD.length < 1) {
    return next({
      code: 400,
      error: `Please provide a 'password' for this user.`,
    });
  }

  if (CLEARPASSWORD.length > 128) {
    return next({
      code: 400,
      error: `The 'password' must be 128 characters or less.`,
    });
  }

  // set the req object
  req.USERNAME = USERNAME;
  req.CLEARPASSWORD = CLEARPASSWORD;

  next();
}

function loginConstraints(req, res, next) {
  const USERNAME = req.body.username;
  const CLEARPASSWORD = req.body.password;

  if (!USERNAME || USERNAME.length < 1) {
    return next({
      code: 400,
      error: `Please provide a 'username'.`,
    });
  }

  if (!CLEARPASSWORD || CLEARPASSWORD.length < 1) {
    return next({
      code: 400,
      error: `Please provide a 'password' for this user.`,
    });
  }

  // set the req object
  req.USERNAME = USERNAME;
  req.CLEARPASSWORD = CLEARPASSWORD;

  next();
}

module.exports.registerConstraints = registerConstraints;
module.exports.loginConstraints = loginConstraints;
