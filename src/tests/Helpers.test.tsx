import { capitalize, createIdName } from '../helpers';

test('capitalize', () => {
  expect(capitalize('test')).toBe('Test');
})

test('createIdName', () => {
  expect(createIdName('Hey how are ya Go0d')).toBe('HeyHowAreYaGo0d');
})