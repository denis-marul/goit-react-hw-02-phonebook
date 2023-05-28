import css from './Section.module.css';
import PropTypes from 'prop-types';
export const Section = ({ title, children }) => {
    return <section>
        <h2 className={css.title}>{title}</h2>
        {children}
           </section>
}
Section.protoTypes = {
    title: PropTypes.string.isRequired,
}