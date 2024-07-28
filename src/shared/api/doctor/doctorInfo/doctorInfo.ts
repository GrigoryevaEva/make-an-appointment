import { api } from "../../baseApi";
import { IDoctorInfo } from "./types";


export const getDoctorInfo = (): Promise<IDoctorInfo> => {
  return api.get()
}