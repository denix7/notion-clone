module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "react-app",
        "airbnb",
        "plugin:jsx-a11y/recommended",
        "prettier",
        "prettier/react"

    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "jsx-a11y",
        "prettier"

    ],
    "rules": {
        "prettier/prettier": "error",
        "react/jsx-filename-extension": [0],
        "import/extensions": "off",
        "jsx-a11y/anchor-is-valid": 0,
        'jsx-a11y/no-onchange': 'off',
        'jsx-a11y/interactive-supports-focus' : 'off',
        'prettier/prettier': 0,
        'react/prefer-stateless-function': 'off',
        'react/destructuring-assignment': 'off',
        'react/self-closing-comp': 'off',
        'import/no-named-as-default': 0,
        'import/no-named-as-default-member': 0,
        'import/no-unresolved' : 0,
    }
};