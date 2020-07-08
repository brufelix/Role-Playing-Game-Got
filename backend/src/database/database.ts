import Mongoose from 'mongoose'

Mongoose.Promise = global.Promise

let database: Mongoose.Connection

export const connect = (): void => {
    const uri: string = "mongodb://localhost/got"
    
    Mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true ,useFindAndModify: false })

    if(database){ return }

    database = Mongoose.connection

    database.once("open", async () => { console.log("Connected to database...") })

    database.on("error", () => { console.log("Error connection with database") })
}  

export const disconnect = () => {
    if (!database) { return }

    Mongoose.disconnect()
}

export default connect
