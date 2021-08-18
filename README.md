# gas-notifier

Small repo used to send a desktop notification for a variety of tasks.

Currently implemented for:
* low gas - when ETH gas is below a certain `threshold`
* mirror prices - displaying prices for assets listed on [Mirror](https://terra.mirror.finance)

Roadmap:
1. Add other asset prices
2. Allow for other types of notifications
    * text
    * email
    * telegram
3. Put behind a server
4. Allow action to be taken

## Usage

```sh
# Clone repo
git clone git@github.com:adamjsawicki/gas-notifier.git

# Go into repo
cd gas-notifier

# Install deps
yarn install

# Start the notifier, passing in one of the acceptable CLI args (see below)
yarn start mirror gas
```

### CLI Args
Current implementation takes CLI args to determine which notifiers to run.

#### Options
* `gas`
* `mirror`


## Configuration

### Low Gas
* `threshold: number` - which indicates under which value to send a notification (denominated in gwei)

### Mirror Prices
* `symbols: string[]` - indicates which symbols to search for in the mirror protocol