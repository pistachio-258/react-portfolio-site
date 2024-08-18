// 画像をそれぞれimportします。
import CoverImage from '../images/cover-image.jpg';
import ProfileImage from '../images/profile-image.png';
import { FaTwitter, FaGithub } from 'react-icons/fa';

export const Header = () => {
  return (
    <header className='main-cover' style={{ backgrountImage: `url(${CoverImage})` }}>
      {/* overlayはカバー画像の上に投下して表示される背景要素です */}
      <div className='overlay'></div>
      <div className='container'>
        <div className='display-table'>
          <div className='display-table-contents'>
            {/* カバー画像 */}
            <div className='profile-thumb' style={{ background: `url(${ProfileImage})` }}></div>
            {/* 名前と肩書はみなさんのお名前や肩書を自由に入れてください */}
            <h1 className='title-text'>あなたの名前</h1>
            <h3 className='title-text'>あなたの肩書(ex.Engineer)</h3>
            <ul className='social-icons'>
              <li className='icon-link'>
                {/* リンク先(href)は任意のURLを設定してください */}
                <a href="https://twitter.com/">
                  <FaTwitter color="white" size="2rem" />
                </a>
              </li>
              <li className='icon-link'>
                {/* リンク先(href)は任意のURLを設定してください */}
                <a href="https://github.com/">
                  <FaGithub color="white" size="2rem" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};
