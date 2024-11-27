import React from 'react';
import ContactList from '../components/ContactList';

const Lista: React.FC = () => {
  const handleEdit = (index: number) => {
    console.log(`Editar contato no índice ${index}`); 
  };

  return <ContactList onEdit={handleEdit} />;
};

export default Lista;
