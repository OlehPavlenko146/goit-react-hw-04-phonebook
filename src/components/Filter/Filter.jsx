import PropTypes from 'prop-types';
import { TitleFilter, InputFilter } from './Filter.styled';

export const Filter = ({ onChange, value }) => {
  return (
    <div>
      <TitleFilter>Find contacts by name</TitleFilter>
      <InputFilter
        type="text"
        name="filter"
        value={value}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        onChange={onChange}
      />
    </div>
  );
};

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
