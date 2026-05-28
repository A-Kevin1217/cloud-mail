import http from '@/axios/index.js';

export function oauthLinuxDoLogin(code) {
    return http.post('/oauth/linuxDo/login',{code})
}

export function oauthBindUser(form) {
    return http.put('/oauth/bindUser', form)
}

export function oauthBindExisting(form) {
    return http.put('/oauth/bindExisting', form)
}
