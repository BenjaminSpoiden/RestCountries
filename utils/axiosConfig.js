import axios from "axios"
import { BASE_URL } from "./constant"

export const countryAxios = axios.create({
    baseURL: BASE_URL
})