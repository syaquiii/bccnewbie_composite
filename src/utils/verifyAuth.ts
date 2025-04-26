export function isTokenValid(token: string): boolean {
  try {
    const tokenParts = token.split(".");
    if (tokenParts.length !== 3) return false;

    const payload = JSON.parse(Buffer.from(tokenParts[1], "base64").toString());

    return payload.exp * 1000 > Date.now();
  } catch {
    return false;
  }
}
