type HSLColor = [number, number, number]
type ColorScheme = Record<string, HSLColor>;
type CSSToken = string;

function HSLToString(value: HSLColor) {
	const [h, s, l] = value;

	return `hsl(${h}, ${s}%, ${l}%)`
}

function changeLightness(value: HSLColor, amount: number): HSLColor {
	const [h, s, l] = value;

	// 0 <= totalL <= 100
	const totalL = l + amount > 100 ? 100 : l + amount < 0 ? 0 : amount

	return [h, s, totalL]
}

const HSLColorScheme: ColorScheme = {
	'light': [0, 0, 100],
	'dark': [349, 48, 9],
	'warn': [52, 100, 65],
	'danger': [356, 100, 67],
	'success': [145, 82, 44],
	'main': [211, 43, 38],
	'accent': [206, 100, 60],
}

export function getColorSchemaTokens(colorScheme: ColorScheme): CSSToken[] {
	const tokens: string[] = []

	for (const key in colorScheme) {
		const color = colorScheme[key]
		const lightenVariant = changeLightness(color, 10);
		const darkenVariant = changeLightness(color, -10);
		const lightestVariant = changeLightness(color, 20);
		const darkestVariant = changeLightness(color, -20);

		tokens.push(`--${key}: ${HSLToString(color)}`)

		tokens.push(`--${key}-lighten: ${HSLToString(lightenVariant)}`)
		tokens.push(`--${key}-darken: ${HSLToString(darkenVariant)}`)

		// is it better to leave this colors as duplicates because it's convenient?
		if (lightenVariant[2] != lightestVariant[2]) {
			tokens.push(`--${key}-lightest: ${HSLToString(lightestVariant)}`);
		}
		if (darkenVariant[2] !== lightenVariant[2]) {
			tokens.push(`--${key}-darkest: ${HSLToString(darkestVariant)}`)
		}
	}

	return tokens
}

const colorSchemeStyleSheet = new CSSStyleSheet()
colorSchemeStyleSheet.insertRule(`:root { ${getColorSchemaTokens(HSLColorScheme).join(';')} }`)
document.adoptedStyleSheets = [colorSchemeStyleSheet]
