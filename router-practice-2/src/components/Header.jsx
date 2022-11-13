import '../css/Header.css'
function Header() {
  return(
      <header>
        <ul>
          <li id='Homelist'>
            <a href="/">
              <h2>
              Home
              </h2>
              </a>
          </li>
          <li id='AAAlist'>
            <h2>AAA 관련 이동</h2>
            <a href="/AAA">AAA
            </a>
            <ul>
              <li><a href="/AAA/SubA1">SubA1</a></li>
              <li><a href="/AAA/SubA2">SubA2</a></li>
            </ul>
          </li>
          <li id='BBBlist'>
          <h2>BBB 관련 이동</h2>
            <a href="/BBB">BBB</a>
          <ul>
              <li><a href="/BBB/SubB1">SubB1</a></li>
              <li><a href="/BBB/SubB2">SubB2</a></li>
            </ul>
          </li>
        </ul>
      </header>
  )
}
export default Header;