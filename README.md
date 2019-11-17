# Cheating Hangman API

## Problem Description

You are probably familiar with the game [Hangman](<https://en.wikipedia.org/wiki/Hangman_(game)>), which is a pretty simple two-player game. One player chooses a secret word and writes out blanks for each letter. The other player guesses letters from A-Z one at a time. If the letter guessed is in the word, the first player writes the letter in the appropriate blank (or blanks), but if the letter is _not_ in the word, the second player is charged with a miss. If the second player can guess every letter in the word before reaching a certain number of misses (frequently six or so), they win, but should they run out of chances, they lose and the secret word is revealed.

Hangman can be a fun game to play with a computer and Hangman programs have been developed [many times](https://github.com/weiss/original-bsd/tree/master/games/hangman). Usually the computer takes on the role of the first player, choosing a word, and the user takes the guessing role. Given that most of the first player's role is rote, it's pretty straightforward to write the game.

We'd like you to write your own version of Hangman for us, with the computer always acting as the first player, with one twist to make it a little less straightforward. We'd like your program to cheat. You see, the game relies on the first player thinking of one secret word and honestly filling in the blanks, but what if the first player lies and claims the second player missed? The second player does have some recourse; the secret word must be shown at the end of the game, win or lose. If the secret word is revealed and contains letters which the second player guessed, the first player will be caught. But the first player can think of a new secret word, well, they might get away with it. For example, if `double` is the the secret word, and the second player has reached `DO_BLE`, the second player might guess `U`. A cheating player would likely choose this moment to change the secret word to `doable` and avoid losing!

Classically, the number of misses has been shown by drawing body parts of a hanged man (hence the name of the game), but this isn't necessary for your implementation; a simple command-line interface listing the number of misses and the state of of the word will be sufficient.

We're hoping you won't spend more than three hours on this. It's possible that your program might still get boxed into a corner and lose if the second player is clever; that's OK, but cheat as well as you can.

When you're done, please use [`git bundle`](https://git-scm.com/docs/git-bundle) to send us your code. Please include instructions telling us how to execute the program. We should be able to use it on an average laptop; it's OK if we have to install open-source software like an interpreter for your language, but we don't want to make a purchase order. It's fine to use any word list you come up with, and it's OK to assume we have a word list [`/usr/share/dict/words`](<https://en.wikipedia.org/wiki/Words_(Unix)>) on our systems.

We'll be looking to see if we understand your code, if it shows good development practices, if it shows off your talents, and of course if it is any good at cheating at Hangman. It's fine to leverage resources from web--that's how most developers get help!--but the code you send us should be your own.

## Setup Instructions

1. Ensure that the API has already been started on port 3001 locally
1. Run `npm install`
1. Run `npm start`
1. If the page loads successfully without alerts and the game has a word ready for you, then it is ready to be played

## Notes

- This is not a standalone solution. It is intended to be used by the web application
- The path to my dictionary was `/usr/share/dict/words`, but yours may not be the same and will therefore fail to load at startup. If yours needs to be changed for testing, then modify the file `src/functions/util/defaultDictionaryPath.js` to match it to yours
