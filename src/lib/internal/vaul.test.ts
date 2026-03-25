import { describe, it, expect } from "vitest";
import { dampenValue } from "./vaul.js";

describe("dampenValue", () => {
	it("returns negative for small values", () => {
		expect(dampenValue(1)).toBeCloseTo(8 * (Math.log(2) - 2));
	});

	it("returns 0 when v equals e^2 - 1", () => {
		// 8 * (Math.log(v + 1) - 2) = 0 when Math.log(v + 1) = 2, i.e. v + 1 = e^2, v = e^2 - 1
		const v = Math.E ** 2 - 1;
		expect(dampenValue(v)).toBeCloseTo(0);
	});

	it("returns positive for large values", () => {
		expect(dampenValue(100)).toBeGreaterThan(0);
	});

	it("increases monotonically", () => {
		expect(dampenValue(50)).toBeLessThan(dampenValue(100));
		expect(dampenValue(100)).toBeLessThan(dampenValue(200));
	});
});
