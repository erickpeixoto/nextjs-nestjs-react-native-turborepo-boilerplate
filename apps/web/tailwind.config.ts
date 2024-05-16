
import { config as sharedConfig } from "tailwind-config";

const config = {
  content: ["./**/app/**/*.tsx"],
  presets: [sharedConfig],
};

export default config;