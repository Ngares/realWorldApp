/* eslint-disable @typescript-eslint/no-magic-numbers */
module.exports = {
    settings: {
        'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
        'import/parsers': { '@typescript-eslint/parser': ['.ts', '.tsx'] },
        'import/resolver': { typescript: true, node: { extensions: ['.js', '.jsx', '.ts', '.tsx'] } },
    },

    rules: {
        'array-bracket-newline': ['error', 'consistent'],
        'array-element-newline': ['error', 'consistent'],

        'arrow-body-style': 'off',

        camelcase: ['error'],

        complexity: ['warn', 30],

        curly: ['error', 'all'],

        'function-paren-newline': ['error', 'consistent'],

        'id-length': ['warn', { min: 1, max: 50 }],

        'max-depth': ['warn', 10],

        'max-len': ['error', { code: 180 }],

        'max-lines': ['error', 1000],

        'max-lines-per-function': ['warn', 300],

        'max-nested-callbacks': ['warn', 20],

        'max-params': ['error', 10],

        'multiline-comment-style': ['error', 'starred-block'],

        'no-console': 'error',

        'no-param-reassign': ['error', { props: true, ignorePropertyModificationsFor: ['reducerState'] }],

        'no-plusplus': 'off',

        'no-undef': 'off',

        'object-curly-newline': ['error', { consistent: true }],

        'prefer-destructuring': 'off',

        'prefer-promise-reject-errors': 'off',

        'prefer-template': 'off',

        'sort-keys': ['off', 'asc', { caseSensitive: false, natural: true }],

        'space-before-function-paren': ['error', 'always'],

        'import/extensions': ['error', 'never', { css: 'always', less: 'always' }],

        'import/prefer-default-export': 'off',

        'import/no-deprecated': 'warn',

        indent: ['error', 4],

        'import/no-namespace': 'error',

        'import/no-unresolved': 'off',

        'import/order': ['error', {
            groups: ['builtin', 'external', 'internal'],
            alphabetize: { order: 'asc', caseInsensitive: true },
        }],

        'react/boolean-prop-naming': ['warn', {
            propTypeNames: ['bool', 'mutuallyExclusiveTrueProps'],
            rule: '^(is|has)[A-Z]([A_Za-z0-9]?)+',
        }],

        'react/destructuring-assignment': 'off',

        'react/jsx-curly-newline': 'off',

        'react/jsx-curly-spacing': ['error', { when: 'always', children: { when: 'never' } }],

        'react/jsx-filename-extension': ['error', { extensions: ['.jsx', '.tsx'] }],

        'react/jsx-first-prop-new-line': ['error', 'multiline'],

        'react/jsx-handler-names': 'error',

        'react/jsx-indent-props': ['error', 4],

        'react/jsx-indent': ['error', 4],

        'react/jsx-key': 'error',

        'react/jsx-max-depth': ['error', { max: 10 }],

        'react/jsx-no-bind': 'warn',

        'react/jsx-props-no-spreading': 'warn',

        'react/jsx-sort-props': ['error', { ignoreCase: true, shorthandLast: true, reservedFirst: true }],

        'react/no-adjacent-inline-elements': 'error',

        'react/no-array-index-key': 'warn',

        'react/no-danger': 'error',

        'react/no-multi-comp': 'error',

        'react/require-default-props': 'off',
    },
};
