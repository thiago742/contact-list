import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { removeContact } from '../../features/contactsSlice';
import { Button, Side, Nome, List, ListItem, P, ProfileCircle, ButtonDelete } from './styles';
import { useSelector } from 'react-redux';

interface Contact {
  name: string;
  email: string;
  phone: string;
}

const ContactList: React.FC<{ onEdit: (index: number) => void }> = ({ onEdit }) => {
  const contacts = useSelector((state: any) => state.contacts.contacts) as Contact[];
  const dispatch = useDispatch();

  const handleRemove = (index: number) => {
    dispatch(removeContact(index));
  };

  return (
    <>
      <List>
        <h1>Lista de Contatos</h1>
        <Link to='/new'><Button>Adicionar Contato</Button></Link>
        {contacts.map((contact, index) => (
          <ListItem key={index}>
            <div>
              <Side>
              <ProfileCircle>{contact.name.charAt(0)}</ProfileCircle>
              <Nome> {contact.name}</Nome>
              </Side>
              <P> {contact.email}</P>
              <P> {contact.phone}</P>
            </div>
            <div>
              <Link to={`/edit/${index}`}>
                <Button>Editar</Button>
              </Link>
              <ButtonDelete onClick={() => handleRemove(index)}>Apagar</ButtonDelete>
            </div>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default ContactList;
