import create from 'zustand';

export const useAppState = create<AppState>((set => ({
    started: false,
    timer: 0,
    randomize: false,
    speed: 1000,
    error: null,
    setStarted: (started: boolean) => set({started:started}),
    setTimer: (timer: null | NodeJS.Timer) => set({timer: timer}),
    setRandomize: (randomize: boolean) => set({randomize: randomize}),
    setSpeed: (speed: number) => set({speed: speed}),
    setError: (error: null | string) => set({error: error})
  })
));