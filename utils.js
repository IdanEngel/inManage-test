class Utils {
    static getRandomColor() {
        const colors = ['blue', 'red', 'green', 'pink', 'yellow']
        return colors[Math.floor(Math.random()*colors.length)]
    }
}