module.exports = {
	parser: "@typescript-eslint/parser", // Specifies the ESLint parser
	plugins: ["unicorn", "turbo"],
	extends: [
		"plugin:@typescript-eslint/recommended", // Uses the recommended rules from the @typescript-eslint/eslint-plugin
	],
	parserOptions: {
		ecmaVersion: "latest", // Allows for the parsing of modern ECMAScript features
		sourceType: "module", // Allows for the use of import
		project: "./tsconfig.eslint.json", // Allows for the use of rules which require parserServices to be generated
	},
	rules: {
		// Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
		"@typescript-eslint/explicit-function-return-type": "off",
		"@typescript-eslint/explicit-module-boundary-types": "off",
		"@typescript-eslint/no-unused-vars": "off",
		"@typescript-eslint/no-floating-promises": "error",
		"unicorn/filename-case": [
			"error",
			{
				case: "camelCase",
			},
		]
	},
};
