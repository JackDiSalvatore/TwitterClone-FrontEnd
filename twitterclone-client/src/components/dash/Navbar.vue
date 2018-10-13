<template>

  <div id="navbar">
    <b-navbar id="innerNav" toggleable="md" type="light" variant="faded" role="navigation">

      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

      <b-collapse is-nav id="nav_collapse">
        <b-col>
          <b-navbar-nav id="navMenu">
            <b-nav-item href="#"><i class="fa fa-home"></i> Home</b-nav-item>
            <b-nav-item href="#"><i class="fa fa-bell"></i> Notifications</b-nav-item>
            <b-nav-item href="#"><i class="fa fa-envelope"></i> Messages</b-nav-item>
          </b-navbar-nav>
        </b-col>

        <b-col>
          <b-navbar-brand id="logo" href="/#/newsfeed"><img src="@/assets/Twitter_Logo_Blue.png"></b-navbar-brand>
        </b-col>

        <b-col>
          <!-- Right aligned nav items -->
          <b-navbar-nav id="userSettings" class="pull-right">

            <b-nav-form>
              <b-form-input id="searchInput" size="sm" type="text" placeholder="Search ..."/>
              <b-button id="searchButton" size="sm" type="submit"><i class="fa fa-search"></i></b-button>
            </b-nav-form>

            <b-nav-item-dropdown class="pl-2">
              <template slot="button-content">
                <i class="fa fa-user"></i>
              </template>
              <b-dropdown-item href="#">{{user.username}}</b-dropdown-item>
              <b-dropdown-item href="#" @click.prevent="logout">Signout</b-dropdown-item>
            </b-nav-item-dropdown>

          </b-navbar-nav>
        </b-col>
      </b-collapse>

    </b-navbar>
  </div>

</template>

<script>
export default {
   name: "navbar",
   created: function() {
      this.getUser()
   },
   data: function() {
     return {
         user: {
            username: '',
            about: '',
            avatar: ''
         }
      }
   },
   methods: {
      getUser: function() {
         this.$http.get('/users/me')
             .then(function(res) {
                this.user = res.body
             })
      },
     logout: function() {
       this.$auth.destroyToken()
       this.user = {}
       this.$router.push('/auth/login')
     }
   }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#navbar {
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  font-weight: bold;
}

#innerNav {
  padding: 0;
}

#navMenu {
  padding-left: 8rem;
}

b-navbar-header {
    float: left;
    text-align: center;
    width: 100%;
}
/*b-navbar-brand {float:none;}*/
#logo {
  margin: 0;
}

img {
  width: 32px;
  height: 32px;
}

#searchInput{
  width: 8rem;
  padding-right: 8px;
  padding-left: 8px;
  border-radius: 20px ;
  border:transparent;
  /* transittion */
  transition: all 0.5s ease;
  outline:none;
  box-shadow: none;
}
#searchInput:hover {
  outline: none;
  background-color: #f4f4f4;
}
#searchInput:focus {
  outline: none;
}

#searchButton {
  padding: 0;
  border: transparent;
  background: transparent;
  box-shadow: none;
  color: grey;
}

#userSettings {
  padding-right: 8rem;
}

.navbar-light .navbar-nav .nav-link:hover {
  color: #4BA1EC;
}

</style>
