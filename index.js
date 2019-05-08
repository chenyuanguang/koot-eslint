module.exports = ({
    "extends": ["react-app", "prettier", "prettier/react"],
    "plugins": ["prettier"],
    "env": {
        "browser": true,
        "node": true,
        "commonjs": true,
        "amd": true,
        "es6": true,
        "mocha": true,
        "jquery": true
    },
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module",
        "ecmaFeatures": {
            "globalReturn": false,
            "impliedStrict": true,
            "jsx": true,
            "experimentalObjectRestSpread": true
        }
    },
    "globals": {
        "__DIST__": false,
        "__DEV__": false,
        "__CLIENT__": false,
        "__SERVER__": false,
        "__SPA__": false,
        "__QA__": false,
        "__REDUX_STATE__": false,
        "__": false,
        "KootExtend": false,
        "ReducerTypes": false,
        "ActionTypes": false,
        "Api": false,
        "Store": false,
        "Project": false
    },
    "settings": {
        "import/ignore": ["node_modules"]
    },
    "rules": {
        "react/jsx-filename-extension": [
            1,
            {
                "extensions": [".js", ".jsx", ".tsx"]
            }
        ],
        "react/prop-types": 0,
        "no-underscore-dangle": 0,
        "import/imports-first": ["error", "absolute-first"],
        "import/newline-after-import": "error",
        "import/no-extraneous-dependencies": 0,
        "import/prefer-default-export": 0
    }
})