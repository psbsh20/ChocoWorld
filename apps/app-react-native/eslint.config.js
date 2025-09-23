// // https://docs.expo.dev/guides/using-eslint/
import config from "@repo/eslint-config/react-native";
import expoConfig from "eslint-config-expo/flat.js";
import { defineConfig } from "eslint/config";

/** @type {import("eslint").Linter.Config} */
export default defineConfig(expoConfig, config, {
  rules: {},
});
