module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true
    },
    "extends": [
        "plugin:@typescript-eslint/recommended",
        "plugin:react/recommended",
        "airbnb",
        "airbnb/hooks"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "@typescript-eslint"
    ],
    "rules": {
      'import/extensions': [
        ERROR,
        'ignorePackages',
        {
          ts: 'never',
          tsx: 'never',
          json: 'never',
          js: 'never',
        },
      ],
    }
};
