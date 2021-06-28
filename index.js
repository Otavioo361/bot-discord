const Discord = require('discord.js')
const bot = new Discord.Client();



const token = 'ODQ4MzI0Njc3NDExMDEyNjc4.YLK97A.1h8xrWMrg9MnziSqq_ifx1M1IYg';
bot.login(token)
bot.on('ready', () => {
  console.log('estou pronto ')
})
bot.on('message', msg => {
  if (msg.content === 'oi') {
    msg.reply(' ```eae cuzao baum?```')
  }
})

const { Client, MessageAttachment } = require('discord.js');


const client = new Client();


client.on('ready', () => {
  console.log('ta pronto ');
});

client.on('message', message => {

  if (message.content === '!aoba') {

    const attachment = new MessageAttachment('https://i.imgur.com/w3duR07.png
     aobaa');
    
    message.channel.send(attachment);
  }
});

client.login('');


client.on('ready', () => {
  console.log('bot kick on');
});

client.on('message', message => {

  if (!message.guild) return;


  if (message.content.startsWith('!kick')) {

    const user = message.mentions.users.first();

    if (user) {

      const member = message.guild.member(user);

      if (member) {

        member
          .kick('Optional reason that will display in the audit logs')
          .then(() => {

            message.reply(`O cara foi kikado  ${user.tag}`);
          })
          .catch(err => {

            message.reply('consegui não crai ');

            console.error(err);
          });
      } else {

        message.reply("O cara não ta aqui");
      }

    } else {
      message.reply("ce não marcou ngm ze ruela!");
    }
  }
});


client.login('');





client.on('pronto', () => {
  console.log('O bot do avatar ta pronto');
});


client.on('message', message => {

  if (message.content === 'avatar') {

    message.reply(message.author.displayAvatarURL());
  }
});

client.login('');


const prefix = "!";

client.on("message", function (message) {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  const commandBody = message.content.slice(prefix.length);
  const args = commandBody.split(' ');
  const command = args.shift().toLowerCase();

  if (command === "ping") {
    const timeTaken = Date.now() - message.createdTimestamp;
    message.reply(`seu ping é  ${timeTaken}ms.`);
  }

  else if (command === "soma") {
    const numArgs = args.map(x => parseFloat(x));
    const sum = numArgs.reduce((counter, x) => counter += x);
    message.reply(`A soma das paradas é ${sum}!`);
  }
});

client.on("ready", () => {
  console.log('Olá mundo')
})


client.on('raw', async dados => {

  if (dados.t == 'PRESENCE_UPDATE' && client.guilds.get("558439763879657483").members.get(dados.d.user.id)) {
    let membro = client.guilds.get("558439763879657483").members.get(dados.d.user.id)

    console.log(dados.d.game, dados.d.game.state)

    if (dados.d.game == null) return membro.removeRole("848386677844213781")


    if (dados.d.game.state == undefined) return membro.removeRole("848386677844213781")

    let valor = dados.d.game.state.toLowerCase()
    let n = valor.search(/((?:discord\.gg|discordapp\.com|www\.|http|invite))/g)
    console.log(n)
    if (n >= 0) membro.addRole("848386677844213781")
    if (n < 0 && membro.roles.has("848386677844213781")) membro.removeRole("848386677844213781")

  }
})

client.login('');

client.on("ready", () => {
  console.log('bot reacao')
})

client.on('raw', async dados => {
  if (dados.t !== "MESSAGE_REACTION_ADD" && dados.t !== "MESSAGE_REACTION_REMOVE") return;
  if (message.d.message_id != "848660612385210368") return;

  let servidor = client.guilds.get("558439763879657483")
  let membro = servidor.members.get(message.d.user_id)

  let cargo1 = servidor.roles.get('848373325830553600'),
    cargo2 = servidor.roles.get('848373422626045962'),
    cargo3 = servidor.roles.get('848373478972719104')
  if (message.t === "message_reaction_id") {
    if (dados.d.emoji.name === "👌") {
      if (membro.addRole(cargo1)) {
        membro.addRole(cargo1)
      }
    }
  }
})

/*if(dados.t === "MESSAGE_REACTION_ADD"){
    if(message.content = "cargo 1"){
        if(membro.roles.has(cargo1)) return
        membro.addRole(cargo1)
    }else if(dados.d.emoji.name === "👌"){
        if(membro.roles.has(cargo2)) return
        membro.addRole(cargo2)
    }else if(dados.d.emoji.id === "566966738013388821"){
        if(membro.roles.has(cargo3)) return
        membro.addRole(cargo3)
    }
}
if(dados.t === "MESSAGE_REACTION_REMOVE"){
    if(dados.d.emoji.id === "566966275578789888"){
        if(membro.roles.has(cargo1)) return
        membro.removeRole(cargo1)
    }else if(dados.d.emoji.name === "👌"){
        if(membro.roles.has(cargo2)) return
        membro.removeRole(cargo2)
    }else if(dados.d.emoji.id === "566966738013388821"){
        if(membro.roles.has(cargo3)) return
        membro.removeRole(cargo3)
    }
}
 
})*/

client.login('');

