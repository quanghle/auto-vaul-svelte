import { describe, it, expect } from "vitest";
import { isVertical, isBottomOrRight } from "./is.js";

describe("isVertical", () => {
	it("returns true for 'top'", () => {
		expect(isVertical("top")).toBe(true);
	});

	it("returns true for 'bottom'", () => {
		expect(isVertical("bottom")).toBe(true);
	});

	it("returns false for 'left'", () => {
		expect(isVertical("left")).toBe(false);
	});

	it("returns false for 'right'", () => {
		expect(isVertical("right")).toBe(false);
	});
});

describe("isBottomOrRight", () => {
	it("returns true for 'bottom'", () => {
		expect(isBottomOrRight("bottom")).toBe(true);
	});

	it("returns true for 'right'", () => {
		expect(isBottomOrRight("right")).toBe(true);
	});

	it("returns false for 'top'", () => {
		expect(isBottomOrRight("top")).toBe(false);
	});

	it("returns false for 'left'", () => {
		expect(isBottomOrRight("left")).toBe(false);
	});
});
