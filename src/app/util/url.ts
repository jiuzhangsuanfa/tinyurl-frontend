export const REG_IS_VALID_URL = /^(http[s]?):\/\/(.*)$/;
export const REG_HOST = /mock.don.red\/tinyurl\//;

export function isValidURL(url: string): boolean {
  return !!url.match(REG_IS_VALID_URL);
}

export function isInvalidURL(url: string): boolean {
  return !isValidURL(url);
}

export function isLongURL(url: string): boolean {
  const match = url.match(REG_IS_VALID_URL);
  return !match[2] || !match[2].match(REG_HOST)
}

export function isShortURL(url: string): boolean {
  return isValidURL(url) && !isLongURL(url);
}

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
