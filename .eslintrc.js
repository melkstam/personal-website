module.exports = {
  extends: [
    'next/core-web-vitals',
    'airbnb',
    'airbnb/hooks',
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
    'jsx-a11y/label-has-associated-control': ['error', {

    }],
  },
};
