import { Cluster, clusterApiUrl } from "@solana/web3.js";

export const NEXT_PUBLIC_CLUSTER: Cluster = (process.env.NEXT_PUBLIC_CLUSTER ??
  "devnet") as Cluster;

export const NEXT_PUBLIC_RPC_URL =
  process.env.NEXT_PUBLIC_RPC_URL ?? clusterApiUrl(NEXT_PUBLIC_CLUSTER);
