import { generalRequest, getRequest } from '../utilities';
import { url, port, entryPoint } from './server';

const URL = `http://${url}:${port}/${entryPoint}`;

const resolvers = {
	Query: {
		allPayments: (_) =>
			getRequest(URL, ''),
		paymentByCode: (_, { code }) =>
			generalRequest(`${URL}/${code}`, 'GET'),
	},
	Mutation: {
		createPayment: (_, { payment }) =>
			generalRequest(`${URL}`, 'POST', payment),
		updatePayment: (_, { code, payment }) =>
			generalRequest(`${URL}/${code}`, 'PUT', payment),
		deletePayment: (_, { code }) =>
			generalRequest(`${URL}/${code}`, 'DELETE')
	}
};

export default resolvers;
