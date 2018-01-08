describe('validator-test', function () {
    it('test_fail email', function () {
        var values = {
            name:'asadfghj',
            password:'shitasdfasdfasdfasdf',
            email: 'realtemail.ru'
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
        expect(Validator.validate(rules, values)).toBe();

    });

});