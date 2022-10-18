import React, { useState } from 'react';

import Draggable from './Draggable';
import styles from './PictureView.module.css';
import { ReactComponent as PlusSvg } from '../assets/plus.svg';
import { ReactComponent as MinusSvg } from '../assets/minus.svg';


export default function PictureView(props) {
  const [scale, setScale] = useState(1);

  const setScaleByUnits = (units) => {
    setScale(scale + units / 100);
  };

  return (
    <div className={styles['img-wrapper']}>
      
      <Draggable>
        <div className={styles['img-drag-wrapper']}>
          <img
            src={props['url']}
            alt='Loading ...'
            className={styles['popup-img']}
            style={{
              transform: `scale(${scale})`,
              transformOrigin: 'center',
            }}
          />
        </div>
      </Draggable>

      <div className={styles['img-zoom-cmds']}>
        <button onClick={() => setScaleByUnits(10)}>
          <PlusSvg />
        </button>

        <button onClick={() => setScaleByUnits(-10)}>
          <MinusSvg />
        </button>
      </div>
    </div>
  );
}