/*
* INPUT <string> response --- the response to the ClaimTablesGetPokemonClaimLambda
* OUTPUT <string> --- the nickname associated with the pokemon, or error message if there was one
*/

if (response['statusCode'] == 500 ) {
    `Error Getting Data. DM @Kungfu_Kenny98 to see what the error was`
}
if (response['statusCode'] == 404 ) {
    `Invalid Pokemon. Please check your spelling. For some special names, check here: https://www.pokeclaim.com/about#About-details`
}
else if (response['body']['discord-id'] == 'UNDEFINED') {
    `$(1) has not been claimed`;
}
else {
    `$(1) was claimed by ${response['body']['discord-username']}: ${response['body']['nickname']}`
}