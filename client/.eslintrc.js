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
        "import/extensions": "off"
    }
};