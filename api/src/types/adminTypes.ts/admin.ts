export interface AuthenticatedRequest extends Request {
  admin?: string | object;
}
