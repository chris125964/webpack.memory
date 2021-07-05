import { MemoryState } from '../../enums/MemoryState';

interface IMem {
  index: number;
  nr: number;
  status: MemoryState;
  nrTiles: number;
}
type MemoryAction = {
  type: string;
  mem: IMem;
};
