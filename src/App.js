import React, { useState } from 'react';

import AppForm from './components/AppForm';
import AppModal from './components/Modal';
import PictureView from './components/PictureView';


export default function App() {
  const [pictureUrl, setPictureUrl] = useState('');
  const [showPictureModal, setShowPictureModal] = useState(false);

  const onFormSubmit = (url) => {
    setPictureUrl(url);
    setShowPictureModal(true);
  };

  return (
    <main>
      <AppForm onSubmit={onFormSubmit} />

      <AppModal title="Try Zoop Picture Or Drag It" show={showPictureModal} showHandler={setShowPictureModal}>
        <PictureView url={pictureUrl} />
      </AppModal>
    </main>
  );
}