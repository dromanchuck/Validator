
describe('Test Validator', function() {
    validator = new Validator();

    describe('Check validate method :', function () {
        it('Should return true, if validation is success', function () {
            var name = new Rules('John').maxLength(20).minLength(1).isRequired();
            var email = new Rules('dr.er@gmail.com').isEmail().isRequired();
            var password = new Rules('qwertyyuuuiii').minLength(4).maxLength(16);
            expect(validator.validate({name, email, password})).toBe(true);
        });
        it('Should return false, if validation is failed', function () {
            var name = new Rules('John').maxLength(20).minLength(1).isRequired();
            var email = new Rules('dr.gmail.com').isEmail().isRequired();
            var password = new Rules('qwertyyuuuiii').minLength(4).maxLength(8);
            expect(validator.validate({name, email, password,})).toBe(false);
        });
    });
    describe('Test rules methods:', function () {
        describe('Test maxLength():', function () {
            it('Should return true, if length of value is less than max length', function () {
                var name = new Rules('asdasdfasdf').maxLength(20);
                expect(validator.validate({name})).toBe(true);
            });
            it('Should return false, if length of validate value is more than max length', function () {
                var name = new Rules('asdfasdgas').maxLength(4);
                expect(validator.validate({name})).toBe(false);
            });
        });
        describe('Test minLength():', function () {
            it('Should return true, if length of value is more than min length', function () {
                var name = new Rules('asdasdfasdf').minLength(3);
                expect(validator.validate({name})).toBe(true);
            });
            it('Should return false, if length of validate value is less than min length', function () {
                var name = new Rules('as').minLength(4);
                expect(validator.validate({name})).toBe(false);
            });
        });
        describe('Test isEmail():', function () {
            it('Should return true, if email is correct', function () {
                var email = new Rules('realtek_95@mail.ru').isEmail();
                expect(validator.validate({email})).toBe(true);
            });
            it('Should return false, if email is incorrect', function () {
                var email = new Rules('raeasфывафыв@masd.tu').isEmail();
                expect(validator.validate({email})).toBe(false);
            });
        });

    });

});

