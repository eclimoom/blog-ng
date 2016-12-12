'use strict';

var install = true;
module.exports = function (app) {
  if (!install) {
    var User = app.models.User;
    var Role = app.models.Role;
    var RoleMapping = app.models.RoleMapping;

    User.create([
      {username: 'admin', email: 'a@a.com', password: 'admin'}
    ], function (err, users) {
      if (err) throw err;
      if (err) {
        return;
      }

      //...
      // Create projects, assign project owners and project team members
      //...
      // Create the admin role
      Role.create({
        name: 'admin'
      }, function (err, role) {
        if (err) throw err;
        if (err) {
          return;
        }
        // Make admin an admin
        role.principals.create({
          principalType: RoleMapping.USER,
          principalId: users[0].id
        }, function (err, principal) {

          if (err) throw err;
          console.log('Created principal:', principal);
        });
      });
    });
  }

}


