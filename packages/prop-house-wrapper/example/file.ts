import { Signer } from "@ethersproject/abstract-signer";
import { HDNode } from "@ethersproject/hdnode";
import { Wallet } from "@ethersproject/wallet";
import { PropHouseWrapper } from "../src";
import { Auction, Direction, Proposal, Vote } from "../src/builders";

const run = async () => {
  const exampleWallet = Wallet.fromMnemonic(
    "test test test test test test test test test test test junk"
  );

  const local = new PropHouseWrapper("http://localhost:3000", exampleWallet);

  const response = await local.postFileFromDisk("./110.png", "110.png")
  console.log(response)
};

run();
