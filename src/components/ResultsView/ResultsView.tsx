import { useLotteryState } from '../../data/LotteryState';
import { LotteryContainer } from '../LotteryContainer/LotteryContainer';
import { LotterySpeedSlider } from '../LotterySpeedSlider/LotterySpeedSlider';
import { LotteryMatches } from '../LotteryMatches/LotteryMatches';
import { LotteryNumbers } from '../LotteryNumbers/LotteryNumbers';
import { LotteryStats } from '../LotteryStats/LotteryStats';

export function ResultsView() {
  const { numbers } = useLotteryState();

  return (
    <LotteryContainer title='Results'>
      <LotteryStats />
      <LotteryMatches />
      <LotteryNumbers title='Winning numbers' numbers={numbers.winning} />
      <LotteryNumbers title='Your numbers' numbers={numbers.ticket} />
      <LotterySpeedSlider />
    </LotteryContainer>
  );
}