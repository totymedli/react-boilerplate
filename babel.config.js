module.exports = {
  presets: [
    ['@babel/preset-env', {
      useBuiltIns: 'usage',
      corejs: 3,
    }],
    '@babel/preset-react',
  ],/*
  plugins: [
    "@babel/plugin-proposal-decorators",
    "@babel/plugin-proposal-class-properties",
    "@babel/plugin-syntax-dynamic-import",
    "@babel/plugin-proposal-async-generator-functions",
    "@babel/plugin-proposal-object-rest-spread",
    "@babel/plugin-transform-async-to-generator",
    "@babel/plugin-transform-exponentiation-operator",
  ],*/
}

/*

    "@babel/plugin-proposal-async-generator-functions": "^7.2.0",
    "@babel/plugin-proposal-class-properties": "^7.5.5",
    "@babel/plugin-proposal-decorators": "^7.6.0",
    "@babel/plugin-proposal-object-rest-spread": "^7.6.2",
    "@babel/plugin-syntax-dynamic-import": "^7.2.0",
    "@babel/plugin-transform-async-to-generator": "^7.5.0",
    "@babel/plugin-transform-exponentiation-operator": "^7.2.0",
*/