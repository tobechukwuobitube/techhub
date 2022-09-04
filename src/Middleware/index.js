import fieldValidator from "../utils/emptyField";

class Validator {
  constructor() {
    this.signupValidator = this.signupValidator.bind(this);
  }

  signupValidator(req, res, next) {
    const emptyFields = fieldValidator.call(
      this.signupValidator,
      "signup",
      req.body
    );
    if (emptyFields.status === 400) {
      return res.status(400).json({
        status: 400,
        error: emptyFields.error,
      });
    }
    next();
  }


}

export default new Validator();
