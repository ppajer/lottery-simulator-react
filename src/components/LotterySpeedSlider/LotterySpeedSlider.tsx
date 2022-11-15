import { useAppState } from '../../data/AppState';

export function LotterySpeedSlider({ mainLoopFn }:any): JSX.Element {
  const { speed, setSpeed } = useAppState();

  function handleChange(event:React.ChangeEvent<HTMLInputElement>) {
    setSpeed(event.target.value);
  }

  return (
    <input className='slider' value={speed} type="range" min="100" max="1000" onChange={handleChange} />
  );
}