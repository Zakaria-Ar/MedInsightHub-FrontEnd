export const environment = {
    production: false,
    BASE_URL: 'http://localhost:3000/',
    CUSTOMER_BASE_URL: 'http://localhost:3000/customers/',
    CUSTOMER: {
        GET_ALL_CUSTOMERS: 'list',
        GET_CUSTOMER: 'view/',
        UPDATE_CUSTOMER: 'update',
        DELETE_CUSTOMER: 'delete',
        SEARCH_CUSTOMERS: 'search',
    },
    LOAN: {
        GET_ALL_LOANS: 'list',
        GET_LOAN: 'view',
        UPDATE_LOAN: 'update',
        DELETE_LOAN: 'delete',
        SEARCH_LOAN: 'search',
    }
  };