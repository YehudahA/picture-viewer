import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

import Draggable from './Draggable';

import styles from './Modal.module.css'


function MyDialog(props) {
  const [transform, setTransform] = useState({ x: 0, y: 0 });

  return (
    <div className={'modal-dialog ' + props.className} style={{
      translate: `${transform.x}px ${transform.y}px`
    }}>
      <div className='modal-content'>
        <Draggable onDrag={setTransform}>
          <Modal.Header closeButton>
            <Modal.Title>
              {props.title}
            </Modal.Title>
          </Modal.Header>
        </Draggable>
        {props.children}
      </div>
    </div>
  );
}

// I name it AppModal to avoid conflict with bootstrap modal component
export default function AppModal(props) {
  return (
    <Modal
      title={props.title}
      show={props.show}
      onHide={() => props.showHandler(false)}
      dialogClassName={styles['modal-50']}
      dialogAs={MyDialog}
    //renderDialog={props => <MyDialog {...props} />}
    >

      <Modal.Body>
        {props.children}
      </Modal.Body>
    </Modal>
  );
}