import { ResponseI } from "@/interfaces";

import { IndexClient } from "./page-client";
import { API } from '@/api'

export default async function Index() {
  const response = await API.get('/')
  const data: ResponseI = await response.json()

  return <IndexClient data={data} />
}
