/* eslint-disable @typescript-eslint/no-magic-numbers */
module.exports = {
    parserOptions: {
        project: './tsconfig.json',
    },

    rules: {
        '@typescript-eslint/array-type': ['error', { default: 'array-simple', readonly: 'array-simple' }],

        '@typescript-eslint/brace-style': ['error', '1tbs', { allowSingleLine: true }],

        '@typescript-eslint/comma-dangle': ['error', {
            arrays: 'always-multiline',
            objects: 'always-multiline',
            imports: 'always-multiline',
            exports: 'always-multiline',
            functions: 'always-multiline',
            enums: 'always-multiline',
            generics: 'always-multiline',
            tuples: 'always-multiline',
        }],

        '@typescript-eslint/consistent-type-exports': ['error', { fixMixedExportsWithInlineTypeSpecifier: true }],

        '@typescript-eslint/consistent-type-imports': ['error', {
            prefer: 'type-imports',
            disallowTypeAnnotations: true,
            fixStyle: 'inline-type-imports',
        }],

        '@typescript-eslint/indent': ['error', 4, { SwitchCase: 1 }],

        '@typescript-eslint/init-declarations': 'off',

        '@typescript-eslint/keyword-spacing': ['error', { before: true, after: true }],

        '@typescript-eslint/naming-convention': 'off',

        '@typescript-eslint/no-dynamic-delete': 'warn',

        '@typescript-eslint/no-extra-parens': 'off',

        '@typescript-eslint/no-floating-promises': 'off',

        '@typescript-eslint/no-magic-numbers': ['error', {
            ignore: [0, 1, -1],
            detectObjects: false,
            enforceConst: true,
            ignoreEnums: true,
            ignoreNumericLiteralTypes: true,
        }],

        '@typescript-eslint/no-misused-promises': ['error', { checksVoidReturn: { attributes: false } }],

        '@typescript-eslint/no-restricted-imports': ['error', { patterns: ['*/**/index'] }],

        '@typescript-eslint/no-type-alias': 'off',

        '@typescript-eslint/no-unnecessary-condition': 'off',

        '@typescript-eslint/no-unused-expressions': ['error', {
            allowShortCircuit: true,
            allowTernary: true,
            allowTaggedTemplates: false,
            enforceForJSX: true,
        }],

        '@typescript-eslint/no-unused-vars': ['error', { vars: 'all', args: 'after-used', ignoreRestSiblings: true }],

        '@typescript-eslint/non-nullable-type-assertion-style': 'off',

        '@typescript-eslint/object-curly-spacing': ['error', 'always'],

        '@typescript-eslint/padding-line-between-statements': [
            'error',
            { blankLine: 'always', prev: 'import', next: '*' },
            { blankLine: 'any', prev: 'import', next: 'import' },

            { blankLine: 'always', prev: '*', next: ['return', 'throw'] },

            { blankLine: 'always', prev: '*', next: ['block-like', 'interface'] },
            { blankLine: 'always', prev: ['block-like', 'interface'], next: '*' },
            { blankLine: 'any', prev: '*', next: ['case', 'break'] },

            { blankLine: 'always', prev: ['const', 'let', 'var', 'type'], next: '*' },
            { blankLine: 'any', prev: ['const', 'let', 'var', 'type'], next: ['const', 'let', 'var', 'type'] },
        ],

        '@typescript-eslint/prefer-nullish-coalescing': 'off',

        '@typescript-eslint/prefer-readonly-parameter-types': 'off',

        '@typescript-eslint/quotes': ['error', 'single', { avoidEscape: true }],

        '@typescript-eslint/require-await': 'off',

        '@typescript-eslint/sort-type-constituents': 'off',

        '@typescript-eslint/space-before-function-paren': ['error', 'always'],

        '@typescript-eslint/strict-boolean-expressions': 'off',

        '@typescript-eslint/typedef': 'off',

        '@typescript-eslint/unbound-method': 'off',

    },
};
