# Visitor-Questionnaire-Confetti
The most light confetti JavaScript library with strong type definitions born from the most famous phishing site, "visitor questionnaire".  
[Example page](https://mtripg6666tdr.github.io/visitor-questionnaire-confetti/sample.html)

## What is this?
When we net-surf, we can sometimes see the phishing page named: visitor questionnaire.  
One day it said that the visitor can obtain a iPhone 12 by paying a small amount of money.  
Don't worry, this project is not illegal or suspicious one.
We noticed that the phishing site has a beautiful confetti effect, and we learned how to show such a beautiful confetti.  
This project resulted from the study of the confetti effect of the phishing site.

## How to use
You can use this repository via npm or manually.
### Via NPM
1. Install
```bash
npm i mtripg6666tdr/visitor-questionnaire-confetti
```
2. Use
```typescript
import { Confetti } from "visitor-questionnaire-confetti";
const cf = new Confetti(canvas);
cf.InitializeConfetti();
```
```javascript
const Confetti = require("visitor-questionnaire-confetti");
const cf = new Confetti.Confetti(canvas);
cf.InitializeConfetti()
```
### Manually
You can download [a pre-transpiled JavaScript file](lib/visitor-questionnaire-confetti.js).
```javascript
const cf = new Confetti(canvas);
cf.InitializeConfetti();
```
You can check a detailed example [here](lib/sample.html).
Type definition files are placed in `typings` directory.

### License
[MIT License](LICENSE)
