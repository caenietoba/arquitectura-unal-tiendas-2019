export const paymentsTypeDef = `
type Payment { 
    code: Int!
    name: String!
    credits: Int!
    professor: String!
}
input PaymentInput {
    name: String!
    credits: Int!
    professor: String!
}`;

export const paymentsQueries = `
    allPayments: [Payment]!
    paymentByCode(code: Int!): Payment!
`;

export const paymentsMutations = `
    createPayment(payment: PaymentInput!): Payment!
    deletePayment(code: Int!): Int
    updatePayment(code: Int!, payment: PaymentInput!): Payment!
`;

