import { Component } from 'react';
import { connect } from 'react-redux';
import styles from './styles.module.scss';
import { addContact } from '../../redux/contacts';

class AddContact extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = ({ target }) => {
    const { name, value } = target;

    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();

    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <form className={styles.form} onSubmit={this.handleSubmit}>
        <label className={styles.label}>
          <span>Name</span>
          <input
            type="text"
            name="name"
            value={this.state.name}
            placeholder="John Doe"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            onChange={this.handleChange}
            className={styles.input}
          />
        </label>
        <label className={styles.label}>
          <span>Number</span>
          <input
            type="tel"
            name="number"
            value={this.state.number}
            placeholder="+38..."
            pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
            title="Номер телефона должен состоять из 11-12 цифр и может содержать цифры, пробелы, тире, пузатые скобки и может начинаться с +"
            required
            onChange={this.handleChange}
            className={styles.input}
          />
        </label>
        <button className={styles.button} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onSubmit: data => dispatch(addContact(data)),
});

export default connect(null, mapDispatchToProps)(AddContact);
