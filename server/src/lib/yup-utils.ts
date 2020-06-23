import * as yup from 'yup';

const UUID_REGEX = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
export const uuidShape = yup.string().matches(UUID_REGEX, '${path} is invalid');
