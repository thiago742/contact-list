import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from '../../features/contactsSlice';
import { ContainerForm, Button, Form, Input } from '../../styles/form';
import { Link } from 'react-router-dom';

const ContactForm: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(addContact({ name, email, phone }));
    setName('');
    setEmail('');
    setPhone('');
  };

  return (
    <ContainerForm>
      <h2>Adicionar Contato</h2>
      <Form onSubmit={handleSubmit}>
        <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="Nome" required />
        <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
        <Input type="tel" pattern="[0-9]*" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Telefone" required />
        <Button type="submit">Salvar</Button>
        
      </Form>
      <Link to='/'><p>Voltar para lista de contatos</p></Link>
    </ContainerForm>

  );
};

export default ContactForm;
