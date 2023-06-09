import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';

import { ImageConfig } from '../../config/ImageConfig'; 
import uploadImg from '../../assets/cloud-upload-regular-240.png';
import './dragDrop.scss';
import { UilCloudUpload } from '@iconscout/react-unicons';
import { useDropzone } from 'react-dropzone';
import FilesDragAndDrop from '@yelysei/react-files-drag-and-drop';



const DragDrop = props => {

  return(
    <>
    <FilesDragAndDrop
    onUpload={(files) => console.log(files)}
    count={3}
    formats={['jpg', 'png', 'svg']}
    containerStyles={{
        width: '200px',
        height: '200px',
        border: '1px solid #cccccc',
    }}
    openDialogOnClick
  >
      <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
      }}>
          Drop files here
      </div>
  </FilesDragAndDrop>
    </>
  )

}

export default DragDrop

