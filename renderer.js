// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.

$(document).ready(function(){
    $('#light_off').click(function(){
        $('html').addClass('hdev_light');
        $('body div').removeClass('hdev_dark');
        $('body div').addClass('hdev_light');
        $('#light_off').toggle();
        $('#light_on').toggle();
    })

    $('#light_on').click(function(){
        $('html').addClass('hdev_dark');
        $('body div').removeClass('hdev_light');
        $('body div').addClass('hdev_dark');
        $('#light_off').toggle();
        $('#light_on').toggle();
    })
    $('html div').addClass('hdev_dark');
})



function loc_xoa_dau(str) {
    // Gộp nhiều dấu space thành 1 space
    str = str.replace(/\s+/g, "");
    // loại bỏ toàn bộ dấu space (nếu có) ở 2 đầu của chuỗi
    str = str.trim();
    // bắt đầu xóa dấu tiếng việt  trong chuỗi
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
    str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
    str = str.replace(/đ/g, "d");
    str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A");
    str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E");
    str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I");
    str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O");
    str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U");
    str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y");
    str = str.replace(/Đ/g, "D");
    str = str.replace(/\s/g, "");
    return str;
}

const pageHome = `
<div class="uk-container">
<div class="tite_home_category" >Phim hành động</div>

<div class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1" uk-slider>

    <ul id="muc_phim_hanh_dong" class="uk-slider-items uk-child-width-1-2 uk-child-width-1-4@m uk-grid">
        
    </ul>

    <a class="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous uk-slider-item="previous"></a>
    <a class="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slider-item="next"></a>

</div>


<div class="tite_home_category" >Phim tình cảm</div>

<div class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1" uk-slider>

    <ul id="muc_phim_tinh_cam" class="uk-slider-items uk-child-width-1-2 uk-child-width-1-4@m uk-grid">
        
    </ul>

    <a class="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous uk-slider-item="previous"></a>
    <a class="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slider-item="next"></a>

</div>


<div class="tite_home_category" >Phim hoạt hình</div>

<div class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1" uk-slider>

    <ul id="muc_phim_hoat_hinh" class="uk-slider-items uk-child-width-1-2 uk-child-width-1-4@m uk-grid">
        
    </ul>

    <a class="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous uk-slider-item="previous"></a>
    <a class="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slider-item="next"></a>

</div>

<div class="tite_home_category" >Phim cổ trang</div>

<div class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1" uk-slider>

    <ul id="muc_phim_co_trang" class="uk-slider-items uk-child-width-1-2 uk-child-width-1-4@m uk-grid">
        
    </ul>

    <a class="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous uk-slider-item="previous"></a>
    <a class="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slider-item="next"></a>

</div>


</div>

`

document.querySelector('#page_singe_phim').innerHTML = pageHome

