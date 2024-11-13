import GamePlugin from '@plugin/GamePlugin'


export default class Sensei extends GamePlugin {

    constructor(handler) {
        super(handler)

        this.events = {
            // 'get_ninja': this.getNinja
        }
    }

    getNinja(args, user) {
        user.send('get_ninja', { rank: user.ninjaRank, progress: user.ninjaProgress, cards: user.cards })
    }

}
