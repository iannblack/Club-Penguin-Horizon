
const channels = {
    money: '1295518137248387166',
    moneycheat: '1295518195142361170',
    chat: '1295518619840806977',
    logs: '1295518645232865280',
    user: '1295518670004420749',
    mod: '1295518934950346763',
    warn: '1295518957813370890',
    kick: '1295518984275496981',
    mute: '1295519007717326879',
    rank: '1295519072599146548',
    arcticquestions: '1295519099153285192',
    newspaperart: '1295519158988967996',
    report: '1295519221131772004',
    permaban: '1295519241532870789',
    tempban: '1295521138872422423',
    ipban: '1295519377398960163',
    verification: '1295519407325446195',
    communityevents: '1295520389006491688',
    colorvote: '1295520457151221820',
    igloocontest: '1295520495000879267',
    suggestions: '1295520530773839922',
    additem: '1295520574893985872',
    commands: '1295520605235581030',
    donations: '1295520635090374666',
    paintingcontest: '1295520672516145244',
    jokesriddles: '1295520704032407703',
    wallclock: '1295520741181358101',
}

export default class Discord {

    ready = false;
    stagingLog = ''

    constructor(client, config, id) {
        this.client = client;
        this.config = config;
        this.id = id;

        this.client.once('ready', () => {
            this.ready = true
            this.startedAlert()
        });

        this.stagingLog = (this.config.isStaging) ? ' (STAGING)' : ''
    }

    get time() {
        return `<t:${Math.floor(new Date() / 1000)}:f>${this.stagingLog} **${this.id}**`
    }

    errorAlert(error) {
        if(!this.ready) return;

        const channel = this.client.channels.cache.get(channels.logs);
        channel.send(`${this.time} - **ERROR:** ${error.stack}`)
    }

    moneyAlert(user, coins, game, partyCoins = false) {
        if(!this.ready) return;

        const channel = this.client.channels.cache.get(channels.money);
        const channel2 = this.client.channels.cache.get(channels.moneycheat);

        if(game) {
            if (partyCoins && (coins >= 2000 || (coins != 0 && !Number.isInteger(coins)))) {
                channel2.send(`${this.time} - **${user.username}** has won ${coins} **party coins** in ${game}. They joined the game at <t:${user.joinedRoomTimestamp}:T>.`)
            }
            else if (coins > 2999 || (coins != 0 && !Number.isInteger(coins))) {
                if(game != 'rescue') channel2.send(`${this.time} - **${user.username}** has won ${coins} coins in ${game}. They joined the game at <t:${user.joinedRoomTimestamp}:T>.`)
            }
            return channel.send(`${this.time} - **${user.username}** has won ${coins} ${partyCoins ? 'party' : ''} coins in ${game}.`)
        }

        channel.send(`${this.time} - **${user.username}** has added ${coins} ${partyCoins ? 'party' : ''} coins.`)
    }

