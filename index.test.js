const expect = require('expect');
const index = require('./index');

it('should add async', (done) => {
    index.addAsync(2, 3, (res) => {
        expect(res).toBe(5);
        done();
    });
});
it('should square async', (done) => {
    index.sqrAsync(2, (res) => {
        expect(res).toBe(4);
        done();
    });
});