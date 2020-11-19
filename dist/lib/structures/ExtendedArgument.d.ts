import type { PieceContext } from '@sapphire/pieces';
import type { ArgType } from '../utils/Args';
import { Argument, ArgumentContext, ArgumentOptions, ArgumentResult, AsyncArgumentResult, IArgument } from './Argument';
/**
 * The extended argument class. This class is abstract and is to be extended by subclasses which
 * will implement the [[ExtendedArgument#handle]] method.
 * Much like the [[Argument]] class, this class handles parsing user-specified command arguments
 * into typed command parameters. However, this class can be used to expand upon an existing
 * argument in order to process its transformed value rather than just the argument string.
 *
 * @example
 * ```typescript
 * // TypeScript:
 * import { ApplyOptions } from '@sapphire/decorators';
 * import { ArgumentResult, ExtendedArgument, ExtendedArgumentContext, ExtendedArgumentOptions } from '@sapphire/framework';
 * import type { Channel, TextChannel } from 'discord.js';
 *
 * // Just like with `Argument`, you can use `export default` or `export =` too.
 * @ApplyOptions<ExtendedArgumentOptions>({
 *   name: 'textChannel',
 *   baseArgument: 'channel'
 * })
 * export class TextChannelArgument extends ExtendedArgument<'channel', TextChannel> {
 *   public handle(parsed: Channel, { argument }: ExtendedArgumentContext): ArgumentResult<TextChannel> {
 *     return parsed.type === 'text'
 *       ? this.ok(parsed as TextChannel)
 *       : this.error(argument, 'ArgumentTextChannelInvalidTextChannel', 'The argument did not resolve to a text channel.');
 *   }
 * }
 * ```
 *
 * @example
 * ```javascript
 * // JavaScript:
 * const { ExtendedArgument } = require('@sapphire/framework');
 *
 * module.exports = class TextChannelArgument extends ExtendedArgument {
 *   constructor(context) {
 *     super(context, { name: 'textChannel', baseArgument: 'channel' });
 *   }
 *
 *   handle(parsed, { argument }) {
 *     return parsed.type === 'text'
 *       ? this.ok(parsed)
 *       : this.error(argument, 'ArgumentTextChannelInvalidTextChannel', 'The argument did not resolve to a text channel/');
 *   }
 * }
 * ```
 */
export declare abstract class ExtendedArgument<K extends keyof ArgType, T> extends Argument<T> {
    baseArgument: K;
    constructor(context: PieceContext, options: ExtendedArgumentOptions<K>);
    /**
     * Represents the underlying argument that transforms the raw argument
     * into the value used to compute the extended argument's value.
     */
    get base(): IArgument<ArgType[K]>;
    run(argument: string, context: ArgumentContext): AsyncArgumentResult<T>;
    abstract handle(parsed: ArgType[K], context: ExtendedArgumentContext): ArgumentResult<T>;
}
export interface ExtendedArgumentOptions<K extends keyof ArgType> extends ArgumentOptions {
    /**
     * The name of the underlying argument whose value is used to compute
     * the extended argument value; see [[ArgType]] for valid keys.
     */
    baseArgument: K;
}
export interface ExtendedArgumentContext extends ArgumentContext {
    /**
     * The canonical argument specified by the user in the command, as
     * a string, equivalent to the first parameter of [[Argument#run]].
     * This allows [[ExtendedArgument#handle]] to access the original
     * argument, which is useful for returning [[Argument#error]] so
     * that you don't have to convert the parsed argument back into a
     * string.
     */
    argument: string;
}
//# sourceMappingURL=ExtendedArgument.d.ts.map