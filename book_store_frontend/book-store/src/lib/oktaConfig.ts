export const oktaConfig = {
    clientId: '0oajo52ngnluiUeIC5d7',
    issuer: 'https://dev-85120845.okta.com/oauth2/default',
    redirectUri: 'http://localhost:3000/login/callback',
    scopes: ['openid', 'profile', 'email'],
    pkce: true,
    disableHttpsCheck: true,
}