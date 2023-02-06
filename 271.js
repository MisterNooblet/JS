const isGreater = (num) => {
    return new Promise((resolve, reject) => {
        if (num > 10) {
            resolve()
        } else {
            reject()
        }
    })
}

isGreater(11).then(() => { console.log('Resolved') }).catch(() => { console.log('Rejected') })