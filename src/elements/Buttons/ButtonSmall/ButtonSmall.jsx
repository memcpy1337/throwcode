import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

import "./ButtonSmall.css"

const ButtonSmall = ({ children, onClick, className, disabled, active }) => {
    const classes = classNames(
        "square_btn",
        className,
        { active },
    );
    return (
        <button
        className={classes}
        disabled={disabled}
        onClick={onClick}>{children}</button>
    );
};
ButtonSmall.propTypes = {
children: PropTypes.node,
onClick: PropTypes.func,
className: PropTypes.string,
disabled: PropTypes.bool,
active: PropTypes.bool,
};

ButtonSmall.defaultProps = {
children: 'Default button',
onClick: () => {},
className: '',
disabled: false,
active: false,
}

export default ButtonSmall;