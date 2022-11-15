import { useAppState } from '../../data/AppState';

export function RandomCheckboxInput(): JSX.Element {
  const { randomize, setRandomize } = useAppState();

  function handleChange(event:React.ChangeEvent<HTMLInputElement>): void {
    setRandomize(event.target.checked);
  }
  
  return (
    <input type="checkbox" 
            name='random'
            className="checkbox-input"
            checked={randomize} 
            onChange={handleChange} />
  )
}