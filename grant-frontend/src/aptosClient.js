import { Aptos } from "@aptos-labs/ts-sdk";

const client = new Aptos({
  network: "testnet", // auto sets RPC + faucet to testnet
});

export default client;
