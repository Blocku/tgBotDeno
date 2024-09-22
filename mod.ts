import { Bot } from "grammy";



export const bot = new Bot(Deno.env.get("BOT_TOKEN") || "");