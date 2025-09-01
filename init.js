const mongoose = require('mongoose');
const Chat = require("./models/chat.js")


main().then(() => {
    console.log("connection succesfull");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

let allchats = [
    {
        from : "yash",
        to : "ankit",
        msg : "odisa chale kya",
        created_at : new Date()
    },
    {
        from : "ankit",
        to : "shivam",
        msg : "Divya meri h",
        created_at : new Date()
    },
    {
        from : "yash",
        to : "shivam",
        msg : "didi se dur rho",
        created_at : new Date(),
    },
    {
        from : "shivam",
        to : "yash",
        msg : "maine karvat badal ke bhi dekha h",
        created_at : new Date(),
    }
]
Chat.insertMany(allchats);