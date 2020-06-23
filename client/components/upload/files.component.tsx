import { useQuery } from '@apollo/react-hooks';
import {
  ProductImagesDocument,
  ProductImagesQuery,
} from '../../graphql/generated-sdk';
import { FileThumbnailContainer, FileThumbnail } from './upload.styles';

export const FileThumbnails = () => {
  const { data, loading } = useQuery<ProductImagesQuery>(ProductImagesDocument);

  if (loading) {
    return <div>loading...</div>;
  }

  return (
    <FileThumbnailContainer>
      {data &&
        data.productImages.map(
          (file, index) => file && <FileThumbnail src={file.url} key={index} />
        )}
    </FileThumbnailContainer>
  );
};
