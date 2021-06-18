import ReactDOM from 'react-dom';
import App from './App';
import { createServer, Model } from 'miragejs'

createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Freelance de website',
          type : 'deposit',
          category: 'dev',
          amount: 6000,
          createdAt: new Date('2021-04-12')
        },
        {
          id: 2,
          title: 'Freelance de teste',
          type : 'deposit',
          category: 'dev',
          amount: 1111,
          createdAt: new Date('2021-04-12')
        },
        {
          id: 3,
          title: 'Freelance de website',
          type : 'deposit',
          category: 'dev',
          amount: 6000,
          createdAt: new Date('2021-04-12')
        }
      ]
    });
  },

  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return this.schema.all('transaction');
    })

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody);

      return schema.create('transaction', data);
    });
  }
})

ReactDOM.render(
  <App />,
  document.getElementById('root')
);