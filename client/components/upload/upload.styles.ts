import styled from 'styled-components';

interface IDropZoneContainer {
  disabled: 'false' | 'true';
  grabbing: 'false' | 'true'; // TODO: Figure out why the grabbing cursor doesn't work
}
export const DropzoneContainer = styled.div<IDropZoneContainer>`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 42em;
  height: 10em;

  background: ${(props) => props.theme.palette.primary}45;
  border-radius: 1em;

  cursor: grab;

  cursor: ${(props) =>
    props.disabled === 'true'
      ? 'no-drop'
      : props.grabbing === 'true'
      ? 'grabbing'
      : 'grab'};
`;
export const DropzoneInput = styled.input``;
export const FileThumbnailContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const FileThumbnail = styled.img`
  height: 7em;
  width: 7em;

  margin: 0.25em;
  border: 0.1em solid ${(props) => props.theme.palette.border.main};
`;
