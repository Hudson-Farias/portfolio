
class ApiClient {
  private baseURL: string | undefined

  constructor() {
    this.baseURL = `${process.env.NEXT_PUBLIC_API_URL}`
  }

  private async request(method: string, endpoint: string, body?: any): Promise<any> {
    const headers: { [key: string]: string } = { 'Content-Type': 'application/json' }

    const response = await fetch(`${this.baseURL}${endpoint}`, {
      // next: { revalidate: revalidate },
      method, headers, body: body ? JSON.stringify(body) : undefined
    })

    return response
  }


  public get(endpoint: string): Promise<Response> {
    return this.request('GET', endpoint)
  }


  public post(endpoint: string, body: any): Promise<Response> {
    return this.request('POST', endpoint, body)
  }


  public put(endpoint: string, body: any): Promise<Response> {
    return this.request('PUT', endpoint, body)
  }


  public delete(endpoint: string): Promise<Response> {
    return this.request('DELETE', endpoint)
  }
}

export const API = new ApiClient()
