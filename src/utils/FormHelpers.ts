import { findKey } from 'lodash';

export const formInputFactory = (labels: string[], obj: {}): Array<{}> => {
  return labels.map((label: string) => {
    const key = findKey(obj, v => v === label);
    return {
      type: 'text',
      placeholder: label,
      name: key,
      defaultValue: '',
      controlId: `validationCustom${key}`
    };
  });
};

export const isValid = (event: {
  currentTarget: HTMLFormElement;
  preventDefault: () => void;
  stopPropagation: () => void;
}): boolean => {
  const form = event.currentTarget;
  if (!form.checkValidity()) {
    event.preventDefault();
    event.stopPropagation();
  }
  return true;
};
