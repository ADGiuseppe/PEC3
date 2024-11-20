const a: string = 1 + 2;
const b: number = a + 3;
const c: { apple: string, banana: number } = {
  apple: a,
  banana: b
};
const d: string = c.apple * 4;