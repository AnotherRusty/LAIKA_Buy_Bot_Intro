import { PublicKey, TransactionResponse } from "@solana/web3.js"
import { botToken, channelId, connection, laikaTokenAddy, LAMPORTS_PER_ETHER } from "../config"
import axios from "axios"
import FormData from 'form-data';
import fs from 'fs'

export const getNotification = async (addy: string) => {
    /**
     * please contact me when you need my bot services
     * My TG handle is @idioRusty
     */
}

export const calculateSwapEther = (decode: TransactionResponse) => {
    /**
     * please contact me when you need my bot services
     * My TG handle is @idioRusty
     */
}

export const calculateLaikaTradeAmount = (decode: TransactionResponse, buyerWalletAddy: string) => {
    /**
     * please contact me when you need my bot services
     * My TG handle is @idioRusty
     */
}

export const sendMessageToChannel = async (message: string) => {
    try {
        const form = new FormData();
        form.append('animation', fs.createReadStream('./assets/laika.gif'))
        form.append('chat_id', channelId)
        form.append('caption', message)
        form.append('parse_mode', 'Markdown')
        const url = `https://api.telegram.org/bot${botToken}/sendAnimation`;
        const response = await axios.post(url, form, {
            headers: {
                ...form.getHeaders() // Set appropriate headers for form-data
            }
        });

        if (response.data.ok) {
        } else {
            console.error('Failed to send message:', response.data);
        }
    } catch (e) {
        console.error(e)
    }
}


export const calculateLaikaBalance = (decode: TransactionResponse, buyerWalletAddy: string) => {
    /**
     * please contact me when you need my bot services
     * My TG handle is @idioRusty
     */
}

export const decodeTx = async (sig: string): Promise<TransactionResponse | null> => {
    try {
        /**
         * please contact me when you need my bot services
         * My TG handle is @idioRusty
         */
    } catch (error) {
        console.error("Error fetching transaction:", error)
        return null
    }
}

export const getCurrentTokenPriceAndMCap = async (): Promise<{
    priceBase: string;
    priceUsd: string;
    marketCapBase: string;
    marketCapUsd: string;
} | {
    error: string;
}> => {
    /**
     * please contact me when you need my bot services
     * My TG handle is @idioRusty
     */
}