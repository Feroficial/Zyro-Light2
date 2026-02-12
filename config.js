import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'

// ---------------- OWNERS ----------------
global.owner = ['180650938249287', '+573112852172']  // Agregado el nuevo owner

// ---------------- PERMISOS ----------------
global.mods = []
global.prems = []

// ---------------- BOT INFO ----------------
global.emoji = '🍫'
global.emoji2 = '🍫'
global.namebot = 'Zyro Light'
global.redes = 'https://chat.whatsapp.com/KDI7NNovzdwJayx1gI1cue?mode=ems_copy_t'
global.botname = 'Zyro Light'
global.banner = 'https://raw.githubusercontent.com/SoySapo6/tmp/refs/heads/main/Permanentes/images%20(8).jpeg'
global.packname = 'Zyro Light'
global.author = 'Fer y felipe'
global.moneda = 'ZyroCoins'
global.libreria = 'Baileys'
global.baileys = 'V 6.7.16'
global.vs = '2.2.0'
global.usedPrefix = '#'
global.user2 = '18'
global.sessions = 'MayBot'
global.jadi = 'MayBots'
global.yukiJadibts = true

// ---------------- CANAL ----------------
global.namecanal = 'Soy Fer xd • Actualizaciones'
global.idcanal = '120363424241780448@newsletter'
global.idcanal2 = '120363424241780448@newsletter'
global.canal = 'https://whatsapp.com/channel/0029VbBIgz1HrDZg92ISUl2M'
global.canalreg = '120363424241780448@newsletter'

global.ch = {
  ch1: '120363424241780448@newsletter'
}

// ---------------- OTROS ----------------
global.multiplier = 69
global.maxwarn = 2

// ---------------- WATCH CONFIG ----------------
let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Se actualizó el 'config.js'"))
  import(`file://${file}?update=${Date.now()}`)
})