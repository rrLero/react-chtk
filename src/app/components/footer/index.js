// @flow
import './styles.less';
import React from 'react';

type Props = {};

const Footer = ({}: Props) => {
    return (
        <footer className="footer">
            <ul className="footer__icons-list">
                <li className="footer__icons-list-item">
                    <a className="footer__icons-list-item-link" target="_blank" href="https://www.facebook.com/groups/chtk.com.ua/" name="facebook" rel="noopener">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="18" className={'footer__svg'}>
                            <path id="facebook"
                                d='M448 56.7v398.5c0 13.7-11.1 24.7-24.7 24.7H309.1V306.5h58.2l8.7-67.6h-67v-43.2c0-19.6 5.4-32.9 33.5-32.9h35.8v-60.5c-6.2-.8-27.4-2.7-52.2-2.7-51.6 0-87 31.5-87 89.4v49.9h-58.4v67.6h58.4V480H24.7C11.1 480 0 468.9 0 455.3V56.7C0 43.1 11.1 32 24.7 32h398.5c13.7 0 24.8 11.1 24.8 24.7z'
                                fill="white"
                            >
                            </path>
                        </svg>
                    </a>
                </li>
                <li className="footer__icons-list-item">
                    <a className="footer__icons-list-item-link" target="_blank" href="https://www.instagram.com/" name="facebook" rel="noopener">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="18" className={'footer__svg'}>
                            <path id="instagram"
                                  d='M100.3 480H7.4V180.9h92.9V480zM53.8 140.1C24.1 140.1 0 115.5 0 85.8 0 56.1 24.1 32 53.8 32c29.7 0 53.8 24.1 53.8 53.8 0 29.7-24.1 54.3-53.8 54.3zM448 480h-92.7V334.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V480h-92.8V180.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V480z'
                                  fill="white"
                            >
                            </path>
                        </svg>
                    </a>
                </li>
                <li className="footer__icons-list-item">
                    <a className="footer__icons-list-item-link" target="_blank" href="https://www.facebook.com/groups/chtk.com.ua/" name="facebook" rel="noopener">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="18" className={'footer__svg'}>
                            <path id="linkendin"
                                  d='M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z'
                                  fill="white"
                            >
                            </path>
                        </svg>
                    </a>
                </li>

            </ul>
            <p className="footer__copyright">© CHTK 2018</p>
        </footer>
    )
};

export default Footer;