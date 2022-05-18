import React from 'react';
import style from './Footer.module.css'

function Footer() {
    return (
        <div className={style.footer}>
            <p>Copyright © 2012 Sendo.vn</p>
            <p>Công ty Cổ phần Công nghệ Sen Đỏ</p>
            <p>Số ĐKKD: 0312776486 - Ngày cấp: 13/05/2014, được sửa đổi lần thứ 6, ngày 23/05/2016.</p>
            <p>Cơ quan cấp: Sở Kế hoạch và Đầu tư TPHCM.</p>
            <p>Địa chỉ: Tầng 5, Tòa nhà A, Vườn Ươm Doanh Nghiệp, Lô D.01, Đường Tân Thuận, Khu chế xuất Tân Thuận, Phường Tân Thuận Đông, Quận 7, Thành phố Hồ Chí Minh, Việt Nam.</p>
            <p>
                <a className={style.mail} href="mailto:lienhe@sendo.vn" target="_blank">Email: lienhe@sendo.vn</a>
            </p>
        </div>
    )
}

export default Footer;