import express from "express";
import { Telegraf } from "telegraf";
import * as dotenv from 'dotenv'
dotenv.config();

console.log(process.env["BOT_TOKEN"])


const bot = new Telegraf(process.env.BOT_TOKEN ?? '');
const app = express();

// Set the bot API endpoint
app.use(await bot.createWebhook({ domain: process.env.WEBHOOK_DOMAIN ?? "" }));

bot.on("text", (ctx: any) => ctx.reply("Hello"));

app.listen(process.env.PORT, () =>
  console.log("Listening on port", process.env.PORT)
);
