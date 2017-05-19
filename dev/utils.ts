class Utils {
    public static checkCollision (instance1, instance2):boolean {
        return (instance1.x < instance2.x + instance2.width &&
        instance1.x + instance1.width > instance2.x &&
        instance1.y < instance2.y + instance2.height &&
        instance1.height + instance1.y > instance2.y)
    }
}