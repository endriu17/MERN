
import React from 'react';
import PropTypes from 'prop-types';
import { Link, NavLink } from 'react-router';

// Import Style
import styles from './Navigation.css';

export const Navigation = (props, context) => {


  return <div className={styles['navigation']}>
        <ul className={styles['navigation-list']}>
            <li className={styles['navigation-title']}>
                <Link className={styles['navigation-link']} to={"/"}>
                  Home
                </Link>
            </li>
            <li className={styles['navigation-title']}>
                <Link className={styles['navigation-link']} to={"/posts"}>
                  Posts
                </Link>
            </li>
            <li className={styles['navigation-title']}>
                <Link className={styles['navigation-link']} to={"/about"}>
                  About
                </Link>
            </li>
        </ul>
    </div>
};

Navigation.propTypes = {
};

export default Navigation;