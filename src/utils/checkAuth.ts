export const checkAuth = () => {
  if (typeof window === "undefined") {
    return { isAuthenticated: false, token: null };
  }

  const cookies = document.cookie.split("; ");
  const tokenCookie = cookies.find((c) => c.startsWith("authToken="));
  const token = tokenCookie?.split("=")[1];

  if (!token) {
    return { isAuthenticated: false, token: null };
  }

  const tokenParts = token.split(".");
  if (tokenParts.length !== 3) {
    return { isAuthenticated: false, token: null };
  }

  try {
    const payload = JSON.parse(atob(tokenParts[1]));
    const isExpired = payload.exp * 1000 < Date.now();

    return {
      isAuthenticated: !isExpired,
      token: !isExpired ? token : null,
      payload,
    };
  } catch {
    return { isAuthenticated: false, token: null };
  }
};
