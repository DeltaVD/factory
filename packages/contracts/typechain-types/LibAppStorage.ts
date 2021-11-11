/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  CallOverrides,
} from 'ethers'
import { BytesLike } from '@ethersproject/bytes'
import { Listener, Provider } from '@ethersproject/providers'
import { FunctionFragment, EventFragment, Result } from '@ethersproject/abi'
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from './common'

export interface LibAppStorageInterface extends ethers.utils.Interface {
  functions: {
    'STORAGE_SLOT()': FunctionFragment
  }

  encodeFunctionData(
    functionFragment: 'STORAGE_SLOT',
    values?: undefined
  ): string

  decodeFunctionResult(
    functionFragment: 'STORAGE_SLOT',
    data: BytesLike
  ): Result

  events: {}
}

export interface LibAppStorage extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this
  attach(addressOrName: string): this
  deployed(): Promise<this>

  interface: LibAppStorageInterface

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>
  listeners(eventName?: string): Array<Listener>
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this
  removeAllListeners(eventName?: string): this
  off: OnEvent<this>
  on: OnEvent<this>
  once: OnEvent<this>
  removeListener: OnEvent<this>

  functions: {
    STORAGE_SLOT(overrides?: CallOverrides): Promise<[string]>
  }

  STORAGE_SLOT(overrides?: CallOverrides): Promise<string>

  callStatic: {
    STORAGE_SLOT(overrides?: CallOverrides): Promise<string>
  }

  filters: {}

  estimateGas: {
    STORAGE_SLOT(overrides?: CallOverrides): Promise<BigNumber>
  }

  populateTransaction: {
    STORAGE_SLOT(overrides?: CallOverrides): Promise<PopulatedTransaction>
  }
}
