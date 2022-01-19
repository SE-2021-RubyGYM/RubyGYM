import './style_footer.css'

function Footer(){
    return(
        <div id="footer">
            <div id="row_logo">
                <div id="contain_logo">
                    <img
                    id="centuryon"
                    src="https://www.cfyc.com.vn/images_server/themes/celebration/img/footer/centuryon.jpg?v=CFYC-CFYCWEBSITE-722"
                    alt="centuryon-logo"
                    />
                    <img
                    id="rubygym"
                    src="https://lh3.googleusercontent.com/d/1TR8uxHUpxSpM6NeGLU-Tz_2LswOLN2eH=s220?authuser=0"
                    alt="ruby-gym"
                    />
                    <img
                    id="eri"
                    src="https://www.cfyc.com.vn/images_server/themes/celebration/img/footer/eri-logo.png?v=CFYC-CFYCWEBSITE-722"
                    alt="eri-logo"
                    />
                </div>
            </div>
            <div id="text_location">
                <p >
                    CÔNG TY TNHH TRUNG TÂM THỂ DỤC THỂ HÌNH RUBY GYM
                    <br/>
                    Địa chỉ: Số 191 đường Đại La, Q.Hai Bà Trưng, TP. HN
                    <br/>
                    Mã số thuế: 0305060028
                </p>
            </div>
            <div id="bocongthuong">
                <img id='anh_bocongthuong' src="https://www.cfyc.com.vn/images_server/themes/celebration/img/footer/logoSaleNoti.png?v=CFYC-CFYCWEBSITE-722" alt="bocongthuong"/>
            </div>
        </div>
    )
}

export default Footer;