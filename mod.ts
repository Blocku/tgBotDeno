import { Bot } from "https://deno.land/x/grammy@v1.30.0/mod.ts";


export const bot = new Bot('7762728645:AAHxsNQDL_8VyN58_vdlCZ3VJOUtwd85INc');

bot.command('start', (ctx) => ctx.reply('Добро пожаловать'))

bot.on("message", (ctx) => ctx.reply("Получил другое сообщение!"));

bot.start()