module.exports = {
  extends: [
    'next/core-web-vitals',
    'airbnb',
    'airbnb/hooks',
  ],
  env: {
    'jest/globals': true,
  },
  plugins: [
    'jest',
  ],
  rules: {
    'react/jsx-filename-extension': ['error',
      {
        extensions: ['.tsx'],
      },
    ],
    'react/function-component-definition': ['error',
      {
        namedComponents: 'arrow-function',
      },
    ],
    'import/extensions': ['error', 'ignorePackages',
      {
        tsx: 'never',
        ts: 'never',
      },
    ],
    'react/require-default-props': 'off',
    'import/no-extraneous-dependencies': ['error', {
      devDependencies: ['**/*.test.{ts,tsx}', '**/*.spec.{ts,tsx}'],
    }],
  },
};
