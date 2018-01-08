Task 1: create validator to validate input object with predefined rules.

● Validator should have static Validate method that accepts an object with rules (i.e. {name: Rule, password: Rule}) and object with values . Validate method should return promise (if validation is successful then return data, otherwise object with errors for each value ({name: [string], password: [string]})).

● Validator should be in ES5, (without ES6 classes)

● Rule class should have the following methods for validation: isRequired, maxLength, minLength, max, min, isEmail, isInt. There should be an ability to chain rules together (new Rule().isRequired().isInt()).
