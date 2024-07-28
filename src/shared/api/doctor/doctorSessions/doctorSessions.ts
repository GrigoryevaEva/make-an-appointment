import { api } from "../../baseApi";
import { IDoctorSessions } from "./types";


export const getDoctorSessions = (): Promise<IDoctorSessions> => {
  return api.get()
}