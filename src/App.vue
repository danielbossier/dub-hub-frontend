<template>
  <div id="app">
    <nav class="sb-topnav navbar navbar-expand navbar-dark bg-dark">
      <!-- Navbar Brand-->
      <a class="navbar-brand ps-3" href="/">The Dub Hub</a>
      <!-- Sidebar Toggle-->
      <button class="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0" id="sidebarToggle" href="#!">
        <i class="fas fa-bars"></i>
      </button>
      <!-- Navbar Search
      <form class="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0">
        <div class="input-group">
          <input
            class="form-control"
            type="text"
            placeholder="Search for..."
            aria-label="Search for..."
            aria-describedby="btnNavbarSearch"
          />
          <button class="btn btn-primary" id="btnNavbarSearch" type="button"><i class="fas fa-search"></i></button>
        </div>
      </form> -->
      <!-- Navbar-->
      <ul class="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">
        <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle"
            id="navbarDropdown"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i class="fas fa-user fa-fw"></i>
          </a>
          <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
            <li v-if="!isLoggedIn()"><a class="dropdown-item" href="/signup">Signup</a></li>
            <li v-if="!isLoggedIn()"><a class="dropdown-item" href="/login">Login</a></li>
            <li><hr class="dropdown-divider" /></li>
            <li v-if="isLoggedIn()"><a class="dropdown-item" href="/logout">Logout</a></li>
          </ul>
        </li>
      </ul>
    </nav>
    <div id="layoutSidenav">
      <div id="layoutSidenav_nav">
        <nav class="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
          <div class="sb-sidenav-menu">
            <div class="nav">
              <div class="sb-sidenav-menu-heading">Groups</div>
              <a class="nav-link" href="/groups">
                <div class="sb-nav-link-icon"><i class="fas fa-baseball-ball"></i></div>
                All Groups
              </a>
              <a class="nav-link" href="/groups/new">
                <div class="sb-nav-link-icon"><i class="fas fa-baseball-ball"></i></div>
                Create Group
              </a>
              <!-- <div class="sb-sidenav-menu-heading">Interface</div>
              <a
                class="nav-link collapsed"
                href="#"
                data-bs-toggle="collapse"
                data-bs-target="#collapseLayouts"
                aria-expanded="false"
                aria-controls="collapseLayouts"
              >
                <div class="sb-nav-link-icon"><i class="fas fa-columns"></i></div>
                Layouts
                <div class="sb-sidenav-collapse-arrow"><i class="fas fa-angle-down"></i></div>
              </a>
              <div
                class="collapse"
                id="collapseLayouts"
                aria-labelledby="headingOne"
                data-bs-parent="#sidenavAccordion"
              >
                <nav class="sb-sidenav-menu-nested nav">
                  <a class="nav-link" href="layout-static.html">Static Navigation</a>
                  <a class="nav-link" href="layout-sidenav-light.html">Light Sidenav</a>
                </nav>
              </div>
              <a
                class="nav-link collapsed"
                href="#"
                data-bs-toggle="collapse"
                data-bs-target="#collapsePages"
                aria-expanded="false"
                aria-controls="collapsePages"
              >
                <div class="sb-nav-link-icon"><i class="fas fa-book-open"></i></div>
                Pages
                <div class="sb-sidenav-collapse-arrow"><i class="fas fa-angle-down"></i></div>
              </a>
              <div class="collapse" id="collapsePages" aria-labelledby="headingTwo" data-bs-parent="#sidenavAccordion">
                <nav class="sb-sidenav-menu-nested nav accordion" id="sidenavAccordionPages">
                  <a
                    class="nav-link collapsed"
                    href="#"
                    data-bs-toggle="collapse"
                    data-bs-target="#pagesCollapseAuth"
                    aria-expanded="false"
                    aria-controls="pagesCollapseAuth"
                  >
                    Authentication
                    <div class="sb-sidenav-collapse-arrow"><i class="fas fa-angle-down"></i></div>
                  </a>
                  <div
                    class="collapse"
                    id="pagesCollapseAuth"
                    aria-labelledby="headingOne"
                    data-bs-parent="#sidenavAccordionPages"
                  >
                    <nav class="sb-sidenav-menu-nested nav">
                      <a class="nav-link" href="login.html">Login</a>
                      <a class="nav-link" href="register.html">Register</a>
                      <a class="nav-link" href="password.html">Forgot Password</a>
                    </nav>
                  </div>
                  <a
                    class="nav-link collapsed"
                    href="#"
                    data-bs-toggle="collapse"
                    data-bs-target="#pagesCollapseError"
                    aria-expanded="false"
                    aria-controls="pagesCollapseError"
                  >
                    Error
                    <div class="sb-sidenav-collapse-arrow"><i class="fas fa-angle-down"></i></div>
                  </a>
                  <div
                    class="collapse"
                    id="pagesCollapseError"
                    aria-labelledby="headingOne"
                    data-bs-parent="#sidenavAccordionPages"
                  >
                    <nav class="sb-sidenav-menu-nested nav">
                      <a class="nav-link" href="401.html">401 Page</a>
                      <a class="nav-link" href="404.html">404 Page</a>
                      <a class="nav-link" href="500.html">500 Page</a>
                    </nav>
                  </div>
                </nav>
              </div> -->
              <div class="sb-sidenav-menu-heading">Teams</div>
              <!-- <a class="nav-link" href="/teams">
                <div class="sb-nav-link-icon"><i class="fas fa-baseball-ball"></i></div>
                All Teams
              </a> -->
              <a class="nav-link" href="/display">
                <div class="sb-nav-link-icon"><i class="fas fa-baseball-ball"></i></div>
                All Teams
              </a>
            </div>
          </div>
          <div class="sb-sidenav-footer">
            <div class="small">
              You are logged in as:
              <br />
              {{ getUsername() }}
            </div>
          </div>
        </nav>
      </div>
      <div id="layoutSidenav_content">
        <main>
          <div class="container-fluid px-4">
            <h1 class="mt-4">Welcome to The Dub Hub!</h1>
            <ol class="breadcrumb mb-4">
              <li class="breadcrumb-item active">Keeping Track of them Dubs</li>
            </ol>
          </div>
          <router-view />
        </main>
      </div>
    </div>
    <!-- <div id="nav">
      <router-link to="/">Home</router-link>
      |
      <router-link to="/teams">Teams</router-link>
      |
      <router-link to="/display">MLB Standings</router-link>
      |
      <router-link to="/groups">Groups</router-link>
      |
      <router-link to="/groups/new">Create Group</router-link>
      |
      <li v-if="!isLoggedIn()">
        <router-link to="/signup">Signup</router-link>
        |
      </li>
      <li v-if="!isLoggedIn()">
        <router-link to="/login">Login</router-link>
        |
      </li>
      <li v-if="isLoggedIn()">
        <router-link to="/logout">Logout</router-link>
      </li>
    </div> -->
    <footer class="py-0 bg-light mt-4">
      <!-- <div class="container-fluid px-2">
        <div class="d-flex align-items-right justify-content-between small">
          <div class="text-muted"></div>
          <div>
            <a>Copyright &copy; The Dub Hub 2021</a>
          </div>
        </div>
      </div> -->
    </footer>
  </div>
</template>

<style>
@font-face {
  font-family: "Varsity";
  src: local("Varsity"), url(./fonts/VarsityTeam-Bold.otf) format("truetype");
}
body {
  /* color: rgb(250, 27, 27); */
  background-image: url("./assets/background.jpg");
  background-size: 140%;
  /* height: 100px; */
  background-position: left;
  background-attachment: fixed;
  background-repeat: no-repeat;
}
footer {
  opacity: 0.6;
  /* position: absolute; */
  bottom: 0px;

  /* height: 200px; */
}
.mt-4 {
  color: red;
}
.breadcrumb-item {
  color: rgb(23, 23, 181) !important;
}
#app {
  font-family: Varsity, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* #nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
} */
</style>

<script>
export default {
  methods: {
    isLoggedIn: function () {
      if (localStorage.getItem("jwt")) {
        return true;
      } else {
        return false;
      }
    },
    getUserId: function () {
      return localStorage.getItem("user_id");
    },
    getUsername: function () {
      return localStorage.getItem("username");
    },
  },
};
</script>
