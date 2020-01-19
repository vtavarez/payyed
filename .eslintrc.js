module.exports = {
  settings: {
    "import/resolver": {
      node: {
        paths: ["src"]
      }
    }
  },
  extends: ["react-app", "plugin:jsx-a11y/recommended"],
  plugins: ["jsx-a11y"],
  rules: {
    "no-unused-vars": 0,
    "jsx-a11y/click-events-have-key-events": 0,
    "jsx-a11y/anchor-has-content": 0,
    "jsx-a11y/label-has-for": 1,
    "jsx-a11y/no-static-element-interactions": 0,
    "jsx-a11y/anchor-is-valid": 0,
    "jsx-a11y/media-has-caption": 0,
    "jsx-a11y/label-has-associated-control": [
      1,
      {
        labelComponents: [
          "Label",
          "CheckboxInputLabel",
          "RadioInputLabel",
        ],
        labelAttributes: ["label"],
        controlComponents: [
          "TextInput",
          "CheckboxInput",
          "DatePicker",
          "RadioInput",
          "TextArea",
          "CountrySelect",
          "CurrencySelect",
          "FormGroupControl"
        ],
        depth: 3
      }
    ]
  }
}
