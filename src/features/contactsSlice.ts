import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Contact {
  name: string;
  email: string;
  phone: string;
}

interface ContactsState {
  contacts: Contact[];
}

const initialState: ContactsState = {
  contacts: [
    { name: 'João Silva', email: 'joao.silva@example.com', phone: '11994567890' },
    { name: 'Maria Oliveira', email: 'maria.oliveira@example.com', phone: '11996543210' },
    { name: 'Carlos Pereira', email: 'carlos.pereira@example.com', phone: '11995555555' },
    { name: 'Roberto Souza', email: 'roberto.souza@example.com', phone: '11995554445' },
  ],
};


const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: (state, action: PayloadAction<Contact>) => {
      state.contacts.push(action.payload);
    },
    removeContact: (state, action: PayloadAction<number>) => {
      state.contacts = state.contacts.filter((_, index) => index !== action.payload);
    },
    editContact: (state, action: PayloadAction<{ index: number; newContact: Contact }>) => {
      const { index, newContact } = action.payload;
      state.contacts[index] = newContact;
    },
  },
});

export const { addContact, removeContact, editContact } = contactsSlice.actions;
export default contactsSlice.reducer;
