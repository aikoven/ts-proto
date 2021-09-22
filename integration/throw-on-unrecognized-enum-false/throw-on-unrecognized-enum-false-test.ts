import { StateEnum, stateEnumFromJSON } from './simple';

it('does not throw on unrecognized enum', () => {
  expect(stateEnumFromJSON(42)).toBe(StateEnum.UNKNOWN);
});
