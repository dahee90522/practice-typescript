import React, { useState } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';

import classNames from 'classnames/bind';
import { isToggleAtom } from 'modules/atoms';
import styles from './styles.module.scss';

const cx = classNames.bind(styles);
function Main() {
  const isToggle = useRecoilValue(isToggleAtom); //atom을 읽게 하기
  const setToggleAtom = useSetRecoilState(isToggleAtom);
  const toggle = () => setToggleAtom((prev) => !prev);

  return (
    <div className={cx(isToggle ? 'active' : 'deactive')}>
      <button onClick={toggle}>Toggle Mode</button>
    </div>
  );
}
export default Main;
export const path = '/';
