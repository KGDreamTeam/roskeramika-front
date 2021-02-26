export const roundCalculationPlus = (prev) => {
	return Math.round((prev + 0.1) * 10) / 10
}

export const roundCalculationMinus = (prev) => {
	return Math.round((prev - 0.1) * 10) / 10
}
