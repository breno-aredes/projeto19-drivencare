function conflictError(message) {
  return {
    name: "ConflictError",
    message,
  };
}

function duplicatedEmailError(email) {
  return {
    name: "DuplicatedEmailError",
    message: "There is already an user with given email",
    email,
  };
}

function unauthorizedError() {
  return {
    name: "UnauthorizedError",
    message: "You must be signed in to continue",
  };
}

function notFoundError() {
  return {
    name: "NotFoundError",
    message: "No result for this search!",
  };
}

function invalidCredentilsError() {
  return {
    name: "InvalidCredentialsError",
    message: "Email or password are incorrect",
  };
}

export default {
  invalidCredentilsError,
  notFoundError,
  unauthorizedError,
  conflictError,
  duplicatedEmailError,
};
