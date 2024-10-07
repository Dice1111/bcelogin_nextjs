import { AuthControl } from '@/controls/AuthControl'
import { NextResponse } from 'next/server'

export async function POST(req: Request, res: Response) {
  const body = await req.json()
  const authControl = new AuthControl()
  const result = await authControl.authenticateUser(body.email, body.password)

  return NextResponse.json(result)
}
