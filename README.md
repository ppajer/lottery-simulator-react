# lottery-simulator-react

Live demo available [here](https://lottery-simulator-react-srmmya3tvq-wn.a.run.app/).

### Features & progress
- [x] Can pull 5 random numbers between 1-90
- [x] Variable speed between 100ms-1s via settings slider
- [x] Tracks number of tickets bought & amount spent
- [x] Tracks number of times the user had 2,3,4 or 5 matches
- [x] Highlight individual matches
- [ ] Celebration at 5 matches
- [x] Responsive
- [x] *Works as Docker container*
- [x] *Hosted on GCP Run*
- [x] *Continuous deployment via GCP Build*

#### TODO / Would Improve
- [ ] Add tests
- [ ] Add better error handling instead of `alert()`
- [ ] Finish styling slider
- [ ] Refactor code structure & style if required by standard

### Installation

```
git clone https://github.com/ppajer/lottery-simulator-react.git
cd lottery-simulator-react
npm install
npm run dev
```