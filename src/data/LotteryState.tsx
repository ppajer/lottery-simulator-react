import create from 'zustand';

export const useLotteryState = create<LotteryState>((set => ({
    numbers: {
      pool: [],
      choices: [],
      winning: [],
      ticket: [1,2,3,4,5],
    },
    matches: [0,0,0,0,0],
    dates: {
      start: new Date(),
      current: new Date()
    },
    //setAllMatches: (matches:number[][]) => set((state) => ({matches: {...state.matches, all: matches}})),
    setPoolNumbers: (numbers:number[]) => set((state) => ({numbers: {...state.numbers, pool: numbers}})),
    setTicketNumbers: (numbers:number[]) => set((state) => ({numbers: {...state.numbers, ticket: numbers}})),
    setWinningNumbers: (numbers:number[]) => set((state) => ({numbers: {...state.numbers, winning: numbers}})),
    setNumbers: (numbers:any) => set({numbers: numbers}),
    setMatches: (matches:number[]) => set({matches: matches}),
    setDate: (date:Date) => set((state) => ({dates: {...state.dates, current: date}}))
  })  
))