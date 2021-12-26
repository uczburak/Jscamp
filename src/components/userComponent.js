import { BaseLogger, ElasticLogger, MongoLogger } from "../crossCuttingConcerns/logging/logger.js"
import User from "../models/user.js"
import UserService from "../services/userService.js"

console.log("User Component Loaded")

let logger1 = new MongoLogger()
let userService = new UserService(logger1)

let user1 = new User(1, "Burak", "Ucz", "Mardin")
let user2 = new User(2, "Engin", "Demiroğ", "Ankara")
let user3 = new User(3, "Baran", "Gökçekli", "Muğla")


userService.add(user1)
userService.add(user2)
userService.add(user3)

console.log(userService.list())
console.log(userService.getById(2))


userService.getById(1)
userService.list()


let customer = {id:1, firstName:"engin"}

//prototyping
customer.lastName = "Demiroğ"

console.log(customer.lastName)