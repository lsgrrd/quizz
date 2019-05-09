<template>
  <div id="firebaseui-auth-container"/>
</template>

<script>
import { auth, authProviders } from '~/plugins/firebase';

export default {
  name: 'Login',
  mounted: function () {
    if (process.browser) {
      let firebaseui = require('firebaseui');
      const ui = firebaseui.auth.AuthUI.getInstance() || new firebaseui.auth.AuthUI(auth);

      const config = {
        signInOptions: [
          authProviders.Google,
          authProviders.Phone,
          authProviders.Email,
          authProviders.Facebook,
        ],
        signInSuccessUrl: '/quizz',
        tosUrl: '/tos',
        privacyPolicyUrl: '/privacy-policy',
        callbacks: '/quizz'
      };

      ui.start('#firebaseui-auth-container', config);
    }
  }
}
</script>
