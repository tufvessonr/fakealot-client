import { MutationResolvers, UploadScalarConfig } from '../../generated-types';
import { firebaseBucket } from '../../../engine/firebase.engine';
import { validateUploadProductImageArgs } from '../../validations/upload';
export const uploadProductImage: MutationResolvers['uploadProductImage'] = async function uploadProductImage(
  parent,
  args,
  ctx
): Promise<UploadScalarConfig[]> {
  const { id, file } = await validateUploadProductImageArgs(args);

  const files: UploadScalarConfig[] = []; // TODO: Do something about returned result

  const { createReadStream, filename } = await file;

  const result = await new Promise((res) =>
    createReadStream()
      .pipe(
        firebaseBucket
          .file(`product/${id}/images/${filename}`)
          .createWriteStream({
            resumable: false,
            gzip: true,
          })
      )
      .on('close', res)
  );

  return files;
};
