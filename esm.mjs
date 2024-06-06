import * as commander from './index.mjs';

// wrapper to provide named exports for ESM.
export const {
  program,
  createCommand,
  createArgument,
  createOption,
  CommanderError,
  InvalidArgumentError,
  Command,
  Argument,
  Option,
  Help,
} = commander;
