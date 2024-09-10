module.exports = (robot) =>
{
    const prefix = robot.config.prefix;

	let guideTopic = `__Mechanic Manual__
Function: gives helpful information about various L5R Mechanics.
Form: \`${prefix}guide\` or \`${prefix}guide {query}\`
	\`{query}\` *optional* the name of a mechanic you are having touble remembering
Notes: will display a list of available queries if none is specified.`;

let schoolTopic = `__Mechanic Manual__
Function: gives helpful information about various L5R Mechanics.
Form: \`${prefix}school\` or \`${prefix}school {query}\`
	\`{query}\` *optional* the name of a mechanic you are having touble remembering
Notes: will display a list of available queries if none is specified.`;

let battleTopic = `__Mechanic Manual__
Function: gives helpful information about various L5R Mechanics.
Form: \`${prefix}battle\` or \`${prefix}battle {query}\`
	\`{query}\` *optional* the name of a mechanic you are having touble remembering
Notes: will display a list of available queries if none is specified.`;


	robot.registerHelpTopic( /g(?:uide)?/i, guideTopic );
	robot.registerCommand( /g(?:uide)?\s(.*)?/i, `\`${prefix}guide {query}\`: __Mechanics Manual__ a helpful guide to various L5R Mechanics.`, ( message, test ) =>
	{
		let query = test[1];
		query.toLowerCase();
		let found = robot.guideMap.has( query );

		if ( found )
		{
			message.channel.send( `**${query}**\n${robot.guideMap.get( query )}` );
		}
		else
		{
			message.author.send(`**__List of available guides__**\n${ Array.from( robot.guideMap.keys() ).sort().join(', ') }`);
		}
	});



	robot.registerHelpTopic( /s(?:chool)?/i, schoolTopic );
	robot.registerCommand( /s(?:chool)?\s*(\D*?)\s*(\d)?$/i, `\`${prefix}school {query}\`: __Mechanics Manual__ a helpful guide to various L5R Schools.`, ( message, test ) =>
	{
		let query = test[1];
		
		if ( query && robot.schoolMap.has( query.toLowerCase() ) )
		{
			//let schoolPattern = /(\D)/i;
			let rank = test[2] ? test[2] : 0;
			message.channel.send( `**${query}**\n${robot.schoolMap.get( query )[rank]}` );
		}
		else
		{	
			message.author.send(`**__List of available schools__**\n\t${ Array.from( robot.schoolMap.keys() ).sort().join('\n\t') }`);
		}
	});


	robot.registerHelpTopic( /b(?:attle)?/i, battleTopic );
	robot.registerCommand( /b(?:attle)?\s(.*)?/i, `\`${prefix}battle {query}\`: __Mechanics Manual__ a helpful guide to various L5R battles.`, ( message, test ) =>
	{
		let query = test[1];
		query.toLowerCase();
		let found = robot.battleMap.has( query );

		if ( found )
		{
			message.channel.send( `**${query}**\n${robot.battleMap.get( query )}` );
		}
		else
		{
			message.author.send(`**__List of available battles__**\n\t${ Array.from( robot.battleMap.keys() ).sort().join('\n\t') }`);
		}
	});




}