async function authValidation(req, res, next) {
  const { authorization } = req.headers;
  const token = authorization?.replace("Bearer ", "");

  if (!token) return res.status(401).send("No token");

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const userEmail = decoded.email;

    const {
      rows: [user],
    } = await userRepositories.findByEmail(userEmail);
    if (!user) return res.status(401).send("User not found");

    res.locals.user = user;
    next();
  } catch (err) {
    res.status(500).send(err.message);
  }
}

export default { authValidation };
