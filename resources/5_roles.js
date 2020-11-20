
function (user, context, callback) {
    const NAMESPACE = 'https://portfolio-arhan.com';
    user.app_metadata = user.app_metadata || {};
    // You can add a Role based on what you want
    // In this case I check domain
    var addRolesToUser = function(user, cb) {
      if (user.email === 'arhanchoudhury@gmail.com') {
        cb(null, ['admin']);
      } else {
        cb(null, ['guest']);
      }
    };
  
    addRolesToUser(user, function(err, roles) {
      if (err) {
        callback(err);
      } else {
        user.app_metadata.roles = roles;
        auth0.users.updateAppMetadata(user.user_id, user.app_metadata)
          .then(function(){
            context.idToken[NAMESPACE + `/roles`] = user.app_metadata.roles;
            context.accessToken[NAMESPACE + `/roles`] = user.app_metadata.roles;
            callback(null, user, context);
          })
          .catch(function(err){
            callback(err);
          });
      }
    });
  }