fetch('https://api.apify.com/v2/key-value-stores/QubTry45OOCkTyohU/records/LATEST?fbclid=IwAR3EzvwKOfpFdrR-eHkG9aCPCE-VrGREvEPYdUik9KFzCAEiD80KYp8dPfw')
    .then(

        function (response) {
            if (response.status !== 200) {
                console.log('Lỗi, mã lỗi ' + response.status);
                return;
            }
            // parse response data
            response.json().then(data => {

                $('body').removeClass('preloading');
                $('.loader').delay(1000).fadeOut('fast');
                console.log(data)
                loaderTranghom()
                element_phimbo_render = document.querySelector('#phimbo_render')

                function loaderTranghom() {

                    // mục phim hành động

                    const muc_phim_hanh_dong = document.getElementById('muc_phim_hanh_dong');
                    const muc_phim_hanh_dong_slider = data.phim.phimchieurap

                    for (let dex = 0; dex < 50; dex++) {
                        var dmfim = loc_xoa_dau(muc_phim_hanh_dong_slider[dex].category)
                        if (dmfim == 'Phimhanhdong') {
                            const html_muc_phim_hanh_dong = `<li>
                            <div theloai="${loc_xoa_dau(muc_phim_hanh_dong_slider[dex].category)}" urlphim="${muc_phim_hanh_dong_slider[dex].url}" class="box_item_phim uk-panel">
                                <img class="uk-height-large" src="${muc_phim_hanh_dong_slider[dex].imageUrl}" alt="">
                            </div>
                        </li>`
                            muc_phim_hanh_dong.innerHTML += html_muc_phim_hanh_dong
                        }
                    }
                    // end

                    // mục phim tình cảm

                    const muc_phim_tinh_cam = document.getElementById('muc_phim_tinh_cam');
                    const muc_phim_tinh_cam_slider = data.phim.phimchieurap

                    for (let dex = 0; dex < 50; dex++) {
                        var dmfim = loc_xoa_dau(muc_phim_tinh_cam_slider[dex].category)
                        if (dmfim == 'Phimtinhcam') {
                            const http_muc_phim_tinh_cam = `<li>
                            <div theloai="${loc_xoa_dau(muc_phim_tinh_cam_slider[dex].category)}" urlphim="${muc_phim_tinh_cam_slider[dex].url}" class="box_item_phim uk-panel">
                                <img class="uk-height-large" src="${muc_phim_tinh_cam_slider[dex].imageUrl}" alt="">
                            </div>
                        </li>`
                            muc_phim_tinh_cam.innerHTML += http_muc_phim_tinh_cam
                        }
                    }
                    // end

                    // mục phim tình cảm

                    const muc_phim_hoat_hinh = document.getElementById('muc_phim_hoat_hinh');
                    const muc_phim_hoat_hinh_slider = data.phim.phimchieurap

                    for (let dex = 0; dex < 50; dex++) {
                        var dmfim = loc_xoa_dau(muc_phim_hoat_hinh_slider[dex].category)
                        if (dmfim == 'Phimhoathinh') {
                            const http_muc_phim_hoat_hinh = `<li>
                            <div theloai="${loc_xoa_dau(muc_phim_hoat_hinh_slider[dex].category)}" urlphim="${muc_phim_hoat_hinh_slider[dex].url}" class="box_item_phim uk-panel">
                                <img class="uk-height-large" src="${muc_phim_hoat_hinh_slider[dex].imageUrl}" alt="">
                            </div>
                        </li>`
                            muc_phim_hoat_hinh.innerHTML += http_muc_phim_hoat_hinh
                        }
                    }
                    // end

                    // mục phim cổ trang

                    const muc_phim_co_trang = document.getElementById('muc_phim_co_trang');
                    const muc_phim_co_trang_slider = data.phim.phimbo

                    for (let dex = 0; dex < 50; dex++) {
                        var dmfim = loc_xoa_dau(muc_phim_co_trang_slider[dex].category)
                        if (dmfim == 'Phimcotrang') {
                            const http_muc_phim_co_trang = `<li>
                            <div theloai="${loc_xoa_dau(muc_phim_co_trang_slider[dex].category)}" urlphim="${muc_phim_co_trang_slider[dex].url}" class="box_item_phim uk-panel">
                                <img class="uk-height-large" src="${muc_phim_co_trang_slider[dex].imageUrl}" alt="">
                            </div>
                        </li>`
                            muc_phim_co_trang.innerHTML += http_muc_phim_co_trang
                        }
                    }
                    // end
                }




                function get_singer_page(theloai, urlphim) {

                    $('body').addClass('preloading');
                    $('.loader').delay(0).fadeIn('fast');
                    console.log(phimbo)
                    element_page_singe_phim = document.querySelector('#page_singe_phim')
                    element_page_singe_phim.innerHTML = ''
                    element_phimbo_render.innerHTML = ''

                    for (let index = 0; index < phimbo.length; index++) {

                        var loai = loc_xoa_dau(phimbo[index].category);

                        var url = phimbo[index].url;

                        if (theloai == loai && urlphim == url) {
                            console.log()
                            const phim = phimbo[index].episode
                            console.log(phimbo[index].category)
                            element_page_singe_phim.innerHTML = `
                        <div class="box_phim_content">
                        <div class="singe_title_phim" >${phimbo[index].title}</div>
                        <iframe id="iframe_phim" class="iframe_phim" src="${phim[0].url}" title=""></iframe>
                        <br/>
                        <div id="episode_list" uk-margin></div>

                        <br/>
                        </div>
                        `
                            element_page_singe_phim = document.querySelector('#episode_list')
                            for (let p = 0; p < phim.length; p++) {
                                if(phim.length > 1){
                                    element_page_singe_phim.innerHTML += `
                            <button  theloai="${loc_xoa_dau(phimbo[index].category)}" urlphim="${phim[p].url}" class="button_episode_item uk-button uk-button-danger">Tập ${p+1}</button>
                            `
                                }
                                
                            }

                            $('.button_episode_item').click(function () {
                                $('body').addClass('preloading');
                                $('.loader').delay(0).fadeIn('fast');

                                const urlphim_tap = this.getAttribute('urlphim')
                                document.getElementById('iframe_phim').setAttribute('src', urlphim_tap)

                                $('body').removeClass('preloading');
                                $('.loader').delay(1000).fadeOut('fast');
                            })



                        }
                    }
                    $('body').removeClass('preloading');
                    $('.loader').delay(1000).fadeOut('fast');
                }

                $(document).ready(function () {
                    $('.box_item_phim').click(function () {
                        const theloai = this.getAttribute('theloai')
                        const urlphim = this.getAttribute('urlphim')
                        phimbo = data.phim.phimchieurap
                        get_singer_page(theloai, urlphim)
                    })
                })



                $('.menu_item_click').click(function () {

                    $('body').addClass('preloading');
                    $('.loader').delay(0).fadeIn('fast');
                    const category_get = this.getAttribute("mx-category")

                    if (category_get == 'trangchu') {

                        document.querySelector('#page_singe_phim').innerHTML = '';
                        document.querySelector('#phimbo_render').innerHTML = '';
                        document.querySelector('#page_singe_phim').innerHTML = pageHome;
                        loaderTranghom()
                        $('body').removeClass('preloading');
                        $('.loader').delay(1000).fadeOut('fast');
                        $(document).ready(function () {
                            $('.box_item_phim').click(function () {
                                const theloai = this.getAttribute('theloai')
                                const urlphim = this.getAttribute('urlphim')
                                phimbo = data.phim.phimchieurap
                                get_singer_page(theloai, urlphim)
                            })
                        })

                    } else {
                        // start
                        phimbo = data.phim[category_get]
                        element_phimbo_render = document.querySelector('#phimbo_render')
                        document.querySelector('#page_singe_phim').innerHTML = '';
                        element_phimbo_render.innerHTML = ''
                        console.log(phimbo.length)
                        for (let index = 0; index < phimbo.length; index++) {
                            const element = phimbo[index];
                            taghtml = `<div class="box_item_phim"  theloai="${loc_xoa_dau(phimbo[index].category)}" urlphim="${phimbo[index].url}">
            <div class="uk-padding-remove uk-card uk-card-default uk-card-body">
            <div class="box_image_phim">
            <img class="uk-height-medium" src="${phimbo[index].imageUrl}" alt="">
            </div>  
                <div class="ten_phim_card">${phimbo[index].title}</div>
            </div>
        </div>`

                            element_phimbo_render.innerHTML += taghtml
                        }
                        $('body').removeClass('preloading');
                        $('.loader').delay(1000).fadeOut('fast');

                        $(document).ready(function () {
                            $('.box_item_phim').click(function () {
                                const theloai = this.getAttribute('theloai')
                                const urlphim = this.getAttribute('urlphim')
                                get_singer_page(theloai, urlphim, phimbo)
                            })
                        })
                    }
                    // end

                })

            })
        }
    )
    .catch(err => {
        console.log('Error :-S', err)
    });