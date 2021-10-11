import { Component } from 'react';
import { v4 as uuid } from 'uuid';

class Form extends Component {
  state = {
    contacts: [],
    name: '',
  };

  handleChange = e => {
    const {name,value} = e.currentTarget;
    this.setState({
        [name]: value
    })
  }

//   handleSubmit = e => {
//       e.preventDefault();
//       this.setState({prevState =>
    
//     })

//   }

  render() {
    return (
      <div>
        <p>Phonebook</p>
        <form>
            <label>
                Name
                <input
                    type='text'
                    name='name'
                    value={this.state.name}
                    onChange={this.handleChange}
                >
                </input>

            </label>
            
            <br />
            <button type="submit">Add contact</button>
        </form>
        <p>Contacts</p>
      </div>
    );
  }
}

export default Form;
