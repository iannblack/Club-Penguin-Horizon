import GamePlugin from '@plugin/GamePlugin'

import { hasProps, isNumber } from '@utils/validation'


export default class Ignore extends GamePlugin {

    constructor(handler) {
        super(handler)

        this.events = {
            'ignore_add': this.ignoreAdd,
            'ignore_remove': this.ignoreRemove
        }
    }

    async ignoreAdd(args, user) {
        if (!hasProps(args, 'id')) {
            return
        }

        if (!isNumber(args.id)) {
            return
        }

        if (user.id == args.id) {
            return
        }

        if (user.buddies.includes(args.id)) {
            return
        }

        if (user.ignores.includes(args.id)) {
            return
        }

        // In-case either one had sent each-other a friend request
        await this.db.buddyRequests.destroy({
            where: { senderId: args.id, recipientId: user.id }
        })
        await this.db.buddyRequests.destroy({
            where: { senderId: user.id, recipientId: args.id }
        })

        let ignore = this.usersById[args.id]
        let username

        if (ignore) {
            username = ignore.username
            //ignore.clearBuddyRequest(user.id)

        } else {
            username = await this.db.getUsername(args.id)
        }

        if (!username) {
            return
        }

        //user.clearBuddyRequest(args.id)

        user.ignores.add(args.id)

        let isUsernameFiltered = await this.db.isUsernameApproved(username)
        if (isUsernameFiltered == null) { // sender of the friend request is filtered
            username = `P${args.id}`
        }
 
        user.send('ignore_add', { id: args.id, username: username })
    }

    ignoreRemove(args, user) {
        if (!user.ignores.includes(args.id)) {
            return
        }

        user.ignores.remove(args.id)
        user.send('ignore_remove', { id: args.id })
    }

}
