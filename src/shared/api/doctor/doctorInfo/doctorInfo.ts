import { api } from "../../baseApi";
import { IDoctorInfo } from "./types";


export const getDoctorInfo = async (): Promise<IDoctorInfo> => {
  return api.get()
}