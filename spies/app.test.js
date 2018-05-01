const expect = require('expect');
const rewire = require('rewire');
var app = rewire('./app');
var db = {
    saveUser: expect.createSpy()
}
app.__set__('db', db);
describe('App', () => {
    it('it should call the spy correctly', () => {
        var calSpy = expect.createSpy();
        calSpy('John Doe', 25);
        expect(calSpy).toHaveBeenCalledWith('John Doe', 25);
    });
    it('it should call the save user correctly', () => {
        var email = 'test@test.com';
        var pass = 'password';
        app.signUp(email, pass);
        expect(db.saveUser).toHaveBeenCalled();
    });
})