    chatAlert(user, message, room, isProfane, isMuted = false) {
        if(!this.ready) return;

        const channel = this.client.channels.cache.get(channels.chat);

        return channel.send(`${this.time} - **${user.username}** in **${room.isIgloo ? `${room.username}'s igloo` : room.name}**: ${message} ${isProfane ? "- FLAGGED AS PROFANE " : ""}${isMuted ? "- USER MUTED" : ""}`)
    }

    userLog(message) {
        if(!this.ready) return;

        const channel = this.client.channels.cache.get(channels.user);
        channel.send(`${this.time} - ${message}`)
    }

    addItemLog(message) {
        if(!this.ready) return;

        const channel = this.client.channels.cache.get(channels.additem);
        channel.send(`${this.time} - ${message}`)
    }

    banLog(message, permaBan, ipBan) {
        if (!this.ready) return;

        const channel = this.client.channels.cache.get(permaBan ? channels.permaban : (ipBan ? channels.ipban : channels.tempban))
        channel.send(`${this.time} - ${message}`)
    }

    startedAlert() {
        if(!this.ready) return;

        const channel = this.client.channels.cache.get(channels.logs);
        channel.send(`${this.time} - **CP Server** is ready.`)
    }

    closingAlert() {
        if(!this.ready) return;

        const channel = this.client.channels.cache.get(channels.logs);
        channel.send(`${this.time} - **CP Server** is restarting.`)
    }

    shopAlert(user, item, notyetstarted = false) {
        if(!this.ready) return;

        const channel = this.client.channels.cache.get(channels.moneycheat);
        channel.send(`${this.time} - **${user.username}** tried to buy **${item.name}**, ${notyetstarted ? `but it hasn't yet been activated (<t:${item.start}:f>)` : 'but its inactive.'}`)
    }

    itemFailureAlert(user, item) {
        if(!this.ready) return;

        const channel = this.client.channels.cache.get(channels.moneycheat);
        channel.send(`${this.time} - **${user.username}** WAS SUPPOSED TO GET ${item} BUT DIDNT GET IT BECAUSE OUR SERVER IS BROKEN!!!!!1'}`)
    }

    modLog(message, type = 'mod') {
        if(!this.ready) return;

        const channel = this.client.channels.cache.get(channels[type]);
        channel.send(`${this.time} - ${message}`)
    }

    verifyLog(message){
        if(!this.ready) return;

        const channel = this.client.channels.cache.get(channels.verification);
        channel.send(`${this.time} - ${message}`)
    }

    auntArcticAlert(user, msg, mode) {
        if(!this.ready) return;

        let channel = null
        switch(mode) {
            case 'question':
                channel = this.client.channels.cache.get(channels.arcticquestions)
                break
            case 'joke':
            case 'riddle':
                channel = this.client.channels.cache.get(channels.jokesriddles)
                break
            default: break
        }
        if(!channel) return
        const pattern = /[@.:\/`<>]/g;
        msg = msg.replace(pattern, ' $& ');
        
        channel.send(`${this.time} - **${user.username}** sent a ${mode}:\n${msg}`)
    }

    async artSubmission(user, img, painting) {
        if(!this.ready) return;
        const channel = this.client.channels.cache.get(painting == true? channels.paintingcontest : channels.newspaperart);
        try { 
            channel.send({ content: `${this.time} - **${user.username}** sent artwork:`, files: [{attachment: img, name: 'pog.png'}] });
        } catch(e) {
            console.log(`Error from Discord.js artSubmission: ${e}`)
            this.errorAlert(`Error from Discord.js artSubmission: ${e}`)
        }
        //channel.send({ content: `**${user.username}** sent some art! Copy/paste the contents of the TXT file in a browser to see it.`, files: [{attachment: attach, name: 'pog.txt'}] });
    }

    colorVoteAlert(user, obj) {
        if(!this.ready) return;

        const channel = this.client.channels.cache.get(channels.colorvote);
        let playerVote = ''
        switch(obj.playerVote) {
            case 1: playerVote = 'Glacial'; break
            case 2: playerVote = 'Candyapple'; break
            case 3: playerVote = 'Mocha'; break
            case 4: playerVote = 'Blossom'; break
        }
        const msg = obj.votes
        channel.send(`**${user.username}** voted for **${playerVote}!**\n## Total Votes\n${msg}`)
        console.log(`**${user.username}** voted for **${playerVote}!**\n## Total Votes\n${msg}`)
    }

    report(user, message, category1, category2, reported, room) {
        if(!this.ready) return;

        const channel = this.client.channels.cache.get(channels.report);
        channel.send(`${this.time} - **${reported}** was reported by ${user.username}\n\n**Room**: ${room}\n\n**Category: **${category1}, ${category2}\n\n**Additional Info: **${message}`)
    }

    communityEvent(user, name, description, where, time) {
        if(!this.ready) return;

        const channel = this.client.channels.cache.get(channels.communityevents);
        const pattern = /[@.:\/`<>]/g;

        channel.send(`**${user.username}** submitted an event idea! Details:
        
        - **Name:** ${name.replace(pattern, ' $& ')}
        - **Description:** ${description.replace(pattern, ' $& ')}
        - **Location:** ${where.replace(pattern, ' $& ')}
        - **Time and Date:** <t:${time}:f> (\`${time}\`)`)
    }

    iglooContestAlert(user, msg) {
        if(!this.ready) return;

        const channel = this.client.channels.cache.get(channels.igloocontest);
        
        channel.send(`${this.time} - **${user.username}** submitted their igloo for review. mods pls screenshot when you have time`)
    }

    suggestionBoxAlert(user, msg) {
        if(!this.ready) return;

        const channel = this.client.channels.cache.get(channels.suggestions);
        const pattern = /[@.:\/`<>]/g;
        msg = msg.replace(pattern, ' $& ');
        
        let text = `${this.time} - **${user.username}** sent a suggestion:\n${msg}`
        if(user.username.toLowerCase() == 'insert name') {
            text += '\n\n[tom d detected, laugh at this user](https://www.youtube.com/watch?v=NNv2RHR62Rs)'
        }

        channel.send(text)
    }

    commandAlert(user, message) {
        if(!this.ready) return;

        const channel = this.client.channels.cache.get(channels.commands);
        channel.send(`${this.time} - **${user.username}** ran: \`${message}\``)
    }

    donationAlert(user,coins,category) {
        if(!this.ready) return;

        let cat
        switch(category) {
            case 1: cat = '**Providing Medical Help**'; break
            case 2: cat = '**Protecting The Earth**'; break
            case 3: cat = '**Building Safe Places**'; break
            case 'sockmopper':
                const channel = this.client.channels.cache.get(channels.donations);
                channel.send(`${new Date().toISOString()} ${this.stagingLog}- rockhopper did the funny :DDDDD`)
                return
        }

        const channel = this.client.channels.cache.get(channels.donations);
        channel.send(`${this.time} - **${user.username}** donated ${coins} coins to ${cat}`)
    }

    illegalTrivia(name,item) {
        if(!this.ready) return;

        const channel = this.client.channels.cache.get(channels.moneycheat);
        channel.send(`${this.time} - **${name}** tried to buy **${item}**, but they haven't completeted the needed amount of trivia.`)
    }

    illegalVipAlert(name,item,bg = false) {
        if(!this.ready) return;

        const channel = this.client.channels.cache.get(channels.moneycheat);
        if(!bg) {
            channel.send(`${this.time} - **${name}** tried to buy **${item.name}**, but they haven't obtained the needed background.`)
        } else {
            channel.send(`${this.time} - **${name}** tried to buy **${item.name}**, but the the item's concert is not currently active.`)
        }
    }

    illegalTower(text) {
        if(!this.ready) return;

        const channel = this.client.channels.cache.get(channels.moneycheat);
        channel.send(`${this.time} - ${text}`)
    }

    legalTower(text) {
        if(!this.ready) return;

        const channel = this.client.channels.cache.get(channels.money);
        channel.send(`${this.time} - ${text}`)
    }

    wallClock(text) {
        if(!this.ready) return;

        const channel = this.client.channels.cache.get(channels.wallclock);
        channel.send(`${this.time} - ${text}`)
    }
}
