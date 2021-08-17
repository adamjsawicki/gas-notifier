# gas-notifier

Small repo used to send a desktop notification when gas is low.

Currently implemented for:
* ETH


Future development:
* Allow for other types of notifications
    * text
    * email
    * slack
    * telegram
* Add other chains
* More configuration
    * cronTime
    * Which gasValue to use for the notification
        * average, slow, etc
* Turn into server

## Usage

```sh
# Clone repo
git clone git@github.com:adamjsawicki/gas-notifier.git

# Go into repo
cd gas-notifier

# Install deps
yarn install

# Start the notifier
yarn start
```

## Configuration
Currently, the only configuration variable available is `threshold`, which indicates under which value to send a notification (denominated in gwei).
