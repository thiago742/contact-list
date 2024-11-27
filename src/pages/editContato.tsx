import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ContainerForm, Button, Form, Input } from '../styles/form';

import { editContact } from '../features/contactsSlice';
import { Link } from 'react-router-dom';

const EditContact: React.FC = () => {
  const { index } = useParams<{ index: string }>();  
  const contacts = useSelector((state: any) => state.contacts.contacts);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const contact = contacts[parseInt(index || '0')]; 

  const [name, setName] = useState(contact?.name || '');
  const [email, setEmail] = useState(contact?.email || '');
  const [phone, setPhone] = useState(contact?.phone || '');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const updatedContact = { name, email, phone };
    dispatch(editContact({ index: parseInt(index || '0'), newContact: updatedContact }));

    navigate('/');  
  };

  if (!contact) {
    return <div>Contato não encontrado</div>;
  }

  return (
    <ContainerForm>
      <h2>Editar Contato</h2>
      <Form onSubmit={handleSubmit}>
        <Input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Nome"
        />
        <Input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <Input
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Telefone"
        />
        <Button type="submit">Salvar</Button>
      </Form>
      <Link to='/'><p>Voltar para lista de contatos</p></Link>

    </ContainerForm>
  );
};

export default EditContact;
