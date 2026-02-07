export default [
 {
  files: ["**/*.js"],
  ignores: ["node_modules/**"],
  rules: {
   "no-unused-vars": "warn",
   "no-undef": "error"
  }
 }
];