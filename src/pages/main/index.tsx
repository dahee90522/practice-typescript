import React, { useState } from 'react';

import classNames from 'classnames/bind';
import styles from './styles.module.scss';

const cx = classNames.bind(styles);
function Main() {
  const [hi, setHi] = useState('안녕');
  return <div className={cx('div')}>{hi}</div>;
}
export default Main;
export const path = '/';
