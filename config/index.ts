import { Connection } from "@solana/web3.js"
import dotenv from 'dotenv'
dotenv.config()

export const LAMPORTS_PER_ETHER = 1e9
export const mainRPC = process.env.SOLANA_MAIN_RPC || ""
export const devRPC = process.env.SOLANA_DEV_RPC || ""
export const net = process.env.NET
export const botToken = process.env.BOT_TOKEN!
export const channelId = process.env.CHANNEL_ID!
export const laikaTokenAddy = process.env.LAIKA_TOKEN_ADDRESS || ""
export const connection = new Connection(net == 'mainnet' ? mainRPC : devRPC, 'confirmed')