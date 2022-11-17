import { intoRoman } from '../src/romanNumbers';

describe("intoRoman", () => {

    it("it should return XX if valid input number 20", () => {
        expect(intoRoman(20)).toBe("XX");
    });

    it("it should return M if valid input number 1000", () => {
        expect(intoRoman(1000)).toBe("M");
    });

    it("it should return XII if valid input number 12", () => {
        expect(intoRoman(12)).toBe("XII");
    });

    it("it should return XVIII if valid input number 18", () => {
        expect(intoRoman(18)).toBe("XVIII");
    });

    it("it should return LXXX if valid input number 80", () => {
        expect(intoRoman(80)).toBe("LXXX");
    });
})