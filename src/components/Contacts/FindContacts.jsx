import { Component } from 'react';
import { connect } from 'react-redux';
import styles from './styles.module.scss';
import { filterContact } from '../../redux/contacts';
import { contactsSelectors } from '../../redux/contacts';

export class FindContacts extends Component {
  render() {
    const { value, onChange } = this.props;

    return (
      <div>
        <h3>Find contacts by name</h3>
        <input
          type="text"
          name="query"
          value={value}
          required
          onInput={onChange}
          className={styles.input}
          autoComplete="off"
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  value: contactsSelectors.getFilter(state),
});

const mapDispatchToProps = dispatch => ({
  onChange: ({ target }) => dispatch(filterContact(target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FindContacts);
