import { Contract, Address } from '@ton/core';

export interface ExtendedContract {
  fromInit(): Promise<Contract>;
  fromAddress(address: Address): Contract;
}

export type Hex = `0x${string}`;