import PropTypes from 'prop-types';
import css from './Filter.module.css';
export const Filter = ({ value, onChange }) => {
    return <div className={css.filter} >
        <label className={css.filterLabel}>Find contact by name</label>
        <input className={css.filterInput} type="text" value={value} onChange={onChange}/>
    </div>
}

Filter.protoTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func.isRequired,
}