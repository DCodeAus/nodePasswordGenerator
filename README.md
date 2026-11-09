# Node Password Generator

A tiny command-line program that makes a random password of whatever length you ask for. It's a learning project, written to practise reading input in Node.js.

> **Don't use it for real passwords.** It picks characters with `Math.random()`, which is fine for games but predictable enough that it isn't safe for security. For real passwords, use a password manager (1Password, Bitwarden, Apple Passwords and so on).

## What you need

- [Node.js](https://nodejs.org) (any recent version). Check it's installed by running `node --version` in Terminal.

## How to run it

1. Download this repository: click the green **Code** button on GitHub › **Download ZIP**, then unzip it. Or, if you use git:
   ```bash
   git clone https://github.com/DCodeAus/nodePasswordGenerator.git
   ```
2. Open Terminal in that folder:
   ```bash
   cd nodePasswordGenerator
   ```
3. Run it:
   ```bash
   node pass.js
   ```
4. When it asks `PASSWORD STRENGTH:`, type how many characters you want (for example `16`) and press Enter.

## What you'll see

```
PASSWORD STRENGTH: 16

_______________________________

Password: v!8IbhpE8lSiej6m
_______________________________
```

You get a different password every time. There's nothing to install: it only uses what comes with Node.

## How it works

`pass.js` asks for a number, then picks that many characters at random from a list of letters, digits and a few symbols (`!@#$^.`), and prints the result. Despite the prompt's wording, "strength" here simply means length.
