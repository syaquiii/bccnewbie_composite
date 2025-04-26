export const checkAuth = () => {
  const token =
    localStorage.getItem("authToken") || sessionStorage.getItem("authToken");

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
