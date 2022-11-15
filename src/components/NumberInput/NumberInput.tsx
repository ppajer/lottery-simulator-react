import { CONFIG } from '../../config/Lottery';

export function NumberInput({ value, handler, readOnly }:NumberInputProps): JSX.Element {
  return (
    <div className="col col-20">
      <input  value={value}
              min={CONFIG.NUMBER_MIN}
              max={CONFIG.NUMBER_MAX}
              step={1}
              className="number-input lottery-number" 
              onChange={handler}
              readOnly={readOnly} />
    </div>
  );
}