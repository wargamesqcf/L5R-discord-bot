module.exports = (robot) =>
{
    const prefix = robot.config.prefix;

	let oppTopic = `__Heroic Opportunities__
Function: Generates a random Heroic Opportunity for use in Mass Battle
Form`;

	let heroicOpportunities = ["**A Clear Shot**\nThe front lines break, and you have a clear shot at the leader of the opposing army with a ranged attack! The TN of the shot depends upon the commander and his Armor TN, although given the chaotic nature of the conflict it should not be less than 30. A successful hit is worth 4 Glory, even though a killing shot is highly unlikely. If the shot is successful, the enemy general suffers a penalty of -5 to his next Battle Roll.", 
	"**Attack the Archers**\nSuddenly, your character sees a path that leads directly to the reserves of the opposing army. You have an opportunity to attack their archers, thus making an opportunity for the reinforcements to charge.If the attack against the archers (which is a skirmish) is successful, the opposing general has a penalty of -5 to his next Battle Turn, and the character conducting the attack gains 2 Glory.",  
	"**Attack the Shugenja**\n\nA break opens in the battle and you have the opportunity to attack the reserves. The enemy shugenja suddenly stop their battle rituals as you charge into their ranks! \nA successful attack on an opposing shugenja, while exceedingly dangerous, can be the key to victory. The loss of such a vital resource results in the opposing general suffering a penalty of -5 to his next Battle Roll. The attacking character gains 3 Glory. Because of the relative scarcity of shugenja, it is considered honorable to offer them a chance to surrender. Doing so gains you 2 Honor, whether they choose to accept your offer or not.",
	"**Be Prepared to Dig Two Graves**\n\nYou see a samurai from the enemys army cut down one of your kinsmen. You may spend the rest of this battle seeking that samurai.\nIf the character chooses to pursue his enemy, he must enter the enemy�s level of engagement and succeed at a Contested Battle/Perception Roll to locate him. If the character fails, his enemy eludes him. If he succeeds, he may immediately initiate the Show Me Your Stance opportunity. If the opponent wishes to confront the character, the GM may choose to ignore the Contested Roll.",
	"**Break the Line**\n\nYou receive the command to charge the enemys front line!\nThe character must face 2 to 4 Rank 2 samurai to successfully attack the front line. The character is immediately moved to the Heavily Engaged level. During the next Battle Turn reduce the characters roll by 2, but add 3 to his general�s Battle Roll. The character gains 3 Glory.",
	"**Few against Many**\n\nYou watch as an ally charges into the midst of battle. His fate is sealed as enemies surround him, unless someone comes to his aid.\nTreat this opportunity as a skirmish against 3-6 samurai of one rank lower than the character (to a minimum of Rank 1). If the character�s ally survives, the character gains 3 Glory and may be awarded the Allies Advantage at the GM�s discretion."];

	robot.registerHelpTopic( /Opportunity/i, oppTopic );
	robot.registerCommand( /Opportunity/i, `\`${prefix}Opportunity\`: __Heroic Opportunity__ Select a random Heroic Opportunity in Mass Battle.`, ( message, test ) =>
	{
		message.channel.send( heroicOpportunities[Math.floor(Math.random() * heroicOpportunities.length)])
	});
}


/*var rdm = messages[Math.floor(Math.random() * messages.length)];



return rdm;*/