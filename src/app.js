// Объект Валидатор, у которого есть статический метод валидации
// который принимает объект с значениями и объект с правилами.
// в случае успешной валидации выдает объект с данными
// в случае возникновения ошибок, выдает объект с ошибками
var Validator = {
};
Validator.validate = function(rules, values) {
	return new Promise((resolve, reject)=>{
		var errors = {};
		for(var rule in rules) {
			for(var nameOfRule in rules[rule]){
				if(rules[rule][nameOfRule](values[rule]) !== true) {
					errors[rule] = rules[rule][nameOfRule](values[rule]);
				}
			}
		}
		//check errors object
        for (val in errors) {
		    reject(errors);
        }
		resolve(values);
    }).then(
    	result => {
    		console.log('Data:' + JSON.stringify(result));
		}
	). catch(
		error=> {
			console.log('Errors:' + JSON.stringify(error));
		}
	);
};
//объект значений
var values = {
	name:'asadfghj',
	password:'shitasdfasdfasdfasdf',
	email: 'realte@mail.ru'
};
//объект правил
 var rules = {
 	name:{},
 	password:{},
 	email:{}
 };
 rules.name.maxLength = function(name) {
 	if(name.length > 24) {
 		return 'max length of name is 24';
 	} else {
 		return true;
 	}
 };
 rules.name.minLength = function(name) {
 	if(name.length < 5) {
 		return 'minLength is 5';
 	} else {
 		return true;
 	}
 };
 rules.name.isRequired = function(name) {
 	if(name) {
 		return true;
	} else {
 		return 'necessary field';
	}
 };
 rules.password.maxLength = function(password) {
 	if(password.length > 64) {
 		return 'max length of password is 64';
	} else {
 		return true;
	}
 };
 rules.password.minLength = function(password) {
 	if(password.length < 8) {
 		return 'min length of password is 8';
	} else {
 		return true;
	}
 };
 rules.email.isEmail = function(email) {
     var r = /^[\w\.\d-_]+@[\w\.\d-_]+\.\w{2,4}$/i;
     if(!r.test(email)) {
	 	return 'incorrect email';
     } else {
     	return true;
	 }
 };
rules.password.isRequired = rules.name.isRequired;
 Validator.validate(rules, values);