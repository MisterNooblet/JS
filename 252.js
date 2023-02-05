let object = {
    name: 'Uvuvwevwevwe Onyetenyevwe Ugwemuhwem Osas',
    printName() {
        console.log(this.name);
    },
    delayedPrint() {
        setTimeout(function () {
            this.printName()
        }.bind(this), 1000)
    }
}

object.printName()
object.delayedPrint()