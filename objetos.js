let friend = {
    name: 'Dark',
    gender: 'M',
    weight: 60.5,
    fatten(p=0) {
        console.log('Engordou')
        this.weight += p
    }
}

/*console.log(typeof friend)
console.log()
console.log(friend)
console.log()*/

console.log(friend.weight)
friend.fatten(5)
console.log(`${friend.name} pesa ${friend.weight} Kg.`)