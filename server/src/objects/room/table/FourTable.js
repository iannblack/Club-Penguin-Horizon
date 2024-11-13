import BaseTable from './BaseTable'

import { isNumber } from '@utils/validation'


export default class FourTable extends BaseTable {

    init() {
        super.init()

        this.map = Array.from({ length: 7 }, () => Array(6).fill(0))
    }

    sendMove(args, user) {
        if (!this.started) {
            return
        }

        if (!this.isValidMove(user, args.column)) {
            return
        }

        let move = this.makeMove(args.column)
        this.send('send_move', { turn: this.currentTurn, x: move[0], y: move[1] })

        let opponent = this.users[(this.currentTurn == 1) ? 1 : 0]

        if (this.isWin(move[0], move[1])) {
            user.updateCoins(10, true, 'four')
            opponent.updateCoins(5, true, 'four')

            this.reset()
            if (this?.room?.handler?.elasticsearch) {
                let timeInGame = (Date.now() - this.startTime) / 1000
                this.room.handler.elasticsearch.logMinigame(user, "four", 10, false, timeInGame)
                this.room.handler.elasticsearch.logMinigame(opponent, "four", 5, false, timeInGame)
            }
            return
        }

        if (this.isFull()) {
            user.updateCoins(5, true, 'four')
            opponent.updateCoins(5, true, 'four')

            this.reset()
            if (this?.room?.handler?.elasticsearch) {
                let timeInGame = (Date.now() - this.startTime) / 1000
                this.room.handler.elasticsearch.logMinigame(user, "four", 5, false, timeInGame)
                this.room.handler.elasticsearch.logMinigame(opponent, "four", 5, false, timeInGame)
            }
            return
        }

        this.currentTurn = (this.currentTurn === 1) ? 2 : 1
    }

    isValidMove(user, col) {
        if (!isNumber(col)) {
            return false
        }

        let turn = this.users.indexOf(user) + 1

        if (turn != this.currentTurn) {
            return false
        }

        if (col < 0 || col > 6 || this.map[col][0] !== 0) {
            return false
        }

        return true
    }

    makeMove(col) {
        let row = this.map[col].lastIndexOf(0)
        this.map[col][row] = this.currentTurn

        return [col, row]
    }

    isWin(col, row) {
        for (let [deltaRow, deltaCol] of [[1, 0], [0, 1], [1, 1], [1, -1]]) {
            let streak = 1

            for (let delta of [1, -1]) {
                deltaRow *= delta
                deltaCol *= delta

                let nextRow = row + deltaRow
                let nextCol = col + deltaCol

                while (nextRow >= 0 && nextRow < 6 && nextCol >= 0 && nextCol < 7) {
                    if (this.map[nextCol][nextRow] === this.currentTurn) {
                        streak++
                    } else {
                        break
                    }

                    if (streak === 4) {
                        return true
                    }

                    nextRow += deltaRow
                    nextCol += deltaCol
                }
            }
        }

        return false
    }

    isFull() {
        for (let col of this.map) {
            if (!col[0]) {
                return false
            }
        }

        return true
    }

}
