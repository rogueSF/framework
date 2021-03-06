import type { PieceContext } from '@sapphire/pieces';
import type { GuildChannel, VoiceChannel } from 'discord.js';
import type { ArgumentResult } from '../lib/structures/Argument';
import { ExtendedArgument, ExtendedArgumentContext } from '../lib/structures/ExtendedArgument';

export class CoreArgument extends ExtendedArgument<'guildChannel', VoiceChannel> {
	public constructor(context: PieceContext) {
		super(context, {
			name: 'voiceChannel',
			baseArgument: 'guildChannel'
		});
	}

	public handle(channel: GuildChannel, { argument }: ExtendedArgumentContext): ArgumentResult<VoiceChannel> {
		return channel.type === 'voice'
			? this.ok(channel as VoiceChannel)
			: this.error(argument, 'ArgumentVoiceChannelInvalidChannel', 'The argument did not resolve to a voice channel.');
	}
}
