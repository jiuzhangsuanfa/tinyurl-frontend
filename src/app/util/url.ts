/* eslint-disable no-shadow */
export const REG_IS_VALID_URL = /^(http[s]?):\/\/(.*)$/;
export const REG_HOST = /mock.don.red\/tinyurl\//;

export const isValidURL = (url: string): boolean => !!url.match(REG_IS_VALID_URL);

export const isInvalidURL = (url: string): boolean => !isValidURL(url);

export const isLongURL = (url: string): boolean => {
  const match = url.match(REG_IS_VALID_URL);
  return !!match && !match[2] && !match[2].match(REG_HOST);
};

export const isShortURL = (url: string): boolean => isValidURL(url) && !isLongURL(url);

export enum Icon {
  invalid = 'help_outline',
  shorten = 'link',
  copy = 'content_copy'
}


export enum Tip {
  invalid = 'Enter your link to continue',
  shorten = 'Generate short link',
  copy = 'Copy short link'
}

export enum ButtonText {
  invalid = 'Invalid',
  shorten = 'Shorten',
  copy = 'Copy',
  copied = 'Copied'
}
