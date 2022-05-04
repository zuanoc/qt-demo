module.exports = {
  // Source: https://groups.google.com/forum/#!topic/eslint/ttZUG3v7vn0
  // Plugins are a set of rules distributed as NPM package. Configs are pre-defined configuration of
  // rules (either default or plugin based). Those two don’t have much in common. Plugins can include
  // shareable configs, however configs can’t include plugin rules. So, in short, plugins contain
  // definitions for custom rules, and configs explain whether those rules should be enabled or disabled
  // and how they should be configured.

  // See also: https://indepth.dev/setting-up-efficient-workflows-with-eslint-prettier-and-typescript/
  // See also: https://stackoverflow.com/questions/53189200/whats-the-difference-between-plugins-and-extends-in-eslint#54522973
  // See also: https://eslint.org/docs/user-guide/configuring#extending-configuration-files
  // See also: https://eslint.org/docs/user-guide/configuring#configuring-plugins
  // See also: https://github.com/typescript-eslint/typescript-eslint#can-i-use-all-of-the-existing-eslint-plugins-and-rules-without-any-changes
  // See also: https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin#supported-rules
  // See also: eslint(https://github.com/eslint/eslint/blob/master/packages/eslint-config-eslint/default.yml):recommended(https://github.com/eslint/eslint/blob/master/conf/eslint-recommended.js)
  // See also: https://gitter.im/eslint/eslint
  "extends": [
    "airbnb-typescript/base",                 // eslint-config-airbnb-typescript
    "plugin:@typescript-eslint/recommended",  // @typescript-eslint/eslint-plugin
    "plugin:eslint-comments/recommended",     // eslint-plugin-eslint-comments
    "plugin:promise/recommended",             // eslint-plugin-promise
    "plugin:unicorn/recommended",             // eslint-plugin-unicorn
    "plugin:prettier/recommended",            // eslint-plugin-prettier
    "plugin:import/recommended",
    "prettier",                               // eslint-config-prettier
  ],
  "plugins": [
    "@nrwl/nx",
    "@typescript-eslint",                     // @typescript-eslint/eslint-plugin
    "eslint-comments",                        // eslint-plugin-eslint-comments
    "promise",                                // eslint-plugin-promise
    "unicorn" ,                               // eslint-plugin-unicorn
    "prettier",                               // eslint-plugin-prettier
    "unused-imports",
  ],
  "parserOptions": {
    "project": "./tsconfig.json",
    "ecmaVersion": 2020,
    "sourceType": "module"
  },
  "env": {
    "es6": true,
    "browser": true,
    "node": true,
    "jasmine": false,
  },
  "rules": {
    "max-classes-per-file": "off",
    "promise/always-return": "off",
    "promise/catch-or-return": "off",
    "unicorn/no-fn-reference-in-iterator": "off",
    "no-debugger": "error",
    "no-underscore-dangle": "error",
    "no-param-reassign": "error",
    "no-console": "warn",
    "no-shadow": "off",
    "new-cap": "off",
    "unused-imports/no-unused-imports": "error",
    "lines-between-class-members": "error",
    "class-methods-use-this": "off",
    "no-prototype-builtins": "off",
    "unicorn/prefer-module": "off",
    "unicorn/prefer-node-protocol": "off",
    "unicorn/no-static-only-class": "off",
    "unicorn/prevent-abbreviations": "off",
    "unicorn/consistent-function-scoping": "warn",
    "unicorn/no-null": "off",
    "unicorn/filename-case": [
      "warn",
      {
        "case": "kebabCase",
        "ignore": [
          "jsx$",
          "tsx$",
        ]
      }
    ],
    "import/no-extraneous-dependencies": "off",
    "import/prefer-default-export": "off",
    "import/no-default-export": "off",
    "import/extensions": "off",
    "import/named": "off",
    "import/no-unresolved": "off",
    "@typescript-eslint/no-shadow": "error",
    "@typescript-eslint/camelcase": "off",
    '@typescript-eslint/indent': 'off', // turn off to use pretitier indent, avoid conflicts
    "@typescript-eslint/no-unused-vars": "off",
    "@typescript-eslint/no-unused-expressions": "warn",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-var-requires": "error",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-use-before-define": ["error", {
      "functions": false,
      "classes": true,
      "variables": true,
      "typedefs": true
    }],
    "quotes": ["error", "single", {
      "allowTemplateLiterals": true
    }],
  },
  "settings": {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"]
    },
  },
  "overrides": [
    {
      "files": ["*.ts", "*.tsx", "*.js", "*.jsx"],
      "rules": {
        "@nrwl/nx/enforce-module-boundaries": [
          "error",
          {
            "enforceBuildableLibDependency": true,
            "allow": [],
            "depConstraints": [
              {
                "sourceTag": "*",
                "onlyDependOnLibsWithTags": ["*"]
              }
            ]
          }
        ]
      }
    },
    {
      "files": ["*.ts", "*.tsx"],
      "extends": ["plugin:@nrwl/nx/typescript"],
      "rules": {}
    },
    {
      "files": ["*.js", "*.jsx"],
      "extends": ["plugin:@nrwl/nx/javascript"],
      "rules": {}
    }
  ]
}
