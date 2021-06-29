# Visitor-Survey-Confetti
The most light confetti JavaScript library with strong type definitions born from the most famous phishing site, "visitor survey".  
[Example page](https://mtripg6666tdr.github.io/visitor-survey-confetti/sample.html)

## What is this?
When we net-surf, we can sometimes see the phishing page named: visitor survey.  
One day it said that the visitor can obtain a iPhone 12 by paying a small amount of money.  
Don't worry, this project is not illegal or suspicious one.
We noticed that the phishing site has a beautiful confetti effect, and we learned how to show such a beautiful confetti.  
This project resulted from the study of the confetti effect of the phishing site.

## How to use
You can use this repository via npm or manually.
### Via NPM
1. Install
```bash
npm i mtripg6666tdr/visitor-survey-confetti
```
2. Use
```typescript
import { Confetti } from "visitor-survey-confetti";
const cf = new Confetti(canvas);
cf.InitializeConfetti();
```
```javascript
const Confetti = require("visitor-survey-confetti");
const cf = new Confetti.Confetti(canvas);
cf.InitializeConfetti()
```
### Manually
You can download [a pre-transpiled JavaScript file](lib/visitor-survey-confetti.js).
```javascript
const cf = new Confetti(canvas);
cf.InitializeConfetti();
```
You can check a detailed example [here](lib/sample.html).
Type definition files are placed in `typings` directory.

### License
[MIT License](LICENSE)
