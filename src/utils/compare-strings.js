export default function testString(regexp, str) {
  const normalizedStr = str
    .replaceAll(/[ёЁ]/g, 'е')
    .replaceAll(/[^а-яА-ЯйЙa-zA-Z ]/g, '')
    .replaceAll(/\s+/g, ' ')
    .trim()
    .toLowerCase();

  return new RegExp(regexp).test(normalizedStr);
}