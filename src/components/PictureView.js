import React, { useState } from 'react';

import Draggable from './Draggable';
import styles from './PictureView.module.css';

/* removed for supporting stackblitz
 import { ReactComponent as PlusSvg } from '../assets/plus.svg';
 import { ReactComponent as MinusSvg } from '../assets/minus.svg';
*/


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
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="12" />
            <path d="M 6,12 L 18,12 M 12,6 L 12,18" />
          </svg>
        </button>

        <button onClick={() => setScaleByUnits(-10)}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="12" />
            <path d="M 6,12 L 18,12" />
          </svg>
        </button>
      </div>
    </div>
  );
}