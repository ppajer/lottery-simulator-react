import { useLotteryState } from '../../data/LotteryState';
import { Column, Row } from '../Grid/Grid';

export function LotteryMatches() {

  const { matches } = useLotteryState();
  
  return (
    <section className="matches mx-2">
      <Row>
        <Column width={25}>
          <p className="matches-label">
            2 matches
          </p>
          <p className="matches-value">
            { matches[1] }
          </p>
        </Column>
        <Column width={25}>
          <p className="matches-label">
            3 matches
          </p>
          <p className="matches-value">
            { matches[2] }
          </p>
        </Column>
        <Column width={25}>
          <p className="matches-label">
            4 matches
          </p>
          <p className="matches-value">
            { matches[3] }
          </p>
        </Column>
        <Column width={25}>
          <p className="matches-label">
            5 matches
          </p>
          <p className="matches-value">
            { matches[4] }
          </p>
        </Column>
      </Row>
    </section>
  );
}