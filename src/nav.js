function Nav(){
    return(
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Company Name</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="#">Features</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Enterprise</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Support</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">pricing</a>
        </li>
        <li class="nav-item">
        <button type="button" class="btn btn-primary" >sign up</button>
      </li>
    </ul>
  </div>
</nav>
    )
}
export default Nav;