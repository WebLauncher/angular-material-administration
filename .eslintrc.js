module.exports = {
  extends: ['plugin:@angular-eslint/recommended'],
  rules: {
    // ORIGINAL tslint.json -> "directive-selector": [true, "attribute", "app", "camelCase"],
    '@angular-eslint/directive-selector': [
      'error',
      { type: 'attribute', prefix: 'app', style: 'camelCase' },
    ],
    // ORIGINAL tslint.json -> "component-selector": [true, "element", "app", "kebab-case"],
    '@angular-eslint/component-selector': [
      'error',
      { type: 'element', prefix: 'app', style: 'kebab-case' },
    ],
  },
  overrides: [
    // Add this rules, if you use inline templates inside *.component.ts files
    {
      files: ['*.component.ts'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
      },
      plugins: ['@angular-eslint/template'],
      processor: '@angular-eslint/template/extract-inline-html',
    },
    {
      files: ['src/**/*.spec.ts', 'src/**/*.d.ts'],
      parserOptions: {
        project: './tsconfig.spec.json',
      },
      // Jasmine rules
      extends: ['plugin:jasmine/recommended'],
      // Plugin to run Jasmine rules
      plugins: ['jasmine'],
      env: { jasmine: true },
      // Turn off 'no-unused-vars' rule
      rules: {
        '@typescript-eslint/no-unused-vars': 'off',
      },
    },
    {
      files: ['*.ts'],
      extends: [
        'airbnb-typescript/base',
        'prettier/@typescript-eslint',
        'plugin:prettier/recommended'
      ],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
      },
      // Custom rules
      rules: {
        'import/no-unresolved': 'off',
        'import/prefer-default-export': 'off',
        'class-methods-use-this': 'off',
        'lines-between-class-members': 'off',
        '@typescript-eslint/unbound-method': [
          'error',
          {
            ignoreStatic: true,
          },
        ],
        "@typescript-eslint/camelcase": "off",
        "@typescript-eslint/naming-convention": "off",
      },
    },
    {
      files: ["*.component.html"],
      extends: ["plugin:@angular-eslint/template/recommended"],
      rules: {
        /**
         * Any template/HTML related rules you wish to use/reconfigure over and above the
         * recommended set provided by the @angular-eslint project would go here.
         *
         * There is an example below from ESLint core (note, this specific example is not
         * necessarily recommended for all projects):
         */
        "max-len": ["error", { "code": 140 }]
      }
    },
  ],
};
