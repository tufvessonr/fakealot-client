import { QueryResolvers, FileData } from '../../generated-types';
import {
  firebaseBucket,
  FirebaseEngine,
} from '../../../engine/firebase.engine';
import { validateProductImagesArgs } from '../../validations/upload';

export const productImages: QueryResolvers['productImages'] = async function productImages(
  parent,
  args,
  ctx
): Promise<FileData[]> {
  const { id } = await validateProductImagesArgs(args);

  const fileData: FileData[] = [];
  const [files] = await firebaseBucket.getFiles({
    directory: `product/images/${id}`,
  });
  for (let file of files) {
    const { url, expires } = await FirebaseEngine.generateSignedUrl(
      firebaseBucket.name,
      file.name
    );
    fileData.push({ url, expires });
  }

  return fileData;
};
