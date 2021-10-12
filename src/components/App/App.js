import './App.css';
import { Component } from 'react';
import { v4 as uuid } from 'uuid';
import Container from '../Container/Container';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import Filter from '../Filter/Filter';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      { id: 'id-5', name: 'Tatiana Taranushchenko', number: '369-25-14' },
    ],
    filter: '',
  };

  addNewContact = obj => {
    const NewContact = { ...obj, id: uuid() }; 

    const searchSameName = this.state.contacts
    .map(element => element.name)
    .includes(obj.name);

    searchSameName
    ? 
    alert(`${obj.name} is already in contacts`)
    :   
    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, NewContact],
      };
    }); 
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizeFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizeFilter),
    );
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }))

  }

  render() {
    const { addNewContact, changeFilter, getVisibleContacts,deleteContact} = this;
    const { filter } = this.state;
    return (
      <div className="App">
        <Container>
          <h1>Phonebook</h1>
          <ContactForm addNewContact={addNewContact} />

          <h2>Contacts</h2>
          <Filter value={filter} onChange={changeFilter} />
          <ContactList contacts={getVisibleContacts()} onDeleteContact={deleteContact} />
        </Container>
      </div>
    );
  }
}

export default App;
