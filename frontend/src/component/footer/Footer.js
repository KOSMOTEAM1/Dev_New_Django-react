function Footer() {
  return (
    <footer class="footer">
      <div class="page-up">
        <a href="#" id="scrollToTopButton">
          <span class="arrow_carrot-up"></span>
        </a>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-lg-2">
            <div class="footer__logo"></div>
          </div>
          <div class="col-lg-8">
            <div class="footer__nav">
              <ul>
                <li>
                  <a href="../main/home">홈</a>
                </li>
                <li>
                  <a href="../main/recommend">취향저격 콘텐츠</a>
                </li>
                <li>
                  <a href="../main/latest">New 콘텐츠</a>
                </li>
                <li>
                  <a href="../main/wishlist">내가 찜한 콘텐츠</a>
                </li>
                <li>
                  <a href="../board/list2">자유게시판</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-lg-2">
            <p>
              <script>document.write(new Date().getFullYear());</script>
              All rights reserved | This site is made with
              <i class="fa fa-heart" aria-hidden="true"></i> by Team1
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
