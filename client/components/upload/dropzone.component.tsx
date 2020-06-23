import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { useMutation } from '@apollo/react-hooks';

import { DropzoneContainer, DropzoneInput } from './upload.styles';
import {
  UploadProductImageDocument,
  ProductImagesDocument,
} from '../../graphql/generated-sdk';

interface IProductImageDropZone {
  productId: string;
  disabled: boolean;
  disabledText?: string;
}
export const ProductImageDropZone: React.FC<IProductImageDropZone> = ({
  productId,
  disabled,
  disabledText,
}) => {
  const [grabbing, setGrabbing] = useState<'true' | 'false'>('false');

  const [uploadFile] = useMutation(UploadProductImageDocument, {
    refetchQueries: [{ query: ProductImagesDocument }],
  });
  const onDrop = useCallback(
    ([file]) => {
      if (!disabled) {
        uploadFile({ variables: { id: productId, file } });
      }
    },
    [uploadFile]
  );
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    disabled,
  });

  const onDrag = (event: React.MouseEvent) => {
    console.log(event.button, event.buttons);
    setGrabbing(event.buttons === 1 ? 'true' : 'false');
  };

  return (
    <DropzoneContainer
      {...getRootProps()}
      disabled={disabled ? 'true' : 'false'}
      grabbing={grabbing}
      onDragEnter={onDrag}
    >
      <DropzoneInput {...getInputProps()} />
      {disabled && <p>{disabledText || 'Disabled'}</p>}
      {disabled ? null : isDragActive ? (
        <p>Drop the files here ...</p>
      ) : (
        <p>Drag 'n' drop some files here, or click to select files</p>
      )}
    </DropzoneContainer>
  );
};
