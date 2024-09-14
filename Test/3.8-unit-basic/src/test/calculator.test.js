const Calculator = require("../calculator");

describe("Calculator", () => {
  let cal;
  beforeEach(() => {
    cal = new Calculator();
  });
  it("init with 0", () => {
    expect(cal.value).toBe(0);
  });

  it("sets", () => {
    cal.set(2);
    expect(cal.value).toBe(2);
  });

  it("clear", () => {
    cal.set(9);
    cal.clear();
    expect(cal.value).toBe(0);
  });

  it("adds", () => {
    cal.set(2);
    cal.add(2);
    expect(cal.value).toBe(4);
  });

  it("subtracts", () => {
    cal.subtract(2);
    expect(cal.value).toBe(-2);
  });

  it("multiplys", () => {
    cal.set(2);
    cal.multiply(2);
    expect(cal.value).toBe(4);
  });

  describe("divides", () => {
    it("divides", () => {
      cal.set(4);
      cal.divide(2);
      expect(cal.value).toBe(2);
    });

    it("0 / 0 === NAN", () => {
      cal.divide(0);
      expect(cal.value).toBe(NaN);
    });

    it("1 / 0 === Infinity", () => {
      cal.set(1);
      cal.divide(0);
      expect(cal.value).toBe(Infinity);
    });
  });
});
