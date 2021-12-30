function Header() {
  return (
    <header class="header">
      <div class="container">
        <div class="row">
          <div class="col-lg-2">
            <div class="header__logo"></div>
          </div>
          <div class="col-lg-8">
            <div class="header__nav">
              <nav class="header__menu mobile-menu">
                <ul>
                  <li>
                    <a href="../">홈</a>
                  </li>
                  <li>
                    <a href="../main/recommend">취향저격 콘텐츠</a>
                  </li>
                  <li>
                    <a href="../main/latest">최신 콘텐츠</a>
                  </li>
                  <li>
                    <a href="../main/wishlist">내가 찜한 콘텐츠</a>
                  </li>
                  <li>
                    <a href="../board/list2">자유게시판</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <div class="col-lg-2">
            <div class="header__right">
              <a href="/search/" class="search-switch">
                <span class="icon_search"></span>
              </a>
              <a href="../member/profile">
                <span class="icon_profile"></span>
              </a>
              <a href="../user/logout">
                <span class="icon_close_alt"></span>
              </a>
            </div>
          </div>
        </div>
        <div id="mobile-menu-wrap"></div>
      </div>
    </header>
  );
}

export default Header;
