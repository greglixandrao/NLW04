import { app } from "./app";


app.listen(3333, () => console.log("Server is runing!"));


// app.get("/", (request, response) => {
//     return response.json({ message: "Hello World - NLW04" });
// })


// // 1 parametro - Rota(Recurso API)
// // 2 paramentro - request, response

// app.post("/", (request, response) => {
//     return response.json({ message: "Os dados foram salvos com sucesso" });
// })