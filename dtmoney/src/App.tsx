import { useState } from 'react';
import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import Modal from 'react-modal';

import { GlobalStyle } from './styles/global';
import { NewTransactionModal } from './components/NewTransactionModal';
import { TransactionsProvider } from './hooks/useTransactions';

Modal.setAppElement('#root');

function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionOpen] = useState(false);


  function handleOpenNewTransactionModal() {
    setIsNewTransactionOpen(true);
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionOpen(false);
  }
  return (
    <TransactionsProvider>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />
      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />
      <GlobalStyle />
    </ TransactionsProvider>
  );
}

export default App;
