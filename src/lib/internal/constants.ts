export const TRANSITIONS = {
	DURATION: 0.5,
	EASE: [0.32, 0.72, 0, 1],
};

export const TRANSITION_TIMING = `cubic-bezier(${TRANSITIONS.EASE.join(",")})`;
export const TRANSFORM_TRANSITION = `transform ${TRANSITIONS.DURATION}s ${TRANSITION_TIMING}`;
export const OPACITY_TRANSITION = `opacity ${TRANSITIONS.DURATION}s ${TRANSITION_TIMING}`;

export const VELOCITY_THRESHOLD = 0.4;
