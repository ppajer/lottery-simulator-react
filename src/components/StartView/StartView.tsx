import { useAppState } from '../../data/AppState';
import { useLotteryState } from '../../data/LotteryState';
import { Column, Row } from '../Grid/Grid';
import { NumberInput } from '../NumberInput/NumberInput';
import { RandomCheckboxInput } from '../RandomCheckboxInput/RandomCheckboxInput';
import { LotteryContainer } from '../LotteryContainer/LotteryContainer';
import { LotteryControl } from '../LotteryControl/LotteryControl';
import { CONFIG } from '../../config/Lottery';
import { useLottery } from '../../hooks/useLottery';

export function StartView(): JSX.Element {
  const { numbers, setTicketNumbers } = useLotteryState();
  const { started, setStarted, randomize } = useAppState();
  const { isInPool } = useLottery();

  function handleStart(event:React.MouseEvent<HTMLButtonElement>): void {
    if ((numbers.ticket.length < CONFIG.NUMBERS_TO_DRAW)) {
      alert('Enter all your numbers, or play with random numbers.');
      return;
    }
    if (started) {
      alert('Lottery already started.');
      return;
    }
    setStarted(true);
  }

  function handleNumber(event:React.ChangeEvent<HTMLInputElement>, slot:number): void {
    // Reject empty
    if (event.target.value === '') {
      alert('Number cannot be empty.');
      return;
    }

    let number = parseInt(event.target.value);
    
    // Reject if already added
    if (isInPool(numbers.ticket, number)) {
      alert('You can only play a number once.');
      return;
    }
    // Reject if out of bounds
    if (number < CONFIG.NUMBER_MIN || number > CONFIG.NUMBER_MAX) {
      alert(`Numbers must be between ${CONFIG.NUMBER_MIN} and ${CONFIG.NUMBER_MAX}.`);
      return;
    }
    numbers.ticket[slot] = number;
    setTicketNumbers(numbers.ticket);
  }

  return (
    <LotteryContainer title='Begin'>
      <Row spacing='mx-1'>
        <Column width={25}>
          <span className="lottery-numbers-label">
            Enter numbers:
          </span>
        </Column>
        <Column width={75}>
          <Row>
            <NumberInput value={numbers.ticket[0]} key={0} readOnly={randomize} handler={(event:React.ChangeEvent<HTMLInputElement>) => handleNumber(event, 0)} />
            <NumberInput value={numbers.ticket[1]} key={1} readOnly={randomize} handler={(event:React.ChangeEvent<HTMLInputElement>) => handleNumber(event, 1)}/>
            <NumberInput value={numbers.ticket[2]} key={2} readOnly={randomize} handler={(event:React.ChangeEvent<HTMLInputElement>) => handleNumber(event, 2)} />
            <NumberInput value={numbers.ticket[3]} key={3} readOnly={randomize} handler={(event:React.ChangeEvent<HTMLInputElement>) => handleNumber(event, 3)} />
            <NumberInput value={numbers.ticket[4]} key={4} readOnly={randomize} handler={(event:React.ChangeEvent<HTMLInputElement>) => handleNumber(event, 4)} />
          </Row>
        </Column>
      </Row>
      <Row spacing='mx-1'>
        <Column width={25}>
          <span className="lottery-numbers-label">
            Play random numbers:
          </span>
        </Column>
        <Column width={75}>
          <RandomCheckboxInput />
        </Column>
      </Row>
      <Row>
        <Column width={100}>
          <LotteryControl name='Start' handler={handleStart} buttonClass='start' />
        </Column>
      </Row>
    </LotteryContainer>
  );
}