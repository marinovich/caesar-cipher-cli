# caesar-cipher-cli

## Installation
```
npm install
npm link
```

## Usage
```
Usage: caesar-cipher [options]

Options:
  -s, --shift <number>          a shift
  -a, --action <encode|decode>  an action
  -i, --input <file>            an input file
  -o, --output <file>           an output file
  -h, --help                    display help for command
```
```
caesar-cipher -s 1 -a decode
caesar-cipher -s 1 -a decode -i input.txt -o output.txt
```
