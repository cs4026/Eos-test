Eos = require('eosjs');

let eos = Eos.Localnet();

/**
//grabs first block-FAILS
eos.getBlock().then(block => {
	console.log('Grabbing block with no parameters',block);
});
**/

eos.getBlock(1).then(block=> {
console.log('getBlock(1)',block);
});
/**

// Parameters can be sequential or an object
eos.getBlock({block_num_or_id: 1}).then(result => console.log(result))

// Callbacks are similar
callback = (err, res) => {err ? console.error(err) : console.log(res)}
eos.getBlock(1, callback)
eos.getBlock({block_num_or_id: 1}, callback)

// Provide an empty object or a callback if an API call has no arguments
eos.getInfo({}).then(result => {console.log(result)})
**/
