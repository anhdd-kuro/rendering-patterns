import { to2DigitsMonthString, DateFormat, to2DigitsDateString, toString } from ".";

describe("Date helper", () => {
  describe("to2DigitsMonthString", () => {
    it("should convert correctly", async () => {
      const input = new Date("2022-05-14");
      const result = to2DigitsMonthString(input);
      expect(result).equal("05");
      expect(result).toMatchSnapshot();
    });
  });

  describe("to2DigitsDateString", () => {
    it("should convert correctly", async () => {
      const input = new Date("2022-05-14");
      const result = to2DigitsDateString(input);
      expect(result).equal("14");
      expect(result).toMatchSnapshot();
    });
  });

  describe("toString", () => {
    (
      [
        {
          date: new Date("2022-05-14"),
          format: "yyyy-mm-dd",
          result: "2022-05-14",
        },
        {
          date: new Date("2022-05-14"),
          format: "yyyy/mm/dd",
          result: "2022/05/14",
        },
      ] as { date: Date; format: DateFormat; result: string }[]
    ).forEach(({ date, format, result: expectedResult }) => {
      it(`format: ${format} should convert to ${expectedResult}`, async () => {
        const result = toString(date, format);
        expect(result).equal(expectedResult);
        expect(result).toMatchSnapshot();
      });
    });
  });
});
