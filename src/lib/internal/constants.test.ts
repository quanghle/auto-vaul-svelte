import { describe, it, expect } from "vitest";
import {
	TRANSITIONS,
	TRANSITION_TIMING,
	TRANSFORM_TRANSITION,
	OPACITY_TRANSITION,
	VELOCITY_THRESHOLD,
} from "./constants.js";

describe("constants", () => {
	it("TRANSITION_TIMING is a precomputed cubic-bezier string", () => {
		expect(TRANSITION_TIMING).toBe("cubic-bezier(0.32,0.72,0,1)");
	});

	it("TRANSFORM_TRANSITION uses correct duration and timing", () => {
		expect(TRANSFORM_TRANSITION).toBe(`transform ${TRANSITIONS.DURATION}s ${TRANSITION_TIMING}`);
	});

	it("OPACITY_TRANSITION uses correct duration and timing", () => {
		expect(OPACITY_TRANSITION).toBe(`opacity ${TRANSITIONS.DURATION}s ${TRANSITION_TIMING}`);
	});

	it("VELOCITY_THRESHOLD is defined", () => {
		expect(VELOCITY_THRESHOLD).toBe(0.4);
	});
});
