interface HasChildren {
  children: React.ReactNode
}

type AppState = {
  started: boolean
  randomize: boolean
  speed: number
  timer: Nullable<NodeJS.Timer>
  error: Nullable<Error>
  setStarted: Function<boolean>
  setSpeed: Function<number>
  setTimer: Function<Nullable<NodeJS.Timer>>
  setRandomize: Function<boolean>
  setError: Function<Nullable<string>>
}

type LotteryState = {
  numbers: {
    choices: number[]
    pool: number[]
    ticket: number[]
    winning: number[] 
  }
  matches: number[]
  dates: {
    start: Date
    current: Date
  },
  //setAllMatches: Function<number[][]>
  setPoolNumbers: Function<number[]>
  setTicketNumbers: Function<number[]>
  setWinningNumbers: Function<number[]>
  setMatches: Function<number[]>
  setDate: Function<Date>
}

type LotteryStatsResult = {
  weeksSpent: number
  yearsSpent: number
  moneySpent: number
}

type LotteryNumberProps = {
  value: number
}

type LotteryNumbersProps = {
  title: string
  numbers: number[]
}

type LotteryControlProps = {
  name: string
  handler: React.EventHandler
  buttonClass: string
}

type LotteryContainerProps = {
  children: React.ReactNode
  title: string
}

type GridRowProps = {
  children: React.ReactNode
  spacing?: string
}

type GridColumnProps = {
  children: React.ReactNode
  width: number
  spacing?: string
}

type NumberInputProps = {
  value: Nullable<number>
  handler: React.EventHandler
  readOnly: boolean
}

type RandomGeneratorArgs = {
  min: number
  max: number
}
