module.exports = {
	parser: "@typescript-eslint/parser",
	plugins: ["unicorn", "turbo"],
	extends: ["eslint:recommended", "plugin:@typescript-eslint/strict"],
	parserOptions: {
		ecmaVersion: "latest",
		sourceType: "module",
		project: "./tsconfig.eslint.json",
	},
	rules: {
		"no-extra-semi": "error",
		"no-multiple-empty-lines": ["warn", { "max": 1 }],
		"@typescript-eslint/explicit-function-return-type": "off",
		"@typescript-eslint/explicit-module-boundary-types": "off",
		"@typescript-eslint/no-unused-vars": "off",
		"@typescript-eslint/no-floating-promises": "error",
		"unicorn/filename-case": [
			"error",
			{
				case: "kebabCase"
			},
		]
	},
	"env": {
		"node": "true"
	}
};
