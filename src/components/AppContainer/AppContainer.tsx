export function AppContainer({children}:HasChildren): JSX.Element {
  return (
    <div id="app">
      { children }
    </div>
  );
}