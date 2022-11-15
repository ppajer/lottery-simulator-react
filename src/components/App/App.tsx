import { useEffect } from 'react';
import { CONFIG } from '../../config/Lottery';
import { useAppState } from '../../data/AppState';
import { useLotteryState } from '../../data/LotteryState';
import { useLottery } from '../../hooks/useLottery';
import { AppContainer } from '../AppContainer/AppContainer';
import { AppHeader } from '../AppHeader/AppHeader';
import { ResultsView } from '../ResultsView/ResultsView';
import { StartView } from '../StartView/StartView';

function App(): JSX.Element {
  let { timer, started, speed, randomize, setTimer } = useAppState();
  let { dates, matches, numbers, setWinningNumbers, setTicketNumbers, setDate } = useLotteryState();
  const { comparePool, generateRandomUnique } = useLottery();

  useEffect(() => {
    if (timer) clearInterval(timer);
    setTimer(setInterval(loop, speed));
    return () => {
      clearInterval(timer)
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [started, speed]);

  function loop(): void {

    // Do nothing until lottery is started
    if (!started) return;
    
    if (numbers.winning.length === CONFIG.NUMBERS_TO_DRAW) {
      updateStats();
      setupNext();
    }

    let newNumber = generateRandomUnique({min: CONFIG.NUMBER_MIN, max: CONFIG.NUMBER_MAX}, numbers.winning);
    numbers.winning.push(newNumber);
    setWinningNumbers(numbers.winning);

  }

  function updateStats() {
    console.log(numbers.ticket, numbers.winning)
    let currentMatches = comparePool(numbers.ticket, numbers.winning);
    let length = currentMatches.length;
    console.log(length)

    // Log matches
    if (length >= 1) {
      matches[length-1]++;
      
      // Win
      if (length === CONFIG.NUMBERS_TO_DRAW) {
        
      }
    }
  }

  function setupNext() {
    numbers.winning = [];
    setWinningNumbers(numbers.winning);
    dates.current.setDate(dates.current.getDate() + 7);
    setDate(dates.current);
    if (randomize) {
      let randomArgs = {min: CONFIG.NUMBER_MIN, max: CONFIG.NUMBER_MAX};
      let nextTicket = numbers.ticket.reduce((results:number[], current:number) => {
        results.push(generateRandomUnique(randomArgs, results));
        return results;
      }, []);
      numbers.ticket = nextTicket;
      setTicketNumbers(nextTicket);
    }
  }

  return (
    <AppContainer>
      <AppHeader />
      {
        !started ? 
        <StartView /> :
        <ResultsView />
      }
    </AppContainer>
  );
}

export default App;