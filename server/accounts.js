Accounts.emailTemplates.siteName = "Lancr";
Accounts.emailTemplates.from = FROM_EMAIL;

Accounts.config({
  sendVerificationEmail: true
});

Accounts.onCreateUser(function(options, user) {
  if (options.profile)
    user.profile = options.profile;

  var email = getUserEmail(user);
  if(email){
  	user.emailHash = CryptoJS.MD5(email.trim().toLowerCase()).toString();
  }

  return user;
});
