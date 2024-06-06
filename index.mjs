import { Argument } from './lib/argument.mjs';
import { Command } from './lib/command.mjs';
import { CommanderError, InvalidArgumentError } from './lib/error.mjs';
import { Help } from './lib/help.mjs';
import { Option } from './lib/option.mjs';

export const program = new Command();

export function createCommand(name) {
  return new Command(name);
}

export function createOption(flags, description) {
  return new Option(flags, description);
}

export function createArgument(name, description) {
  return new Argument(name, description);
}

export {
  Command,
  Argument,
  Option,
  Help,
  CommanderError,
  InvalidArgumentError
}
