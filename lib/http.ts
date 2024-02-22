import Axios from "axios"

export const http = Axios.create({
  baseURL: "https://api.sofascore.com/api/v1/sport/football",
  headers : {
    "Content-Type" : "application/json",
    "Accept" : "accplication/json"
  }
})

// https://api.sofascore.app/api/v1/team/:id/image