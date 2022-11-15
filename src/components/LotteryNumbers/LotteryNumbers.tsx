import { Column, Row } from '../Grid/Grid';
import { LotteryNumber } from '../LotteryNumber/LotteryNumber';

export function LotteryNumbers({ title, numbers }:LotteryNumbersProps): JSX.Element {
  return (
      <Row spacing='mx-1'>
        <Column width={20}>
          <span className="lottery-numbers-label">
            { `${title}:` }
          </span>
        </Column>
        <Column width={80}>
          <Row>
            {
              numbers.map((number, i) => <LotteryNumber value={number} key={i} />)
            }
          </Row>
        </Column>
      </Row>
  );
}