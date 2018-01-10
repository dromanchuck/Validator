var Validator = function () {
}
var validator = new Validator();
Validator.prototype.validate = function(rules) {

        var errors = {};
        var results = {};
        for(var rule in rules) {
            if(rules[rule].errorMessage.length == 0) {
                results[rule] = rules[rule];
            } else {
                errors[rule] = rules[rule].errorMessage;
            }
        }
        //check errors object
        for (val in errors) {
            return false;
        }
        return true;
};
var Rules = function(value) {
    this.value = value;
    this.errorMessage = [];
};
Rules.prototype.maxLength = function(max) {
    if(this.value.length > max) {
        this.errorMessage.push('Max length is ' + max);
    }
    return this;
};
Rules.prototype.minLength = function(min) {
    if(this.value.length < min) {
        this.errorMessage.push('Min length is ' + min);
    }
    return this;
};
Rules.prototype.isRequired = function() {
    if(this.value.length == 0) {
        this.errorMessage.push('Field is empty');
    }
    return this;
};
Rules.prototype.isEmail = function() {
    var r = /^[\w\.\d-_]+@[\w\.\d-_]+\.\w{2,4}$/i;
    if(!r.test(this.value)) {
        this.errorMessage.push('Incorrect email');
    }
    return this;
};
Rules.prototype.max = function(max) {
    if(isNaN(Number(this.value))) {
        this.errorMessage.push('Validate value is not a number');
    } else if(this.value > max) {
        this.errorMessage.push('Max value is ' + max);
    }
    return this;
};

Rules.prototype.min = function(min) {
    if(isNaN(Number(this.value))) {
        this.errorMessage.push('Validate value is not a number');
    } else if(this.value < min) {
        this.errorMessage.push('Min value is ' + min);
    }
    return this;
};
Rules.prototype.isInt = function() {
    if(isNaN(Number(this.value))) {
        this.errorMessage.push('Validate value is not a number');
    } else if(parseInt(this.value) !== this.value) {
        this.errorMessage.push('Validate value is not Int');
    }
    return this;
};
// var password = new Rules('asdfasdfasdf').maxLength(30).minLength(5);
// var email = new Rules('realtek_9agmail.com').isEmail();
var password = new Rules('asdfasdgas').maxLength(4);
validator.validate({password});
