import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'

const app = express()

//app.use sare k sare middleare of configuration k kam ata hai 

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

//express ki configuration 
//jab body se data aye 
app.use(express.json({limit: '16kb'}));
//url k liye 
//extended ka matlb url k andr bhi url de skte hai hm 
app.use(express.urlencoded({extended: true , limit: "16kb"}));
//agar tm kuch server pe store karna chahte ho toh express me static me store kar lenege 
app.use(express.static('public'));

//cookie parser ka kam hai server se user k browser pe cookie set or get kar pau 
//kabhi kabhi secure cookie ka acces mil jata hai 
app.use(cookieParser());



export { app }