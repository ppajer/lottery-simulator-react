export function useLottery() {
  return {
    isInPool,
    comparePool,
    generateRandomUnique
  }
}

function isInPool(pool:number[], value:number): boolean {
  return pool.indexOf(value) !== -1;
}

function comparePool(pool:number[], compared:number[]): number[] {
  return pool.filter(number => isInPool(compared, number));
}

function generateRandom({ min, max }:RandomGeneratorArgs): number {
  return Math.floor(min + Math.random()*(max - min + 1));
}

function generateRandomUnique(options:RandomGeneratorArgs, compare:number[]): number {
  let newNumber: number = generateRandom(options);
  while (compare.indexOf(newNumber) !== -1) {
    newNumber = generateRandom(options);
  }
  return newNumber;
}