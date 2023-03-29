function validateSchema() {
  return (req, res, next) => {
    const { error } = schema.validate(req.body, { abortEarly: false });
    if (error) {
      return res
        .status(422)
        .send(error.details.map((details) => details.message));
    }
    next();
  };
}

export default validateSchema;
