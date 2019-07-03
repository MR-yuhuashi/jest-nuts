import axios from 'axios';

const domains = {
  local: 'http://localhost:9999'
};

describe('promises', () => {
	test('ajax get request success', (done) => {
		expect.assertions(1);
		return axios({
			method: 'get',
			url: domains.local + '/testme/get'
		}).then(res =>{
			expect(res.data).toBe('get method success');
			done(); // 不写这句的话会报这个错误：Timeout - Async callback was not invoked within the 5000ms timeout specified by jest.setTimeout.Error: 
		})
	});

	test('ajax get request error', (done) => {
		expect.assertions(1);
		return axios({
			method: 'get',
			url: domains.local + '/testme/get/error'
		}).catch(e =>{
			expect(e.message).toMatch('failed');
			done();
		})
	});
});


describe('resolve and reject', () => {
	test('ajax post request success', () => {
		expect.assertions(1);
		return expect(
			axios({
				method: 'post',
				url: domains.local + '/testme/post/json'
			}).then(res => {
				return res.data
			})
		).resolves.toEqual({firstName: 'John', lastName: 'Williams'});
	});
});

describe('async and await error', () => {
	test('ajax get request error', async (done) => {
		expect.assertions(1);
		try {
			await axios({
				method: 'get',
				url: domains.local + '/testme/get/error'
			});
		}catch (e) {
			expect(e.message).toMatch('failed');
			done();
		}
	});
});

describe('combine async and await error', () => {
	test('ajax get request error', async (done) => {
		expect.assertions(1);
		await expect(
			axios({
				method: 'get',
				url: domains.local + '/testme/get/error'
			})
		).rejects.toThrow('failed');
		done();
	});
});

describe('async and await', () => {
	test('ajax post request success', async () => {
		expect.assertions(1);
		const data = await axios({
			method: 'post',
			url: domains.local + '/testme/post/json'
		}).then(res => {
			return res.data
		});
		expect(data).toEqual({firstName: 'John', lastName: 'Williams'});
	});
});

describe('combine resolves and await', () => {
	test('ajax post request success', async () => {
		expect.assertions(1);
		await expect(
			axios({
				method: 'post',
				url: domains.local + '/testme/post/json'
			}).then(res => {
				return res.data
			})
		).resolves.toEqual({firstName: 'John', lastName: 'Williams'});
	});
});