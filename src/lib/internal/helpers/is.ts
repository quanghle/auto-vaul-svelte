import type { DrawerDirection } from "../types.js";

// HTML input types that do not cause the software keyboard to appear.
const nonTextInputTypes = new Set([
	"checkbox",
	"radio",
	"range",
	"color",
	"file",
	"image",
	"button",
	"submit",
	"reset",
]);

export const isBrowser = typeof document !== "undefined";

export function isInput(target: Element) {
	return (
		(target instanceof HTMLInputElement && !nonTextInputTypes.has(target.type)) ||
		target instanceof HTMLTextAreaElement ||
		(target instanceof HTMLElement && target.isContentEditable)
	);
}

export function isVertical(direction: DrawerDirection) {
	return direction === "top" || direction === "bottom";
}

export function isBottomOrRight(direction: DrawerDirection) {
	return direction === "bottom" || direction === "right";
}
