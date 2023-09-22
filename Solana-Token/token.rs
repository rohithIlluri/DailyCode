//This code will create a new Solana token with a total supply of 1 billion tokens. The tokens will be minted to your wallet address. 
//You can then add the token to your Solana wallet and transfer it to other Solana wallets or list it on a DEX.

//Install the Solana CLI and the SPL token CLI
solana install
solana program install spl-token

//Create a new Solana wallet and fund it with some SOL
solana-keygen new --outfile wallet.json
solana airdrop 1000000 lamports wallet.json

//Create a new Mint account for your token
solana create-token --mint-authority wallet.json

//Initialize the Mint account with the total supply of your token
solana init-token --mint-authority wallet.json --decimals 9 --total-supply 1000000000

//Mint your tokens to your wallet address
solana mint 1000000000 wallet.json

//Burn tokens in your wallet address
solana burn 500000000 wallet.json

// Add your token to your Solana wallet
solana add-token --token-account wallet.json

//Transfer tokens to another Solana wallet:
solana transfer <amount> <recipient_wallet_address>

//List tokens on a DEX:
solana create-order --market <market_address> --side sell --price <price> --quantity <quantity>

//Stake tokens
solana stake <stake_amount> <validator_address>

//Disable the mint authority of the specified wallet 
solana init-token --mint-authority none wallet.json

