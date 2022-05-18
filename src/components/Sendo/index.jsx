// import React from 'react'

// const Sendo = function () {
//     return (
//         <div>
//         <noscript>&lt;iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KS6S8W" height="0" width="0"
//             style="display:none;visibility:hidden"&gt;&lt;/iframe&gt;
//             &lt;div&gt;Bạn cần bật Javascript để sử dụng trang web Sendo.vn&lt;/div&gt;
//         </noscript>
//         <div id="fb-root" />
//         <div id="root">
//             <div className="Root_1Kcx">
//                 <section className="topBar_1e6g">
//                     <div className="container">
//                         <div className="row">
//                             <div className="topBarCol_2wvN topBarColLeft_2fRx"><button id="tai_app" className="topBarLink_2Ybi" rel="nofollow"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" width={32} height={32} viewBox="0 0 32 32">
//                                 <path d="M12 5.333v8h-5.333l9.335 9.335 9.333-9.335h-5.335v-8h-8zM6.667 28h18.667v-2.667h-18.667v2.667z">
//                                 </path>
//                             </svg><span>Tải ứng dụng</span></button><button id="customer_service" className="topBarLink_2Ybi" rel="nofollow"><span>Chăm sóc khách hàng</span></button><button id="checkOrder" className="topBarLink_2Ybi" rel="nofollow"><span>Kiểm tra đơn hàng</span></button></div>
//                             <div className="topBarCol_2wvN"><button id="login" className="topBarLink_2Ybi" rel="nofollow"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width={48} height={48}>
//                                 <g data-name="Layer 2">
//                                     <g data-name="Layer 1">
//                                         <path d="M24,4A20,20,0,1,0,44,24,20,20,0,0,0,24,4Zm0,6a6,6,0,1,1-6,6A6,6,0,0,1,24,10Zm0,28.4A14.4,14.4,0,0,1,12,32c.06-4,8-6.16,12-6.16S35.94,28,36,32A14.4,14.4,0,0,1,24,38.4Z">
//                                         </path>
//                                         <path d="M0,0H48V48H0Z" fill="none" />
//                                     </g>
//                                 </g>
//                             </svg><span>Đăng nhập</span></button></div>
//                         </div>
//                     </div>
//                 </section>
//                 <div className="stickyWrap_1CJt" style={{ zIndex: 11, minHeight: '60px' }}>
//                     <div className="stickyContainer_29pF" style={{ top: 0 }}>
//                         <div className="appHeader_15ts">
//                             <div className="container">
//                                 <div className="row headerWrapper_tvuf">
//                                     <div className="headerItem_o7OP logoWrap_1Zvr"><a href="https://www.sendo.vn/"><img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMzQiIGhlaWdodD0iMzQiIHZpZXdCb3g9IjAgMCAzNCAzNCI+CiAgPGRlZnM+CiAgICA8cG9seWdvbiBpZD0icGFnZS0xLWNvcHktNEAxeC1hIiBwb2ludHM9IjAgLjIwOCAzMy43OTMgLjIwOCAzMy43OTMgMzQgMCAzNCIvPgogIDwvZGVmcz4KICA8ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgPG1hc2sgaWQ9InBhZ2UtMS1jb3B5LTRAMXgtYiIgZmlsbD0iI2ZmZiI+CiAgICAgIDx1c2UgeGxpbms6aHJlZj0iI3BhZ2UtMS1jb3B5LTRAMXgtYSIvPgogICAgPC9tYXNrPgogICAgPHBhdGggZmlsbD0iI0ZFRkVGRSIgZD0iTTMxLjI5MTY3MjIsMC4yMDc0IEwyLjQ5NDcyMzcxLDAuMjA3NCBDMS4xMTc4OTg5NywwLjIwNzQgMC4wMDAxMDUxNTQ2MzksMS4yOTgyMDQxMiAwLjAwMDEwNTE1NDYzOSwyLjY0MzEzMTk2IEwwLjAwMDEwNTE1NDYzOSwzMS41NjE3MDkzIEMwLjAwMDEwNTE1NDYzOSwzMi45MDczMzgxIDEuMTE3ODk4OTcsMzMuOTk5ODk0OCAyLjQ5NDcyMzcxLDMzLjk5OTg5NDggTDMxLjI5MTY3MjIsMzMuOTk5ODk0OCBDMzIuNjY5ODk5LDMzLjk5OTg5NDggMzMuNzkzMzAxLDMyLjkwNzMzODEgMzMuNzkzMzAxLDMxLjU2MTcwOTMgTDMzLjc5MzMwMSwyLjY0MzEzMTk2IEMzMy43OTMzMDEsMS4yOTgyMDQxMiAzMi42Njk4OTksMC4yMDc0IDMxLjI5MTY3MjIsMC4yMDc0IiBtYXNrPSJ1cmwoI3BhZ2UtMS1jb3B5LTRAMXgtYikiLz4KICAgIDxwYXRoIGZpbGw9IiNFRDI1MjQiIGQ9Ik0xMiAyNi45OTkzMzE5QzEyIDI4LjEwNDA1ODggMTEuMTA0NTAyNSAyOSAxMC4wMDA1MDEyIDI5IDguODk1NDk3NDUgMjkgOCAyOC4xMDQwNTg4IDggMjYuOTk5MzMxOSA4IDI1Ljg5NTYwNzEgOC44OTU0OTc0NSAyNSAxMC4wMDA1MDEyIDI1IDExLjEwNDUwMjUgMjUgMTIgMjUuODk1NjA3MSAxMiAyNi45OTkzMzE5TTIyIDI2Ljk5OTMzMTlDMjIgMjguMTA0MDU4OCAyMS4xMDQ4MDE3IDI5IDE5Ljk5OTE2NDkgMjkgMTguODk1ODY2NCAyOSAxOCAyOC4xMDQwNTg4IDE4IDI2Ljk5OTMzMTkgMTggMjUuODk1NjA3MSAxOC44OTU4NjY0IDI1IDE5Ljk5OTE2NDkgMjUgMjEuMTA0ODAxNyAyNSAyMiAyNS44OTU2MDcxIDIyIDI2Ljk5OTMzMTlNMjMuNTM5MTI0MiAxMi44NjM4OTQ1QzIyLjA2NTU1MjMgMTIuMDY1NDE5MyAyMS4wMDc2Mzk1IDExLjQ2Njk5MDQgMjEuMDA3NjM5NSAxMC40OTQxMTU5IDIxLjAwNzYzOTUgOS42MzA2Njg0MSAyMS44NDk5MzM1IDguMDQ0MzE4NzcgMjMuNTgxMjU2NiA4LjA0MzI5MjkgMjQuMjcwNTk5MyA4LjA0MjYwODk4IDI1LjE2NzA2MzUgOC4xNTQwODc3NCAyNS4zMTg5NTI2IDguMTk5OTEwM0wyNi42MDczNTQzIDUuMzgzODc0NjhDMjQuNDE3MTc3NiA0Ljg1NTg4OTM3IDIzLjQyOTcyMTUgNS4wMjYxODUxNSAyMy40Mjk3MjE1IDUuMDI2MTg1MTUgMjAuMDMyNTc1NCA1LjE0ODk0ODU4IDE3LjA4MTg5MTEgNy45NjkwODc3MSAxNy4wODE4OTExIDExLjA5MzIyODcgMTcuMDgxODkxMSAxMy4yODc5MjQxIDE4LjgzNzY0MzggMTQuNTg0OTc2MSAyMC42OTc4NDI1IDE1LjU1Nzg1MDYgMjIuMjk5MjI3OCAxNi4zNTU5ODM4IDIzLjA0ODA1MTYgMTYuOTgwNDAxNyAyMy4wNDgwNTE2IDE3LjkyODMxMzEgMjMuMDQ4MDUxNiAxOS4xMTczMDU5IDIxLjk4MDU3OTQgMTkuNzYwODczNSAyMC43MTQxMjkgMTkuODc2NDU1OEwyMC42MTI1MTU1IDE5Ljg4NTY4ODcgMTAuNDIxMDc3MSAxOS45NTc4NDIxIDExLjAxMzA1NSAxOC4wNDMyMTE1IDE2LjcyNzEyOTIgMTguMDQzMjExNSAxNy43Njk4MTc2IDE1LjUwNDE2MyAxMC4xODA2NzQ1IDE1LjUwNDE2M0M5LjE5MTA5NDIgMTUuNTA0MTYzIDguNzgxNDUzOTYgMTUuODMwMzkyMiA4LjYwNTEzNTE3IDE2LjE1NTU5NTZMNy4wMzQ5MDY1OSAyMS41NDY5Mjc0QzYuODY1MzE0ODMgMjIuMTMwMzEwMiA3LjMzMDE4NzQ2IDIyLjc1MzAxODIgOC4wNzEyMjIwNSAyMi45NTI3MjI1IDguMTMzNTM1NTEgMjIuOTY5MTM2NiA4LjE5MzcyNDY2IDIyLjk3NDYwNzkgOC4yNTUzMzAwMiAyMi45ODQ1MjQ3TDguMjUxNzg5NDggMjIuOTk4MjAzMSA4LjQwNDc0MDcyIDIyLjk5NTgwOTRDOC40ODY4ODEyIDIzLjAwMjMwNjYgOC41NjkzNzU3MyAyMy4wMDA1OTY4IDguNjQ3OTc1NjggMjIuOTk1MTI1NUwyMC42MDkzMjkgMjIuOTY5MTM2NiAyMC43MTQxMjkgMjIuOTYzMzIzM0MyNC4yMjE3Mzk5IDIyLjcxMzY5MjkgMjcgMjAuNzg3Nzc3NiAyNyAxNy4zMDM4OTUzIDI3IDE1LjMwODIyMDIgMjUuNjU3MDc0IDEzLjkzNjYyMTEgMjMuNTM5MTI0MiAxMi44NjM4OTQ1Ii8+CiAgPC9nPgo8L3N2Zz4K" alt="SENDO.VN - Mua hàng online đảm bảo, giá rẻ từ các Shop uy tín" /></a>
//                                         <div className="headerMegaMenuContainer_2Vl8"><a aria-label="Navigation Toggle" href="https://www.sendo.vn/sitemap/" className="navToggleButton_nfZu"><svg width="1em" height="1em" viewBox="0 0 24 24">
//                                             <path d="M3 19h18v-2H3v2zm0-6h8v-2H3v2zm0-8v2h18V5H3zm10 5l4 4 4-4z" fill="#FFF" />
//                                         </svg><span>Tất cả danh mục</span></a>
//                                             <div className="megaMenuContainer_TWGo" />
//                                         </div>
//                                     </div>
//                                     <div className="headerItem_o7OP autoWidth_3zfF">
//                                         <div className="searchBox_1T3n">
//                                             <form>
//                                                 <div className="inputGroup_3z0d input-group"><input className="form-control" placeholder="Tìm kiếm trên Sendo" aria-label="Tìm kiếm trên Sendo" defaultValue />
//                                                     <div className="searchConditionBox_ir0L"><input type="checkbox" id="ckbSearchCondition" defaultChecked /><label className="searchCondition_u_Oa" htmlFor="ckbSearchCondition"><span className="textCateName_2hls">Điện thoại - Máy tính bảng</span><span className="closeIcon_19hS" aria-hidden="true">×</span></label></div>
//                                                     <div className="input-group-append"><button className="btn searchButton_3d_3 orange"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" width={32} height={32} viewBox="0 0 32 32">
//                                                         <path d="M20.669 18.667h-1.059l-0.368-0.365c1.299-1.502 2.091-3.473 2.091-5.63 0-0.002 0-0.003 0-0.005v0c0-4.786-3.88-8.667-8.667-8.667s-8.667 3.88-8.667 8.667c0 4.786 3.88 8.667 8.667 8.667v0c0.002 0 0.004 0 0.006 0 2.155 0 4.126-0.79 5.638-2.097l-0.011 0.009 0.368 0.365v1.056l6.664 6.655 1.988-1.988-6.651-6.667zM12.667 18.667c-3.314 0-6-2.686-6-6s2.686-6 6-6v0c3.314 0 6 2.686 6 6s-2.686 6-6 6v0z">
//                                                         </path>
//                                                     </svg>Tìm kiếm</button></div>
//                                                 </div>
//                                             </form>
//                                         </div>
//                                     </div>
//                                     <div className="headerItem_o7OP" />
//                                     <div className="headerItem_o7OP"><a href="https://www.sendo.vn/gio-hang" aria-label="Go to cart" className="headerCart_3wHw"><svg width="1em" height="1em" viewBox="0 0 24 24" className="iconCart_2ayd">
//                                         <path fillRule="evenodd" d="M8 18c-1.104 0-1.99.895-1.99 2 0 1.104.886 2 1.99 2a2 2 0 000-4m10 0c-1.104 0-1.99.895-1.99 2 0 1.104.886 2 1.99 2a2 2 0 000-4M4 2H1.999v1.999H4l3.598 7.588-1.353 2.451A2 2 0 008 17h12v-2H8.423a.249.249 0 01-.249-.25l.03-.121L9.102 13h7.449c.752 0 1.408-.415 1.75-1.029l3.574-6.489A1 1 0 0021 3.999H6.213l-.406-.854A1.997 1.997 0 004 2">
//                                         </path>
//                                     </svg></a></div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="overlay_3wVe" />
//                 <div id="page-container">
//                     <div className="container categoryPage_2MO-">
//                         <section className="section_36Nx">
//                             <div className="filterPanel_1eWt">
//                                 <div className="container_cLbc">
//                                     <div className="container_3LZM">
//                                         <div className="header_1L8a active_1-SS">
//                                             <h4 className="title_2Xw8">Bộ lọc sản phẩm</h4><span className="collapseButton_Z1LE" />
//                                         </div>
//                                         <div className="collapse show">
//                                             <div><label className="checkbox_15Mt"><input type="checkbox" /><span className="box_3_lh"><svg viewBox="0 0 48 48" width="1em" height="1em" className="icon_HFMC">
//                                                 <g data-name="Layer 2">
//                                                     <g data-name="Layer 1">
//                                                         <path d="M0 0h48v48H0z" fill="none" />
//                                                         <path d="M40 15.46l-3.63-3.47-17.81 16.96-6.78-6.47L8 26.09l9.77 9.32.02-.01.63.61L40 15.46z">
//                                                         </path>
//                                                     </g>
//                                                 </g>
//                                             </svg></span><span>Voucher Shop 4.4 đến 50%</span></label><label className="checkbox_15Mt"><input type="checkbox" /><span className="box_3_lh"><svg viewBox="0 0 48 48" width="1em" height="1em" className="icon_HFMC">
//                                                 <g data-name="Layer 2">
//                                                     <g data-name="Layer 1">
//                                                         <path d="M0 0h48v48H0z" fill="none" />
//                                                         <path d="M40 15.46l-3.63-3.47-17.81 16.96-6.78-6.47L8 26.09l9.77 9.32.02-.01.63.61L40 15.46z">
//                                                         </path>
//                                                     </g>
//                                                 </g>
//                                             </svg></span><span>Mua trước trả sau</span></label><label className="checkbox_15Mt"><input type="checkbox" /><span className="box_3_lh"><svg viewBox="0 0 48 48" width="1em" height="1em" className="icon_HFMC">
//                                                 <g data-name="Layer 2">
//                                                     <g data-name="Layer 1">
//                                                         <path d="M0 0h48v48H0z" fill="none" />
//                                                         <path d="M40 15.46l-3.63-3.47-17.81 16.96-6.78-6.47L8 26.09l9.77 9.32.02-.01.63.61L40 15.46z">
//                                                         </path>
//                                                     </g>
//                                                 </g>
//                                             </svg></span><span>Mua gói siêu hời</span></label><label className="checkbox_15Mt"><input type="checkbox" /><span className="box_3_lh"><svg viewBox="0 0 48 48" width="1em" height="1em" className="icon_HFMC">
//                                                 <g data-name="Layer 2">
//                                                     <g data-name="Layer 1">
//                                                         <path d="M0 0h48v48H0z" fill="none" />
//                                                         <path d="M40 15.46l-3.63-3.47-17.81 16.96-6.78-6.47L8 26.09l9.77 9.32.02-.01.63.61L40 15.46z">
//                                                         </path>
//                                                     </g>
//                                                 </g>
//                                             </svg></span><span>Mua nhiều giảm giá</span></label><label className="checkbox_15Mt"><input type="checkbox" /><span className="box_3_lh"><svg viewBox="0 0 48 48" width="1em" height="1em" className="icon_HFMC">
//                                                 <g data-name="Layer 2">
//                                                     <g data-name="Layer 1">
//                                                         <path d="M0 0h48v48H0z" fill="none" />
//                                                         <path d="M40 15.46l-3.63-3.47-17.81 16.96-6.78-6.47L8 26.09l9.77 9.32.02-.01.63.61L40 15.46z">
//                                                         </path>
//                                                     </g>
//                                                 </g>
//                                             </svg></span><span>Khuyến mãi</span></label><label className="checkbox_15Mt"><input type="checkbox" /><span className="box_3_lh"><svg viewBox="0 0 48 48" width="1em" height="1em" className="icon_HFMC">
//                                                 <g data-name="Layer 2">
//                                                     <g data-name="Layer 1">
//                                                         <path d="M0 0h48v48H0z" fill="none" />
//                                                         <path d="M40 15.46l-3.63-3.47-17.81 16.96-6.78-6.47L8 26.09l9.77 9.32.02-.01.63.61L40 15.46z">
//                                                         </path>
//                                                     </g>
//                                                 </g>
//                                             </svg></span><span>Hỏa tốc 3h</span></label>
//                                                 <div className="collapse"><label className="checkbox_15Mt"><input type="checkbox" /><span className="box_3_lh"><svg viewBox="0 0 48 48" width="1em" height="1em" className="icon_HFMC">
//                                                     <g data-name="Layer 2">
//                                                         <g data-name="Layer 1">
//                                                             <path d="M0 0h48v48H0z" fill="none" />
//                                                             <path d="M40 15.46l-3.63-3.47-17.81 16.96-6.78-6.47L8 26.09l9.77 9.32.02-.01.63.61L40 15.46z">
//                                                             </path>
//                                                         </g>
//                                                     </g>
//                                                 </svg></span><span>Khuyến mãi app</span></label><label className="checkbox_15Mt"><input type="checkbox" /><span className="box_3_lh"><svg viewBox="0 0 48 48" width="1em" height="1em" className="icon_HFMC">
//                                                     <g data-name="Layer 2">
//                                                         <g data-name="Layer 1">
//                                                             <path d="M0 0h48v48H0z" fill="none" />
//                                                             <path d="M40 15.46l-3.63-3.47-17.81 16.96-6.78-6.47L8 26.09l9.77 9.32.02-.01.63.61L40 15.46z">
//                                                             </path>
//                                                         </g>
//                                                     </g>
//                                                 </svg></span><span>Trả góp 0%</span></label><label className="checkbox_15Mt"><input type="checkbox" /><span className="box_3_lh"><svg viewBox="0 0 48 48" width="1em" height="1em" className="icon_HFMC">
//                                                     <g data-name="Layer 2">
//                                                         <g data-name="Layer 1">
//                                                             <path d="M0 0h48v48H0z" fill="none" />
//                                                             <path d="M40 15.46l-3.63-3.47-17.81 16.96-6.78-6.47L8 26.09l9.77 9.32.02-.01.63.61L40 15.46z">
//                                                             </path>
//                                                         </g>
//                                                     </g>
//                                                 </svg></span><span>Có video</span></label><label className="checkbox_15Mt"><input type="checkbox" /><span className="box_3_lh"><svg viewBox="0 0 48 48" width="1em" height="1em" className="icon_HFMC">
//                                                     <g data-name="Layer 2">
//                                                         <g data-name="Layer 1">
//                                                             <path d="M0 0h48v48H0z" fill="none" />
//                                                             <path d="M40 15.46l-3.63-3.47-17.81 16.96-6.78-6.47L8 26.09l9.77 9.32.02-.01.63.61L40 15.46z">
//                                                             </path>
//                                                         </g>
//                                                     </g>
//                                                 </svg></span><span>SenMall</span></label></div><span className="viewMore_26SD">Xem thêm</span>
//                                             </div>
//                                         </div>
//                                     </div>
//                                     <div className="container_3LZM">
//                                         <div className="header_1L8a active_1-SS">
//                                             <h4 className="title_2Xw8">Theo khoảng giá</h4><span className="collapseButton_Z1LE" />
//                                         </div>
//                                         <div className="collapse show">
//                                             <div>
//                                                 <form className="form_1ed7"><input className="inputPrice_2Ax2" placeholder="Thấp nhất" type="text" defaultValue /><span className="toLabel_3tNh"><span className="carect_2TCV" /></span><input className="inputPrice_2Ax2" placeholder="Cao nhất" type="text" defaultValue /><button className="submitButton_Po0P" type="submit" /></form>
//                                                 <div className="priceFilters_RKJd"><button className="priceItem_3FtT"><span>Dưới
//                                                     200k</span></button><button className="priceItem_3FtT"><span>200k ~ 500k</span></button><button className="priceItem_3FtT"><span>500k ~ 2m</span></button><button className="priceItem_3FtT"><span>2m
//                                                         ~ 5m</span></button><button className="priceItem_3FtT"><span>5m ~ 20m</span></button><button className="priceItem_3FtT"><span>Trên 20m</span></button></div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                     <div className="container_3LZM">
//                                         <div className="header_1L8a active_1-SS">
//                                             <h4 className="title_2Xw8">Màu sắc</h4><span className="collapseButton_Z1LE" />
//                                         </div>
//                                         <div className="collapse show">
//                                             <div><label className="checkbox_15Mt"><input type="checkbox" /><span className="box_3_lh"><svg viewBox="0 0 48 48" width="1em" height="1em" className="icon_HFMC">
//                                                 <g data-name="Layer 2">
//                                                     <g data-name="Layer 1">
//                                                         <path d="M0 0h48v48H0z" fill="none" />
//                                                         <path d="M40 15.46l-3.63-3.47-17.81 16.96-6.78-6.47L8 26.09l9.77 9.32.02-.01.63.61L40 15.46z">
//                                                         </path>
//                                                     </g>
//                                                 </g>
//                                             </svg></span><span>Hồng</span></label><label className="checkbox_15Mt"><input type="checkbox" /><span className="box_3_lh"><svg viewBox="0 0 48 48" width="1em" height="1em" className="icon_HFMC">
//                                                 <g data-name="Layer 2">
//                                                     <g data-name="Layer 1">
//                                                         <path d="M0 0h48v48H0z" fill="none" />
//                                                         <path d="M40 15.46l-3.63-3.47-17.81 16.96-6.78-6.47L8 26.09l9.77 9.32.02-.01.63.61L40 15.46z">
//                                                         </path>
//                                                     </g>
//                                                 </g>
//                                             </svg></span><span>Xanh nước biển</span></label><label className="checkbox_15Mt"><input type="checkbox" /><span className="box_3_lh"><svg viewBox="0 0 48 48" width="1em" height="1em" className="icon_HFMC">
//                                                 <g data-name="Layer 2">
//                                                     <g data-name="Layer 1">
//                                                         <path d="M0 0h48v48H0z" fill="none" />
//                                                         <path d="M40 15.46l-3.63-3.47-17.81 16.96-6.78-6.47L8 26.09l9.77 9.32.02-.01.63.61L40 15.46z">
//                                                         </path>
//                                                     </g>
//                                                 </g>
//                                             </svg></span><span>Xám</span></label><label className="checkbox_15Mt"><input type="checkbox" /><span className="box_3_lh"><svg viewBox="0 0 48 48" width="1em" height="1em" className="icon_HFMC">
//                                                 <g data-name="Layer 2">
//                                                     <g data-name="Layer 1">
//                                                         <path d="M0 0h48v48H0z" fill="none" />
//                                                         <path d="M40 15.46l-3.63-3.47-17.81 16.96-6.78-6.47L8 26.09l9.77 9.32.02-.01.63.61L40 15.46z">
//                                                         </path>
//                                                     </g>
//                                                 </g>
//                                             </svg></span><span>Vàng</span></label><label className="checkbox_15Mt"><input type="checkbox" /><span className="box_3_lh"><svg viewBox="0 0 48 48" width="1em" height="1em" className="icon_HFMC">
//                                                 <g data-name="Layer 2">
//                                                     <g data-name="Layer 1">
//                                                         <path d="M0 0h48v48H0z" fill="none" />
//                                                         <path d="M40 15.46l-3.63-3.47-17.81 16.96-6.78-6.47L8 26.09l9.77 9.32.02-.01.63.61L40 15.46z">
//                                                         </path>
//                                                     </g>
//                                                 </g>
//                                             </svg></span><span>Trắng</span></label><label className="checkbox_15Mt"><input type="checkbox" /><span className="box_3_lh"><svg viewBox="0 0 48 48" width="1em" height="1em" className="icon_HFMC">
//                                                 <g data-name="Layer 2">
//                                                     <g data-name="Layer 1">
//                                                         <path d="M0 0h48v48H0z" fill="none" />
//                                                         <path d="M40 15.46l-3.63-3.47-17.81 16.96-6.78-6.47L8 26.09l9.77 9.32.02-.01.63.61L40 15.46z">
//                                                         </path>
//                                                     </g>
//                                                 </g>
//                                             </svg></span><span>Đen</span></label>
//                                                 <div className="collapse"><label className="checkbox_15Mt"><input type="checkbox" /><span className="box_3_lh"><svg viewBox="0 0 48 48" width="1em" height="1em" className="icon_HFMC">
//                                                     <g data-name="Layer 2">
//                                                         <g data-name="Layer 1">
//                                                             <path d="M0 0h48v48H0z" fill="none" />
//                                                             <path d="M40 15.46l-3.63-3.47-17.81 16.96-6.78-6.47L8 26.09l9.77 9.32.02-.01.63.61L40 15.46z">
//                                                             </path>
//                                                         </g>
//                                                     </g>
//                                                 </svg></span><span>Đỏ</span></label><label className="checkbox_15Mt"><input type="checkbox" /><span className="box_3_lh"><svg viewBox="0 0 48 48" width="1em" height="1em" className="icon_HFMC">
//                                                     <g data-name="Layer 2">
//                                                         <g data-name="Layer 1">
//                                                             <path d="M0 0h48v48H0z" fill="none" />
//                                                             <path d="M40 15.46l-3.63-3.47-17.81 16.96-6.78-6.47L8 26.09l9.77 9.32.02-.01.63.61L40 15.46z">
//                                                             </path>
//                                                         </g>
//                                                     </g>
//                                                 </svg></span><span>Khác</span></label><label className="checkbox_15Mt"><input type="checkbox" /><span className="box_3_lh"><svg viewBox="0 0 48 48" width="1em" height="1em" className="icon_HFMC">
//                                                     <g data-name="Layer 2">
//                                                         <g data-name="Layer 1">
//                                                             <path d="M0 0h48v48H0z" fill="none" />
//                                                             <path d="M40 15.46l-3.63-3.47-17.81 16.96-6.78-6.47L8 26.09l9.77 9.32.02-.01.63.61L40 15.46z">
//                                                             </path>
//                                                         </g>
//                                                     </g>
//                                                 </svg></span><span>Xanh đen</span></label><label className="checkbox_15Mt"><input type="checkbox" /><span className="box_3_lh"><svg viewBox="0 0 48 48" width="1em" height="1em" className="icon_HFMC">
//                                                     <g data-name="Layer 2">
//                                                         <g data-name="Layer 1">
//                                                             <path d="M0 0h48v48H0z" fill="none" />
//                                                             <path d="M40 15.46l-3.63-3.47-17.81 16.96-6.78-6.47L8 26.09l9.77 9.32.02-.01.63.61L40 15.46z">
//                                                             </path>
//                                                         </g>
//                                                     </g>
//                                                 </svg></span><span>Bạc</span></label></div><span className="viewMore_26SD">Xem thêm</span>
//                                             </div>
//                                         </div>
//                                     </div>
//                                     <div className="container_3LZM">
//                                         <div className="header_1L8a active_1-SS">
//                                             <h4 className="title_2Xw8">Vị trí Shop</h4><span className="collapseButton_Z1LE" />
//                                         </div>
//                                         <div className="collapse show">
//                                             <div><label className="checkbox_15Mt"><input type="checkbox" /><span className="box_3_lh"><svg viewBox="0 0 48 48" width="1em" height="1em" className="icon_HFMC">
//                                                 <g data-name="Layer 2">
//                                                     <g data-name="Layer 1">
//                                                         <path d="M0 0h48v48H0z" fill="none" />
//                                                         <path d="M40 15.46l-3.63-3.47-17.81 16.96-6.78-6.47L8 26.09l9.77 9.32.02-.01.63.61L40 15.46z">
//                                                         </path>
//                                                     </g>
//                                                 </g>
//                                             </svg></span><span>Hà Nội</span></label><label className="checkbox_15Mt"><input type="checkbox" /><span className="box_3_lh"><svg viewBox="0 0 48 48" width="1em" height="1em" className="icon_HFMC">
//                                                 <g data-name="Layer 2">
//                                                     <g data-name="Layer 1">
//                                                         <path d="M0 0h48v48H0z" fill="none" />
//                                                         <path d="M40 15.46l-3.63-3.47-17.81 16.96-6.78-6.47L8 26.09l9.77 9.32.02-.01.63.61L40 15.46z">
//                                                         </path>
//                                                     </g>
//                                                 </g>
//                                             </svg></span><span>Hồ Chí Minh</span></label><label className="checkbox_15Mt"><input type="checkbox" /><span className="box_3_lh"><svg viewBox="0 0 48 48" width="1em" height="1em" className="icon_HFMC">
//                                                 <g data-name="Layer 2">
//                                                     <g data-name="Layer 1">
//                                                         <path d="M0 0h48v48H0z" fill="none" />
//                                                         <path d="M40 15.46l-3.63-3.47-17.81 16.96-6.78-6.47L8 26.09l9.77 9.32.02-.01.63.61L40 15.46z">
//                                                         </path>
//                                                     </g>
//                                                 </g>
//                                             </svg></span><span>Đà Nẵng</span></label><label className="checkbox_15Mt"><input type="checkbox" /><span className="box_3_lh"><svg viewBox="0 0 48 48" width="1em" height="1em" className="icon_HFMC">
//                                                 <g data-name="Layer 2">
//                                                     <g data-name="Layer 1">
//                                                         <path d="M0 0h48v48H0z" fill="none" />
//                                                         <path d="M40 15.46l-3.63-3.47-17.81 16.96-6.78-6.47L8 26.09l9.77 9.32.02-.01.63.61L40 15.46z">
//                                                         </path>
//                                                     </g>
//                                                 </g>
//                                             </svg></span><span>Nghệ An</span></label><label className="checkbox_15Mt"><input type="checkbox" /><span className="box_3_lh"><svg viewBox="0 0 48 48" width="1em" height="1em" className="icon_HFMC">
//                                                 <g data-name="Layer 2">
//                                                     <g data-name="Layer 1">
//                                                         <path d="M0 0h48v48H0z" fill="none" />
//                                                         <path d="M40 15.46l-3.63-3.47-17.81 16.96-6.78-6.47L8 26.09l9.77 9.32.02-.01.63.61L40 15.46z">
//                                                         </path>
//                                                     </g>
//                                                 </g>
//                                             </svg></span><span>Phú Thọ</span></label><label className="checkbox_15Mt"><input type="checkbox" /><span className="box_3_lh"><svg viewBox="0 0 48 48" width="1em" height="1em" className="icon_HFMC">
//                                                 <g data-name="Layer 2">
//                                                     <g data-name="Layer 1">
//                                                         <path d="M0 0h48v48H0z" fill="none" />
//                                                         <path d="M40 15.46l-3.63-3.47-17.81 16.96-6.78-6.47L8 26.09l9.77 9.32.02-.01.63.61L40 15.46z">
//                                                         </path>
//                                                     </g>
//                                                 </g>
//                                             </svg></span><span>Thanh Hóa</span></label>
//                                                 <div className="collapse"><label className="checkbox_15Mt"><input type="checkbox" /><span className="box_3_lh"><svg viewBox="0 0 48 48" width="1em" height="1em" className="icon_HFMC">
//                                                     <g data-name="Layer 2">
//                                                         <g data-name="Layer 1">
//                                                             <path d="M0 0h48v48H0z" fill="none" />
//                                                             <path d="M40 15.46l-3.63-3.47-17.81 16.96-6.78-6.47L8 26.09l9.77 9.32.02-.01.63.61L40 15.46z">
//                                                             </path>
//                                                         </g>
//                                                     </g>
//                                                 </svg></span><span>Đắk Lắk</span></label><label className="checkbox_15Mt"><input type="checkbox" /><span className="box_3_lh"><svg viewBox="0 0 48 48" width="1em" height="1em" className="icon_HFMC">
//                                                     <g data-name="Layer 2">
//                                                         <g data-name="Layer 1">
//                                                             <path d="M0 0h48v48H0z" fill="none" />
//                                                             <path d="M40 15.46l-3.63-3.47-17.81 16.96-6.78-6.47L8 26.09l9.77 9.32.02-.01.63.61L40 15.46z">
//                                                             </path>
//                                                         </g>
//                                                     </g>
//                                                 </svg></span><span>Hưng Yên</span></label><label className="checkbox_15Mt"><input type="checkbox" /><span className="box_3_lh"><svg viewBox="0 0 48 48" width="1em" height="1em" className="icon_HFMC">
//                                                     <g data-name="Layer 2">
//                                                         <g data-name="Layer 1">
//                                                             <path d="M0 0h48v48H0z" fill="none" />
//                                                             <path d="M40 15.46l-3.63-3.47-17.81 16.96-6.78-6.47L8 26.09l9.77 9.32.02-.01.63.61L40 15.46z">
//                                                             </path>
//                                                         </g>
//                                                     </g>
//                                                 </svg></span><span>Bình Dương</span></label><label className="checkbox_15Mt"><input type="checkbox" /><span className="box_3_lh"><svg viewBox="0 0 48 48" width="1em" height="1em" className="icon_HFMC">
//                                                     <g data-name="Layer 2">
//                                                         <g data-name="Layer 1">
//                                                             <path d="M0 0h48v48H0z" fill="none" />
//                                                             <path d="M40 15.46l-3.63-3.47-17.81 16.96-6.78-6.47L8 26.09l9.77 9.32.02-.01.63.61L40 15.46z">
//                                                             </path>
//                                                         </g>
//                                                     </g>
//                                                 </svg></span><span>Lâm Đồng</span></label></div><span className="viewMore_26SD">Xem thêm</span>
//                                             </div>
//                                         </div>
//                                     </div>
//                                     <div className="container_3LZM">
//                                         <div className="header_1L8a active_1-SS">
//                                             <h4 className="title_2Xw8">Phương thức bảo hành</h4><span className="collapseButton_Z1LE" />
//                                         </div>
//                                         <div className="collapse show">
//                                             <div><label className="checkbox_15Mt"><input type="checkbox" /><span className="box_3_lh"><svg viewBox="0 0 48 48" width="1em" height="1em" className="icon_HFMC">
//                                                 <g data-name="Layer 2">
//                                                     <g data-name="Layer 1">
//                                                         <path d="M0 0h48v48H0z" fill="none" />
//                                                         <path d="M40 15.46l-3.63-3.47-17.81 16.96-6.78-6.47L8 26.09l9.77 9.32.02-.01.63.61L40 15.46z">
//                                                         </path>
//                                                     </g>
//                                                 </g>
//                                             </svg></span><span>Bảo hành điện tử</span></label><label className="checkbox_15Mt"><input type="checkbox" /><span className="box_3_lh"><svg viewBox="0 0 48 48" width="1em" height="1em" className="icon_HFMC">
//                                                 <g data-name="Layer 2">
//                                                     <g data-name="Layer 1">
//                                                         <path d="M0 0h48v48H0z" fill="none" />
//                                                         <path d="M40 15.46l-3.63-3.47-17.81 16.96-6.78-6.47L8 26.09l9.77 9.32.02-.01.63.61L40 15.46z">
//                                                         </path>
//                                                     </g>
//                                                 </g>
//                                             </svg></span><span>Bằng hóa đơn</span></label><label className="checkbox_15Mt"><input type="checkbox" /><span className="box_3_lh"><svg viewBox="0 0 48 48" width="1em" height="1em" className="icon_HFMC">
//                                                 <g data-name="Layer 2">
//                                                     <g data-name="Layer 1">
//                                                         <path d="M0 0h48v48H0z" fill="none" />
//                                                         <path d="M40 15.46l-3.63-3.47-17.81 16.96-6.78-6.47L8 26.09l9.77 9.32.02-.01.63.61L40 15.46z">
//                                                         </path>
//                                                     </g>
//                                                 </g>
//                                             </svg></span><span>Bằng tem bảo hành</span></label><label className="checkbox_15Mt"><input type="checkbox" /><span className="box_3_lh"><svg viewBox="0 0 48 48" width="1em" height="1em" className="icon_HFMC">
//                                                 <g data-name="Layer 2">
//                                                     <g data-name="Layer 1">
//                                                         <path d="M0 0h48v48H0z" fill="none" />
//                                                         <path d="M40 15.46l-3.63-3.47-17.81 16.96-6.78-6.47L8 26.09l9.77 9.32.02-.01.63.61L40 15.46z">
//                                                         </path>
//                                                     </g>
//                                                 </g>
//                                             </svg></span><span>Bằng phiếu bảo hành</span></label><label className="checkbox_15Mt"><input type="checkbox" /><span className="box_3_lh"><svg viewBox="0 0 48 48" width="1em" height="1em" className="icon_HFMC">
//                                                 <g data-name="Layer 2">
//                                                     <g data-name="Layer 1">
//                                                         <path d="M0 0h48v48H0z" fill="none" />
//                                                         <path d="M40 15.46l-3.63-3.47-17.81 16.96-6.78-6.47L8 26.09l9.77 9.32.02-.01.63.61L40 15.46z">
//                                                         </path>
//                                                     </g>
//                                                 </g>
//                                             </svg></span><span>Không bảo hành</span></label></div>
//                                         </div>
//                                     </div>
//                                     <div className="container_3LZM">
//                                         <div className="header_1L8a active_1-SS">
//                                             <h4 className="title_2Xw8">Số SIM</h4><span className="collapseButton_Z1LE" />
//                                         </div>
//                                         <div className="collapse show">
//                                             <div><label className="checkbox_15Mt"><input type="checkbox" /><span className="box_3_lh"><svg viewBox="0 0 48 48" width="1em" height="1em" className="icon_HFMC">
//                                                 <g data-name="Layer 2">
//                                                     <g data-name="Layer 1">
//                                                         <path d="M0 0h48v48H0z" fill="none" />
//                                                         <path d="M40 15.46l-3.63-3.47-17.81 16.96-6.78-6.47L8 26.09l9.77 9.32.02-.01.63.61L40 15.46z">
//                                                         </path>
//                                                     </g>
//                                                 </g>
//                                             </svg></span><span>1 SIM</span></label><label className="checkbox_15Mt"><input type="checkbox" /><span className="box_3_lh"><svg viewBox="0 0 48 48" width="1em" height="1em" className="icon_HFMC">
//                                                 <g data-name="Layer 2">
//                                                     <g data-name="Layer 1">
//                                                         <path d="M0 0h48v48H0z" fill="none" />
//                                                         <path d="M40 15.46l-3.63-3.47-17.81 16.96-6.78-6.47L8 26.09l9.77 9.32.02-.01.63.61L40 15.46z">
//                                                         </path>
//                                                     </g>
//                                                 </g>
//                                             </svg></span><span>2 SIM</span></label><label className="checkbox_15Mt"><input type="checkbox" /><span className="box_3_lh"><svg viewBox="0 0 48 48" width="1em" height="1em" className="icon_HFMC">
//                                                 <g data-name="Layer 2">
//                                                     <g data-name="Layer 1">
//                                                         <path d="M0 0h48v48H0z" fill="none" />
//                                                         <path d="M40 15.46l-3.63-3.47-17.81 16.96-6.78-6.47L8 26.09l9.77 9.32.02-.01.63.61L40 15.46z">
//                                                         </path>
//                                                     </g>
//                                                 </g>
//                                             </svg></span><span>3 SIM</span></label><label className="checkbox_15Mt"><input type="checkbox" /><span className="box_3_lh"><svg viewBox="0 0 48 48" width="1em" height="1em" className="icon_HFMC">
//                                                 <g data-name="Layer 2">
//                                                     <g data-name="Layer 1">
//                                                         <path d="M0 0h48v48H0z" fill="none" />
//                                                         <path d="M40 15.46l-3.63-3.47-17.81 16.96-6.78-6.47L8 26.09l9.77 9.32.02-.01.63.61L40 15.46z">
//                                                         </path>
//                                                     </g>
//                                                 </g>
//                                             </svg></span><span>4 SIM</span></label><label className="checkbox_15Mt"><input type="checkbox" /><span className="box_3_lh"><svg viewBox="0 0 48 48" width="1em" height="1em" className="icon_HFMC">
//                                                 <g data-name="Layer 2">
//                                                     <g data-name="Layer 1">
//                                                         <path d="M0 0h48v48H0z" fill="none" />
//                                                         <path d="M40 15.46l-3.63-3.47-17.81 16.96-6.78-6.47L8 26.09l9.77 9.32.02-.01.63.61L40 15.46z">
//                                                         </path>
//                                                     </g>
//                                                 </g>
//                                             </svg></span><span>5 SIM</span></label><label className="checkbox_15Mt"><input type="checkbox" /><span className="box_3_lh"><svg viewBox="0 0 48 48" width="1em" height="1em" className="icon_HFMC">
//                                                 <g data-name="Layer 2">
//                                                     <g data-name="Layer 1">
//                                                         <path d="M0 0h48v48H0z" fill="none" />
//                                                         <path d="M40 15.46l-3.63-3.47-17.81 16.96-6.78-6.47L8 26.09l9.77 9.32.02-.01.63.61L40 15.46z">
//                                                         </path>
//                                                     </g>
//                                                 </g>
//                                             </svg></span><span>SIM chuẩn</span></label>
//                                                 <div className="collapse"><label className="checkbox_15Mt"><input type="checkbox" /><span className="box_3_lh"><svg viewBox="0 0 48 48" width="1em" height="1em" className="icon_HFMC">
//                                                     <g data-name="Layer 2">
//                                                         <g data-name="Layer 1">
//                                                             <path d="M0 0h48v48H0z" fill="none" />
//                                                             <path d="M40 15.46l-3.63-3.47-17.81 16.96-6.78-6.47L8 26.09l9.77 9.32.02-.01.63.61L40 15.46z">
//                                                             </path>
//                                                         </g>
//                                                     </g>
//                                                 </svg></span><span>2 Nano-SIM</span></label><label className="checkbox_15Mt"><input type="checkbox" /><span className="box_3_lh"><svg viewBox="0 0 48 48" width="1em" height="1em" className="icon_HFMC">
//                                                     <g data-name="Layer 2">
//                                                         <g data-name="Layer 1">
//                                                             <path d="M0 0h48v48H0z" fill="none" />
//                                                             <path d="M40 15.46l-3.63-3.47-17.81 16.96-6.78-6.47L8 26.09l9.77 9.32.02-.01.63.61L40 15.46z">
//                                                             </path>
//                                                         </g>
//                                                     </g>
//                                                 </svg></span><span>cập nhật</span></label><label className="checkbox_15Mt"><input type="checkbox" /><span className="box_3_lh"><svg viewBox="0 0 48 48" width="1em" height="1em" className="icon_HFMC">
//                                                     <g data-name="Layer 2">
//                                                         <g data-name="Layer 1">
//                                                             <path d="M0 0h48v48H0z" fill="none" />
//                                                             <path d="M40 15.46l-3.63-3.47-17.81 16.96-6.78-6.47L8 26.09l9.77 9.32.02-.01.63.61L40 15.46z">
//                                                             </path>
//                                                         </g>
//                                                     </g>
//                                                 </svg></span><span>Có</span></label><label className="checkbox_15Mt"><input type="checkbox" /><span className="box_3_lh"><svg viewBox="0 0 48 48" width="1em" height="1em" className="icon_HFMC">
//                                                     <g data-name="Layer 2">
//                                                         <g data-name="Layer 1">
//                                                             <path d="M0 0h48v48H0z" fill="none" />
//                                                             <path d="M40 15.46l-3.63-3.47-17.81 16.96-6.78-6.47L8 26.09l9.77 9.32.02-.01.63.61L40 15.46z">
//                                                             </path>
//                                                         </g>
//                                                     </g>
//                                                 </svg></span><span>Không</span></label></div><span className="viewMore_26SD">Xem thêm</span>
//                                             </div>
//                                         </div>
//                                     </div>
//                                     <div className="container_3LZM">
//                                         <div className="header_1L8a active_1-SS">
//                                             <h4 className="title_2Xw8">Bảo hành</h4><span className="collapseButton_Z1LE" />
//                                         </div>
//                                         <div className="collapse show">
//                                             <div><label className="checkbox_15Mt"><input type="checkbox" /><span className="box_3_lh"><svg viewBox="0 0 48 48" width="1em" height="1em" className="icon_HFMC">
//                                                 <g data-name="Layer 2">
//                                                     <g data-name="Layer 1">
//                                                         <path d="M0 0h48v48H0z" fill="none" />
//                                                         <path d="M40 15.46l-3.63-3.47-17.81 16.96-6.78-6.47L8 26.09l9.77 9.32.02-.01.63.61L40 15.46z">
//                                                         </path>
//                                                     </g>
//                                                 </g>
//                                             </svg></span><span>18 tháng</span></label><label className="checkbox_15Mt"><input type="checkbox" /><span className="box_3_lh"><svg viewBox="0 0 48 48" width="1em" height="1em" className="icon_HFMC">
//                                                 <g data-name="Layer 2">
//                                                     <g data-name="Layer 1">
//                                                         <path d="M0 0h48v48H0z" fill="none" />
//                                                         <path d="M40 15.46l-3.63-3.47-17.81 16.96-6.78-6.47L8 26.09l9.77 9.32.02-.01.63.61L40 15.46z">
//                                                         </path>
//                                                     </g>
//                                                 </g>
//                                             </svg></span><span>6 tháng</span></label><label className="checkbox_15Mt"><input type="checkbox" /><span className="box_3_lh"><svg viewBox="0 0 48 48" width="1em" height="1em" className="icon_HFMC">
//                                                 <g data-name="Layer 2">
//                                                     <g data-name="Layer 1">
//                                                         <path d="M0 0h48v48H0z" fill="none" />
//                                                         <path d="M40 15.46l-3.63-3.47-17.81 16.96-6.78-6.47L8 26.09l9.77 9.32.02-.01.63.61L40 15.46z">
//                                                         </path>
//                                                     </g>
//                                                 </g>
//                                             </svg></span><span>15 tháng</span></label><label className="checkbox_15Mt"><input type="checkbox" /><span className="box_3_lh"><svg viewBox="0 0 48 48" width="1em" height="1em" className="icon_HFMC">
//                                                 <g data-name="Layer 2">
//                                                     <g data-name="Layer 1">
//                                                         <path d="M0 0h48v48H0z" fill="none" />
//                                                         <path d="M40 15.46l-3.63-3.47-17.81 16.96-6.78-6.47L8 26.09l9.77 9.32.02-.01.63.61L40 15.46z">
//                                                         </path>
//                                                     </g>
//                                                 </g>
//                                             </svg></span><span>Không bảo hành</span></label><label className="checkbox_15Mt"><input type="checkbox" /><span className="box_3_lh"><svg viewBox="0 0 48 48" width="1em" height="1em" className="icon_HFMC">
//                                                 <g data-name="Layer 2">
//                                                     <g data-name="Layer 1">
//                                                         <path d="M0 0h48v48H0z" fill="none" />
//                                                         <path d="M40 15.46l-3.63-3.47-17.81 16.96-6.78-6.47L8 26.09l9.77 9.32.02-.01.63.61L40 15.46z">
//                                                         </path>
//                                                     </g>
//                                                 </g>
//                                             </svg></span><span>3 tháng</span></label><label className="checkbox_15Mt"><input type="checkbox" /><span className="box_3_lh"><svg viewBox="0 0 48 48" width="1em" height="1em" className="icon_HFMC">
//                                                 <g data-name="Layer 2">
//                                                     <g data-name="Layer 1">
//                                                         <path d="M0 0h48v48H0z" fill="none" />
//                                                         <path d="M40 15.46l-3.63-3.47-17.81 16.96-6.78-6.47L8 26.09l9.77 9.32.02-.01.63.61L40 15.46z">
//                                                         </path>
//                                                     </g>
//                                                 </g>
//                                             </svg></span><span>12 tháng</span></label>
//                                                 <div className="collapse"><label className="checkbox_15Mt"><input type="checkbox" /><span className="box_3_lh"><svg viewBox="0 0 48 48" width="1em" height="1em" className="icon_HFMC">
//                                                     <g data-name="Layer 2">
//                                                         <g data-name="Layer 1">
//                                                             <path d="M0 0h48v48H0z" fill="none" />
//                                                             <path d="M40 15.46l-3.63-3.47-17.81 16.96-6.78-6.47L8 26.09l9.77 9.32.02-.01.63.61L40 15.46z">
//                                                             </path>
//                                                         </g>
//                                                     </g>
//                                                 </svg></span><span>9 tháng</span></label><label className="checkbox_15Mt"><input type="checkbox" /><span className="box_3_lh"><svg viewBox="0 0 48 48" width="1em" height="1em" className="icon_HFMC">
//                                                     <g data-name="Layer 2">
//                                                         <g data-name="Layer 1">
//                                                             <path d="M0 0h48v48H0z" fill="none" />
//                                                             <path d="M40 15.46l-3.63-3.47-17.81 16.96-6.78-6.47L8 26.09l9.77 9.32.02-.01.63.61L40 15.46z">
//                                                             </path>
//                                                         </g>
//                                                     </g>
//                                                 </svg></span><span>24 tháng</span></label><label className="checkbox_15Mt"><input type="checkbox" /><span className="box_3_lh"><svg viewBox="0 0 48 48" width="1em" height="1em" className="icon_HFMC">
//                                                     <g data-name="Layer 2">
//                                                         <g data-name="Layer 1">
//                                                             <path d="M0 0h48v48H0z" fill="none" />
//                                                             <path d="M40 15.46l-3.63-3.47-17.81 16.96-6.78-6.47L8 26.09l9.77 9.32.02-.01.63.61L40 15.46z">
//                                                             </path>
//                                                         </g>
//                                                     </g>
//                                                 </svg></span><span>7 ngày</span></label><label className="checkbox_15Mt"><input type="checkbox" /><span className="box_3_lh"><svg viewBox="0 0 48 48" width="1em" height="1em" className="icon_HFMC">
//                                                     <g data-name="Layer 2">
//                                                         <g data-name="Layer 1">
//                                                             <path d="M0 0h48v48H0z" fill="none" />
//                                                             <path d="M40 15.46l-3.63-3.47-17.81 16.96-6.78-6.47L8 26.09l9.77 9.32.02-.01.63.61L40 15.46z">
//                                                             </path>
//                                                         </g>
//                                                     </g>
//                                                 </svg></span><span>1 tháng</span></label></div><span className="viewMore_26SD">Xem thêm</span>
//                                             </div>
//                                         </div>
//                                     </div>
//                                     <div className="container_3LZM">
//                                         <div className="header_1L8a active_1-SS">
//                                             <h4 className="title_2Xw8">Hãng sản xuất</h4><span className="collapseButton_Z1LE" />
//                                         </div>
//                                         <div className="collapse show">
//                                             <div><label className="checkbox_15Mt"><input type="checkbox" /><span className="box_3_lh"><svg viewBox="0 0 48 48" width="1em" height="1em" className="icon_HFMC">
//                                                 <g data-name="Layer 2">
//                                                     <g data-name="Layer 1">
//                                                         <path d="M0 0h48v48H0z" fill="none" />
//                                                         <path d="M40 15.46l-3.63-3.47-17.81 16.96-6.78-6.47L8 26.09l9.77 9.32.02-.01.63.61L40 15.46z">
//                                                         </path>
//                                                     </g>
//                                                 </g>
//                                             </svg></span><span>Apple</span></label><label className="checkbox_15Mt"><input type="checkbox" /><span className="box_3_lh"><svg viewBox="0 0 48 48" width="1em" height="1em" className="icon_HFMC">
//                                                 <g data-name="Layer 2">
//                                                     <g data-name="Layer 1">
//                                                         <path d="M0 0h48v48H0z" fill="none" />
//                                                         <path d="M40 15.46l-3.63-3.47-17.81 16.96-6.78-6.47L8 26.09l9.77 9.32.02-.01.63.61L40 15.46z">
//                                                         </path>
//                                                     </g>
//                                                 </g>
//                                             </svg></span><span>Nokia</span></label><label className="checkbox_15Mt"><input type="checkbox" /><span className="box_3_lh"><svg viewBox="0 0 48 48" width="1em" height="1em" className="icon_HFMC">
//                                                 <g data-name="Layer 2">
//                                                     <g data-name="Layer 1">
//                                                         <path d="M0 0h48v48H0z" fill="none" />
//                                                         <path d="M40 15.46l-3.63-3.47-17.81 16.96-6.78-6.47L8 26.09l9.77 9.32.02-.01.63.61L40 15.46z">
//                                                         </path>
//                                                     </g>
//                                                 </g>
//                                             </svg></span><span>Leagoo</span></label><label className="checkbox_15Mt"><input type="checkbox" /><span className="box_3_lh"><svg viewBox="0 0 48 48" width="1em" height="1em" className="icon_HFMC">
//                                                 <g data-name="Layer 2">
//                                                     <g data-name="Layer 1">
//                                                         <path d="M0 0h48v48H0z" fill="none" />
//                                                         <path d="M40 15.46l-3.63-3.47-17.81 16.96-6.78-6.47L8 26.09l9.77 9.32.02-.01.63.61L40 15.46z">
//                                                         </path>
//                                                     </g>
//                                                 </g>
//                                             </svg></span><span>Xiaomi</span></label><label className="checkbox_15Mt"><input type="checkbox" /><span className="box_3_lh"><svg viewBox="0 0 48 48" width="1em" height="1em" className="icon_HFMC">
//                                                 <g data-name="Layer 2">
//                                                     <g data-name="Layer 1">
//                                                         <path d="M0 0h48v48H0z" fill="none" />
//                                                         <path d="M40 15.46l-3.63-3.47-17.81 16.96-6.78-6.47L8 26.09l9.77 9.32.02-.01.63.61L40 15.46z">
//                                                         </path>
//                                                     </g>
//                                                 </g>
//                                             </svg></span><span>2GOOD</span></label><label className="checkbox_15Mt"><input type="checkbox" /><span className="box_3_lh"><svg viewBox="0 0 48 48" width="1em" height="1em" className="icon_HFMC">
//                                                 <g data-name="Layer 2">
//                                                     <g data-name="Layer 1">
//                                                         <path d="M0 0h48v48H0z" fill="none" />
//                                                         <path d="M40 15.46l-3.63-3.47-17.81 16.96-6.78-6.47L8 26.09l9.77 9.32.02-.01.63.61L40 15.46z">
//                                                         </path>
//                                                     </g>
//                                                 </g>
//                                             </svg></span><span>OPPO</span></label>
//                                                 <div className="collapse"><label className="checkbox_15Mt"><input type="checkbox" /><span className="box_3_lh"><svg viewBox="0 0 48 48" width="1em" height="1em" className="icon_HFMC">
//                                                     <g data-name="Layer 2">
//                                                         <g data-name="Layer 1">
//                                                             <path d="M0 0h48v48H0z" fill="none" />
//                                                             <path d="M40 15.46l-3.63-3.47-17.81 16.96-6.78-6.47L8 26.09l9.77 9.32.02-.01.63.61L40 15.46z">
//                                                             </path>
//                                                         </g>
//                                                     </g>
//                                                 </svg></span><span>Masstel</span></label><label className="checkbox_15Mt"><input type="checkbox" /><span className="box_3_lh"><svg viewBox="0 0 48 48" width="1em" height="1em" className="icon_HFMC">
//                                                     <g data-name="Layer 2">
//                                                         <g data-name="Layer 1">
//                                                             <path d="M0 0h48v48H0z" fill="none" />
//                                                             <path d="M40 15.46l-3.63-3.47-17.81 16.96-6.78-6.47L8 26.09l9.77 9.32.02-.01.63.61L40 15.46z">
//                                                             </path>
//                                                         </g>
//                                                     </g>
//                                                 </svg></span><span>Samsung</span></label><label className="checkbox_15Mt"><input type="checkbox" /><span className="box_3_lh"><svg viewBox="0 0 48 48" width="1em" height="1em" className="icon_HFMC">
//                                                     <g data-name="Layer 2">
//                                                         <g data-name="Layer 1">
//                                                             <path d="M0 0h48v48H0z" fill="none" />
//                                                             <path d="M40 15.46l-3.63-3.47-17.81 16.96-6.78-6.47L8 26.09l9.77 9.32.02-.01.63.61L40 15.46z">
//                                                             </path>
//                                                         </g>
//                                                     </g>
//                                                 </svg></span><span>Khác</span></label><label className="checkbox_15Mt"><input type="checkbox" /><span className="box_3_lh"><svg viewBox="0 0 48 48" width="1em" height="1em" className="icon_HFMC">
//                                                     <g data-name="Layer 2">
//                                                         <g data-name="Layer 1">
//                                                             <path d="M0 0h48v48H0z" fill="none" />
//                                                             <path d="M40 15.46l-3.63-3.47-17.81 16.96-6.78-6.47L8 26.09l9.77 9.32.02-.01.63.61L40 15.46z">
//                                                             </path>
//                                                         </g>
//                                                     </g>
//                                                 </svg></span><span>Sony</span></label></div><span className="viewMore_26SD">Xem thêm</span>
//                                             </div>
//                                         </div>
//                                     </div>
//                                     <div className="container_3LZM">
//                                         <div className="header_1L8a active_1-SS">
//                                             <h4 className="title_2Xw8">Phụ kiện kèm theo</h4><span className="collapseButton_Z1LE" />
//                                         </div>
//                                         <div className="collapse show">
//                                             <div><label className="checkbox_15Mt"><input type="checkbox" /><span className="box_3_lh"><svg viewBox="0 0 48 48" width="1em" height="1em" className="icon_HFMC">
//                                                 <g data-name="Layer 2">
//                                                     <g data-name="Layer 1">
//                                                         <path d="M0 0h48v48H0z" fill="none" />
//                                                         <path d="M40 15.46l-3.63-3.47-17.81 16.96-6.78-6.47L8 26.09l9.77 9.32.02-.01.63.61L40 15.46z">
//                                                         </path>
//                                                     </g>
//                                                 </g>
//                                             </svg></span><span>Cáp sạc</span></label><label className="checkbox_15Mt"><input type="checkbox" /><span className="box_3_lh"><svg viewBox="0 0 48 48" width="1em" height="1em" className="icon_HFMC">
//                                                 <g data-name="Layer 2">
//                                                     <g data-name="Layer 1">
//                                                         <path d="M0 0h48v48H0z" fill="none" />
//                                                         <path d="M40 15.46l-3.63-3.47-17.81 16.96-6.78-6.47L8 26.09l9.77 9.32.02-.01.63.61L40 15.46z">
//                                                         </path>
//                                                     </g>
//                                                 </g>
//                                             </svg></span><span>Tai nghe</span></label><label className="checkbox_15Mt"><input type="checkbox" /><span className="box_3_lh"><svg viewBox="0 0 48 48" width="1em" height="1em" className="icon_HFMC">
//                                                 <g data-name="Layer 2">
//                                                     <g data-name="Layer 1">
//                                                         <path d="M0 0h48v48H0z" fill="none" />
//                                                         <path d="M40 15.46l-3.63-3.47-17.81 16.96-6.78-6.47L8 26.09l9.77 9.32.02-.01.63.61L40 15.46z">
//                                                         </path>
//                                                     </g>
//                                                 </g>
//                                             </svg></span><span>Thẻ nhớ</span></label><label className="checkbox_15Mt"><input type="checkbox" /><span className="box_3_lh"><svg viewBox="0 0 48 48" width="1em" height="1em" className="icon_HFMC">
//                                                 <g data-name="Layer 2">
//                                                     <g data-name="Layer 1">
//                                                         <path d="M0 0h48v48H0z" fill="none" />
//                                                         <path d="M40 15.46l-3.63-3.47-17.81 16.96-6.78-6.47L8 26.09l9.77 9.32.02-.01.63.61L40 15.46z">
//                                                         </path>
//                                                     </g>
//                                                 </g>
//                                             </svg></span><span>Cáp USB</span></label><label className="checkbox_15Mt"><input type="checkbox" /><span className="box_3_lh"><svg viewBox="0 0 48 48" width="1em" height="1em" className="icon_HFMC">
//                                                 <g data-name="Layer 2">
//                                                     <g data-name="Layer 1">
//                                                         <path d="M0 0h48v48H0z" fill="none" />
//                                                         <path d="M40 15.46l-3.63-3.47-17.81 16.96-6.78-6.47L8 26.09l9.77 9.32.02-.01.63.61L40 15.46z">
//                                                         </path>
//                                                     </g>
//                                                 </g>
//                                             </svg></span><span>Pin</span></label><label className="checkbox_15Mt"><input type="checkbox" /><span className="box_3_lh"><svg viewBox="0 0 48 48" width="1em" height="1em" className="icon_HFMC">
//                                                 <g data-name="Layer 2">
//                                                     <g data-name="Layer 1">
//                                                         <path d="M0 0h48v48H0z" fill="none" />
//                                                         <path d="M40 15.46l-3.63-3.47-17.81 16.96-6.78-6.47L8 26.09l9.77 9.32.02-.01.63.61L40 15.46z">
//                                                         </path>
//                                                     </g>
//                                                 </g>
//                                             </svg></span><span>Sạc Adapter</span></label>
//                                                 <div className="collapse"><label className="checkbox_15Mt"><input type="checkbox" /><span className="box_3_lh"><svg viewBox="0 0 48 48" width="1em" height="1em" className="icon_HFMC">
//                                                     <g data-name="Layer 2">
//                                                         <g data-name="Layer 1">
//                                                             <path d="M0 0h48v48H0z" fill="none" />
//                                                             <path d="M40 15.46l-3.63-3.47-17.81 16.96-6.78-6.47L8 26.09l9.77 9.32.02-.01.63.61L40 15.46z">
//                                                             </path>
//                                                         </g>
//                                                     </g>
//                                                 </svg></span><span>Củ sạc</span></label><label className="checkbox_15Mt"><input type="checkbox" /><span className="box_3_lh"><svg viewBox="0 0 48 48" width="1em" height="1em" className="icon_HFMC">
//                                                     <g data-name="Layer 2">
//                                                         <g data-name="Layer 1">
//                                                             <path d="M0 0h48v48H0z" fill="none" />
//                                                             <path d="M40 15.46l-3.63-3.47-17.81 16.96-6.78-6.47L8 26.09l9.77 9.32.02-.01.63.61L40 15.46z">
//                                                             </path>
//                                                         </g>
//                                                     </g>
//                                                 </svg></span><span>Hộp máy</span></label><label className="checkbox_15Mt"><input type="checkbox" /><span className="box_3_lh"><svg viewBox="0 0 48 48" width="1em" height="1em" className="icon_HFMC">
//                                                     <g data-name="Layer 2">
//                                                         <g data-name="Layer 1">
//                                                             <path d="M0 0h48v48H0z" fill="none" />
//                                                             <path d="M40 15.46l-3.63-3.47-17.81 16.96-6.78-6.47L8 26.09l9.77 9.32.02-.01.63.61L40 15.46z">
//                                                             </path>
//                                                         </g>
//                                                     </g>
//                                                 </svg></span><span>Không tai nghe</span></label><label className="checkbox_15Mt"><input type="checkbox" /><span className="box_3_lh"><svg viewBox="0 0 48 48" width="1em" height="1em" className="icon_HFMC">
//                                                     <g data-name="Layer 2">
//                                                         <g data-name="Layer 1">
//                                                             <path d="M0 0h48v48H0z" fill="none" />
//                                                             <path d="M40 15.46l-3.63-3.47-17.81 16.96-6.78-6.47L8 26.09l9.77 9.32.02-.01.63.61L40 15.46z">
//                                                             </path>
//                                                         </g>
//                                                     </g>
//                                                 </svg></span><span>Đang cập nhật</span></label></div><span className="viewMore_26SD">Xem
//                                                     thêm</span>
//                                             </div>
//                                         </div>
//                                     </div>
//                                     <div className="container_3LZM">
//                                         <div className="header_1L8a active_1-SS">
//                                             <h4 className="title_2Xw8">Tính năng</h4><span className="collapseButton_Z1LE" />
//                                         </div>
//                                         <div className="collapse show">
//                                             <div><label className="checkbox_15Mt"><input type="checkbox" /><span className="box_3_lh"><svg viewBox="0 0 48 48" width="1em" height="1em" className="icon_HFMC">
//                                                 <g data-name="Layer 2">
//                                                     <g data-name="Layer 1">
//                                                         <path d="M0 0h48v48H0z" fill="none" />
//                                                         <path d="M40 15.46l-3.63-3.47-17.81 16.96-6.78-6.47L8 26.09l9.77 9.32.02-.01.63.61L40 15.46z">
//                                                         </path>
//                                                     </g>
//                                                 </g>
//                                             </svg></span><span>Pin khủng (&gt;3000 mAh)</span></label><label className="checkbox_15Mt"><input type="checkbox" /><span className="box_3_lh"><svg viewBox="0 0 48 48" width="1em" height="1em" className="icon_HFMC">
//                                                 <g data-name="Layer 2">
//                                                     <g data-name="Layer 1">
//                                                         <path d="M0 0h48v48H0z" fill="none" />
//                                                         <path d="M40 15.46l-3.63-3.47-17.81 16.96-6.78-6.47L8 26.09l9.77 9.32.02-.01.63.61L40 15.46z">
//                                                         </path>
//                                                     </g>
//                                                 </g>
//                                             </svg></span><span>Chuyên selfie</span></label><label className="checkbox_15Mt"><input type="checkbox" /><span className="box_3_lh"><svg viewBox="0 0 48 48" width="1em" height="1em" className="icon_HFMC">
//                                                 <g data-name="Layer 2">
//                                                     <g data-name="Layer 1">
//                                                         <path d="M0 0h48v48H0z" fill="none" />
//                                                         <path d="M40 15.46l-3.63-3.47-17.81 16.96-6.78-6.47L8 26.09l9.77 9.32.02-.01.63.61L40 15.46z">
//                                                         </path>
//                                                     </g>
//                                                 </g>
//                                             </svg></span><span>Cảm biến vân tay</span></label><label className="checkbox_15Mt"><input type="checkbox" /><span className="box_3_lh"><svg viewBox="0 0 48 48" width="1em" height="1em" className="icon_HFMC">
//                                                 <g data-name="Layer 2">
//                                                     <g data-name="Layer 1">
//                                                         <path d="M0 0h48v48H0z" fill="none" />
//                                                         <path d="M40 15.46l-3.63-3.47-17.81 16.96-6.78-6.47L8 26.09l9.77 9.32.02-.01.63.61L40 15.46z">
//                                                         </path>
//                                                     </g>
//                                                 </g>
//                                             </svg></span><span>Chống va đập</span></label><label className="checkbox_15Mt"><input type="checkbox" /><span className="box_3_lh"><svg viewBox="0 0 48 48" width="1em" height="1em" className="icon_HFMC">
//                                                 <g data-name="Layer 2">
//                                                     <g data-name="Layer 1">
//                                                         <path d="M0 0h48v48H0z" fill="none" />
//                                                         <path d="M40 15.46l-3.63-3.47-17.81 16.96-6.78-6.47L8 26.09l9.77 9.32.02-.01.63.61L40 15.46z">
//                                                         </path>
//                                                     </g>
//                                                 </g>
//                                             </svg></span><span>Dành cho người già</span></label><label className="checkbox_15Mt"><input type="checkbox" /><span className="box_3_lh"><svg viewBox="0 0 48 48" width="1em" height="1em" className="icon_HFMC">
//                                                 <g data-name="Layer 2">
//                                                     <g data-name="Layer 1">
//                                                         <path d="M0 0h48v48H0z" fill="none" />
//                                                         <path d="M40 15.46l-3.63-3.47-17.81 16.96-6.78-6.47L8 26.09l9.77 9.32.02-.01.63.61L40 15.46z">
//                                                         </path>
//                                                     </g>
//                                                 </g>
//                                             </svg></span><span>Màn hình tràn viền</span></label></div>
//                                         </div>
//                                     </div>
//                                     <div className="container_3LZM">
//                                         <div className="header_1L8a active_1-SS">
//                                             <h4 className="title_2Xw8">Tình trạng sản phẩm</h4><span className="collapseButton_Z1LE" />
//                                         </div>
//                                         <div className="collapse show">
//                                             <div><label className="checkbox_15Mt"><input type="checkbox" /><span className="box_3_lh"><svg viewBox="0 0 48 48" width="1em" height="1em" className="icon_HFMC">
//                                                 <g data-name="Layer 2">
//                                                     <g data-name="Layer 1">
//                                                         <path d="M0 0h48v48H0z" fill="none" />
//                                                         <path d="M40 15.46l-3.63-3.47-17.81 16.96-6.78-6.47L8 26.09l9.77 9.32.02-.01.63.61L40 15.46z">
//                                                         </path>
//                                                     </g>
//                                                 </g>
//                                             </svg></span><span>Chưa bung máy</span></label><label className="checkbox_15Mt"><input type="checkbox" /><span className="box_3_lh"><svg viewBox="0 0 48 48" width="1em" height="1em" className="icon_HFMC">
//                                                 <g data-name="Layer 2">
//                                                     <g data-name="Layer 1">
//                                                         <path d="M0 0h48v48H0z" fill="none" />
//                                                         <path d="M40 15.46l-3.63-3.47-17.81 16.96-6.78-6.47L8 26.09l9.77 9.32.02-.01.63.61L40 15.46z">
//                                                         </path>
//                                                     </g>
//                                                 </g>
//                                             </svg></span><span>Còn hộp</span></label><label className="checkbox_15Mt"><input type="checkbox" /><span className="box_3_lh"><svg viewBox="0 0 48 48" width="1em" height="1em" className="icon_HFMC">
//                                                 <g data-name="Layer 2">
//                                                     <g data-name="Layer 1">
//                                                         <path d="M0 0h48v48H0z" fill="none" />
//                                                         <path d="M40 15.46l-3.63-3.47-17.81 16.96-6.78-6.47L8 26.09l9.77 9.32.02-.01.63.61L40 15.46z">
//                                                         </path>
//                                                     </g>
//                                                 </g>
//                                             </svg></span><span>Không còn hộp</span></label><label className="checkbox_15Mt"><input type="checkbox" /><span className="box_3_lh"><svg viewBox="0 0 48 48" width="1em" height="1em" className="icon_HFMC">
//                                                 <g data-name="Layer 2">
//                                                     <g data-name="Layer 1">
//                                                         <path d="M0 0h48v48H0z" fill="none" />
//                                                         <path d="M40 15.46l-3.63-3.47-17.81 16.96-6.78-6.47L8 26.09l9.77 9.32.02-.01.63.61L40 15.46z">
//                                                         </path>
//                                                     </g>
//                                                 </g>
//                                             </svg></span><span>Không trầy xước</span></label><label className="checkbox_15Mt"><input type="checkbox" /><span className="box_3_lh"><svg viewBox="0 0 48 48" width="1em" height="1em" className="icon_HFMC">
//                                                 <g data-name="Layer 2">
//                                                     <g data-name="Layer 1">
//                                                         <path d="M0 0h48v48H0z" fill="none" />
//                                                         <path d="M40 15.46l-3.63-3.47-17.81 16.96-6.78-6.47L8 26.09l9.77 9.32.02-.01.63.61L40 15.46z">
//                                                         </path>
//                                                     </g>
//                                                 </g>
//                                             </svg></span><span>Còn bảo hành chính hãng</span></label><label className="checkbox_15Mt"><input type="checkbox" /><span className="box_3_lh"><svg viewBox="0 0 48 48" width="1em" height="1em" className="icon_HFMC">
//                                                 <g data-name="Layer 2">
//                                                     <g data-name="Layer 1">
//                                                         <path d="M0 0h48v48H0z" fill="none" />
//                                                         <path d="M40 15.46l-3.63-3.47-17.81 16.96-6.78-6.47L8 26.09l9.77 9.32.02-.01.63.61L40 15.46z">
//                                                         </path>
//                                                     </g>
//                                                 </g>
//                                             </svg></span><span>Không đủ phụ kiện</span></label>
//                                                 <div className="collapse"><label className="checkbox_15Mt"><input type="checkbox" /><span className="box_3_lh"><svg viewBox="0 0 48 48" width="1em" height="1em" className="icon_HFMC">
//                                                     <g data-name="Layer 2">
//                                                         <g data-name="Layer 1">
//                                                             <path d="M0 0h48v48H0z" fill="none" />
//                                                             <path d="M40 15.46l-3.63-3.47-17.81 16.96-6.78-6.47L8 26.09l9.77 9.32.02-.01.63.61L40 15.46z">
//                                                             </path>
//                                                         </g>
//                                                     </g>
//                                                 </svg></span><span>Đầy đủ phụ kiện</span></label><label className="checkbox_15Mt"><input type="checkbox" /><span className="box_3_lh"><svg viewBox="0 0 48 48" width="1em" height="1em" className="icon_HFMC">
//                                                     <g data-name="Layer 2">
//                                                         <g data-name="Layer 1">
//                                                             <path d="M0 0h48v48H0z" fill="none" />
//                                                             <path d="M40 15.46l-3.63-3.47-17.81 16.96-6.78-6.47L8 26.09l9.77 9.32.02-.01.63.61L40 15.46z">
//                                                             </path>
//                                                         </g>
//                                                     </g>
//                                                 </svg></span><span>Có trầy xước</span></label><label className="checkbox_15Mt"><input type="checkbox" /><span className="box_3_lh"><svg viewBox="0 0 48 48" width="1em" height="1em" className="icon_HFMC">
//                                                     <g data-name="Layer 2">
//                                                         <g data-name="Layer 1">
//                                                             <path d="M0 0h48v48H0z" fill="none" />
//                                                             <path d="M40 15.46l-3.63-3.47-17.81 16.96-6.78-6.47L8 26.09l9.77 9.32.02-.01.63.61L40 15.46z">
//                                                             </path>
//                                                         </g>
//                                                     </g>
//                                                 </svg></span><span>Trầy xước ít</span></label><label className="checkbox_15Mt"><input type="checkbox" /><span className="box_3_lh"><svg viewBox="0 0 48 48" width="1em" height="1em" className="icon_HFMC">
//                                                     <g data-name="Layer 2">
//                                                         <g data-name="Layer 1">
//                                                             <path d="M0 0h48v48H0z" fill="none" />
//                                                             <path d="M40 15.46l-3.63-3.47-17.81 16.96-6.78-6.47L8 26.09l9.77 9.32.02-.01.63.61L40 15.46z">
//                                                             </path>
//                                                         </g>
//                                                     </g>
//                                                 </svg></span><span>Trầy xước nhiều</span></label></div><span className="viewMore_26SD">Xem
//                                                     thêm</span>
//                                             </div>
//                                         </div>
//                                     </div>
//                                     <div className="container_3LZM">
//                                         <div className="header_1L8a active_1-SS">
//                                             <h4 className="title_2Xw8">Kết nối mạng</h4><span className="collapseButton_Z1LE" />
//                                         </div>
//                                         <div className="collapse show">
//                                             <div><label className="checkbox_15Mt"><input type="checkbox" /><span className="box_3_lh"><svg viewBox="0 0 48 48" width="1em" height="1em" className="icon_HFMC">
//                                                 <g data-name="Layer 2">
//                                                     <g data-name="Layer 1">
//                                                         <path d="M0 0h48v48H0z" fill="none" />
//                                                         <path d="M40 15.46l-3.63-3.47-17.81 16.96-6.78-6.47L8 26.09l9.77 9.32.02-.01.63.61L40 15.46z">
//                                                         </path>
//                                                     </g>
//                                                 </g>
//                                             </svg></span><span>Wifi</span></label><label className="checkbox_15Mt"><input type="checkbox" /><span className="box_3_lh"><svg viewBox="0 0 48 48" width="1em" height="1em" className="icon_HFMC">
//                                                 <g data-name="Layer 2">
//                                                     <g data-name="Layer 1">
//                                                         <path d="M0 0h48v48H0z" fill="none" />
//                                                         <path d="M40 15.46l-3.63-3.47-17.81 16.96-6.78-6.47L8 26.09l9.77 9.32.02-.01.63.61L40 15.46z">
//                                                         </path>
//                                                     </g>
//                                                 </g>
//                                             </svg></span><span>2G</span></label><label className="checkbox_15Mt"><input type="checkbox" /><span className="box_3_lh"><svg viewBox="0 0 48 48" width="1em" height="1em" className="icon_HFMC">
//                                                 <g data-name="Layer 2">
//                                                     <g data-name="Layer 1">
//                                                         <path d="M0 0h48v48H0z" fill="none" />
//                                                         <path d="M40 15.46l-3.63-3.47-17.81 16.96-6.78-6.47L8 26.09l9.77 9.32.02-.01.63.61L40 15.46z">
//                                                         </path>
//                                                     </g>
//                                                 </g>
//                                             </svg></span><span>3G</span></label><label className="checkbox_15Mt"><input type="checkbox" /><span className="box_3_lh"><svg viewBox="0 0 48 48" width="1em" height="1em" className="icon_HFMC">
//                                                 <g data-name="Layer 2">
//                                                     <g data-name="Layer 1">
//                                                         <path d="M0 0h48v48H0z" fill="none" />
//                                                         <path d="M40 15.46l-3.63-3.47-17.81 16.96-6.78-6.47L8 26.09l9.77 9.32.02-.01.63.61L40 15.46z">
//                                                         </path>
//                                                     </g>
//                                                 </g>
//                                             </svg></span><span>4G</span></label></div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="resultPanel_25EW">
//                                 <div className="topResultPanel_2Qbf">
//                                     <div className="top_1_lK">
//                                         <nav className="breadcrumb_3hMt">
//                                             <ol className="breadcrumb_3hMt">
//                                                 <li className="item_1WT2"><a href="https://www.sendo.vn/" className="text_134z" to="https://www.sendo.vn/">Sendo.vn</a></li>
//                                                 <li className="item_1WT2"><span className="text_134z undefined">Điện thoại - Máy tính bảng</span></li>
//                                             </ol>
//                                         </nav>
//                                         <div className="titleBox_2Yyn">
//                                             <h1>Điện thoại - Máy tính bảng</h1><span className="productCount_N09r">(Tìm thấy hơn&nbsp;<strong className="text-primary">10.000</strong>&nbsp;sản phẩm)</span>
//                                         </div>
//                                     </div>
//                                     <div className="verticalLine_3Nu0" />
//                                     <div className="bottom_vzQF">
//                                         <div>
//                                             <div className="container_iKiQ"><label className="checkbox_15Mt checkbox_1WPa"><input type="checkbox" /><span className="box_3_lh"><svg viewBox="0 0 48 48" width="1em" height="1em" className="icon_HFMC">
//                                                 <g data-name="Layer 2">
//                                                     <g data-name="Layer 1">
//                                                         <path d="M0 0h48v48H0z" fill="none" />
//                                                         <path d="M40 15.46l-3.63-3.47-17.81 16.96-6.78-6.47L8 26.09l9.77 9.32.02-.01.63.61L40 15.46z">
//                                                         </path>
//                                                     </g>
//                                                 </g>
//                                             </svg></span>Shop+</label><label className="checkbox_15Mt checkbox_1WPa"><input type="checkbox" /><span className="box_3_lh"><svg viewBox="0 0 48 48" width="1em" height="1em" className="icon_HFMC">
//                                                 <g data-name="Layer 2">
//                                                     <g data-name="Layer 1">
//                                                         <path d="M0 0h48v48H0z" fill="none" />
//                                                         <path d="M40 15.46l-3.63-3.47-17.81 16.96-6.78-6.47L8 26.09l9.77 9.32.02-.01.63.61L40 15.46z">
//                                                         </path>
//                                                     </g>
//                                                 </g>
//                                             </svg></span>Flash Sale</label><label className="checkbox_15Mt checkbox_1WPa"><input type="checkbox" /><span className="box_3_lh"><svg viewBox="0 0 48 48" width="1em" height="1em" className="icon_HFMC">
//                                                 <g data-name="Layer 2">
//                                                     <g data-name="Layer 1">
//                                                         <path d="M0 0h48v48H0z" fill="none" />
//                                                         <path d="M40 15.46l-3.63-3.47-17.81 16.96-6.78-6.47L8 26.09l9.77 9.32.02-.01.63.61L40 15.46z">
//                                                         </path>
//                                                     </g>
//                                                 </g>
//                                             </svg></span>Shop uy tín</label><label className="checkbox_15Mt checkbox_1WPa"><input type="checkbox" /><span className="box_3_lh"><svg viewBox="0 0 48 48" width="1em" height="1em" className="icon_HFMC">
//                                                 <g data-name="Layer 2">
//                                                     <g data-name="Layer 1">
//                                                         <path d="M0 0h48v48H0z" fill="none" />
//                                                         <path d="M40 15.46l-3.63-3.47-17.81 16.96-6.78-6.47L8 26.09l9.77 9.32.02-.01.63.61L40 15.46z">
//                                                         </path>
//                                                     </g>
//                                                 </g>
//                                             </svg></span>Freeship</label></div>
//                                         </div>
//                                         <div>
//                                             <ul className="sortList_1uZ6">
//                                                 <li className="active_JOI-">Shop Đề cử</li>
//                                                 <li className>Bán chạy</li>
//                                                 <div className="dropdown_13Im"><button className="dropbtn_m0XL">Giá thấp</button>
//                                                     <div className="dropdownContent_lZ4_" style={{ zIndex: 2 }}>
//                                                         <li className>Giá thấp</li>
//                                                         <li className>Giá cao</li>
//                                                         <li className>Lượt yêu thích</li>
//                                                         <li className>Đánh giá tốt</li>
//                                                     </div>
//                                                 </div>
//                                             </ul>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div className="categoryLink_1cxz">
//                                     <div className="swiperCateLink_2ECh">
//                                         <div id="sd-categories-SwiperCateLink" className="swiper-container swiper-container-virtual swiper-container-initialized swiper-container-horizontal">
//                                             <div className="swiper-wrapper" style={{ transform: 'translate3d(0px, 0px, 0px)' }}>
//                                                 <div className="swiper-slide" style={{ left: '0px', width: '116.842px' }}>
//                                                     <div className="boxCateChild_RqeA"><a className="item_3U0R" href="https://www.sendo.vn/thiet-bi-di-dong/" style={{ backgroundColor: 'rgb(91, 189, 184)' }}><img src="./Thế Giới Di Động Samsung, Iphone, Máy Tính Bảng Xách Tay Giá Rẻ _ Sendo.vn_files/vhKX3UdskyedyyKn9K8M_simg_3a7818_100x100_maxb.jpg" className="itemImg_3DJD lazyloaded" data-src="//media3.scdn.vn/img4/2020/01_07/vhKX3UdskyedyyKn9K8M_simg_3a7818_100x100_maxb.jpg" alt="Điện thoại mới" /><span className="itemTitle_1aVS">Điện thoại mới</span></a></div>
//                                                 </div>
//                                                 <div className="swiper-slide" style={{ left: '0px', width: '116.842px' }}>
//                                                     <div className="boxCateChild_RqeA"><a className="item_3U0R" href="https://www.sendo.vn/may-tinh-bang/" style={{ backgroundColor: 'rgb(148, 193, 99)' }}><img src="./Thế Giới Di Động Samsung, Iphone, Máy Tính Bảng Xách Tay Giá Rẻ _ Sendo.vn_files/2338_simg_3a7818_100x100_maxb.jpg" className="itemImg_3DJD lazyloaded" data-src="//media3.scdn.vn/images/ecom/category/2338_simg_3a7818_100x100_maxb.jpg" alt="Máy tính bảng mới" /><span className="itemTitle_1aVS">Máy tính bảng mới</span></a></div>
//                                                 </div>
//                                                 <div className="swiper-slide" style={{ left: '0px', width: '116.842px' }}>
//                                                     <div className="boxCateChild_RqeA"><a className="item_3U0R" href="https://www.sendo.vn/may-da-qua-su-dung/" style={{ backgroundColor: 'rgb(196, 190, 76)' }}><img src="./Thế Giới Di Động Samsung, Iphone, Máy Tính Bảng Xách Tay Giá Rẻ _ Sendo.vn_files/2339_simg_3a7818_100x100_maxb.jpg" className="itemImg_3DJD lazyloaded" data-src="//media3.scdn.vn/images/ecom/category/2339_simg_3a7818_100x100_maxb.jpg" alt="Điện thoại cũ" /><span className="itemTitle_1aVS">Điện thoại cũ</span></a></div>
//                                                 </div>
//                                                 <div className="swiper-slide" style={{ left: '0px', width: '116.842px' }}>
//                                                     <div className="boxCateChild_RqeA"><a className="item_3U0R" href="https://www.sendo.vn/may-tinh-bang-cu/" style={{ backgroundColor: 'rgb(225, 184, 87)' }}><img src="./Thế Giới Di Động Samsung, Iphone, Máy Tính Bảng Xách Tay Giá Rẻ _ Sendo.vn_files/2922_simg_3a7818_100x100_maxb.jpg" className="itemImg_3DJD lazyloaded" data-src="//media3.scdn.vn/images/ecom/category/2922_simg_3a7818_100x100_maxb.jpg" alt="Máy tính bảng cũ" /><span className="itemTitle_1aVS">Máy tính bảng cũ</span></a></div>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div />
//                                 <div aria-label="grid" aria-readonly="true" className="ReactVirtualized__Grid ReactVirtualized__List" role="grid" tabIndex={0} style={{ boxSizing: 'border-box', direction: 'ltr', height: 'auto', position: 'relative', width: '1110px', willChange: 'transform', overflow: 'hidden' }}>
//                                     <div className="ReactVirtualized__Grid__innerScrollContainer" role style={{ width: 'auto', height: '4646.4px', maxWidth: '1110px', maxHeight: '4646.4px', overflow: 'hidden', position: 'relative' }}>
//                                         <div style={{ height: '387.2px', left: '0px', position: 'absolute', top: '0px', width: '100%' }} data-os-handler-attached="true">
//                                             <div className="list_1OKC grid5_3JhR"><a aria-label="item_3x07" href="https://www.sendo.vn/dien-thoai-vivo-y20-71086125.html?source_block_id=listing_products&source_info=desktop2_60___session_key___8b46e440-dd86-441d-bd3a-b27f88cb1014_-5_algo13_0_1_2_-1&source_page_id=cate1_vasup_desc" className="item_3x07">
//                                                 <div className="card_3Vc8">
//                                                     <div className="thumbnail_3tZG">
//                                                         <figure className="image_3mnm"><img src="./Thế Giới Di Động Samsung, Iphone, Máy Tính Bảng Xách Tay Giá Rẻ _ Sendo.vn_files/m2mJt7k6J2MMeKsejIaQ_simg_de2fe0_250x250_maxb.jpg" className=" lazyloaded" data-src="//media3.scdn.vn/img4/2021/12_31/m2mJt7k6J2MMeKsejIaQ_simg_de2fe0_250x250_maxb.jpg" />
//                                                         </figure>
//                                                         <div className="groupDiscount_199p" />
//                                                     </div>
//                                                     <div className="caption_2Jn3">
//                                                         <div className="promBanner_3cxp promList_2Jno" />
//                                                         <h3 className="productName_u171"><span className="truncateMedium_Tofh">Điện Thoại Vivo Y20</span>
//                                                         </h3>
//                                                         <div className="productPrice_1RFY"><strong className="currentPrice_2hr9">3.500.000đ</strong></div>
//                                                         <div className="info_3lhu">
//                                                             <div />
//                                                         </div>
//                                                         <div className="footer_2CrX"><span className="shopName_4r40"><span className="textSmall_hRbk textOverflow_3gco">Tiger Storee</span></span><span className="textSmall_hRbk textOverflow_3gco locationName_3SN5">Kiên Giang</span></div>
//                                                     </div>
//                                                 </div>
//                                             </a><a aria-label="item_3x07" href="https://www.sendo.vn/may-tinh-bang-69825081.html?source_block_id=listing_products&source_info=desktop2_60___session_key___8b46e440-dd86-441d-bd3a-b27f88cb1014_-5_algo13_0_2_2_-1&source_page_id=cate1_vasup_desc" className="item_3x07">
//                                                     <div className="card_3Vc8">
//                                                         <div className="thumbnail_3tZG">
//                                                             <figure className="image_3mnm"><img src="./Thế Giới Di Động Samsung, Iphone, Máy Tính Bảng Xách Tay Giá Rẻ _ Sendo.vn_files/7K4atflukcOMWwnljpIF_simg_de2fe0_250x250_maxb.jpg" className=" lazyloaded" data-src="//media3.scdn.vn/img4/2021/12_07/7K4atflukcOMWwnljpIF_simg_de2fe0_250x250_maxb.jpg" />
//                                                             </figure>
//                                                             <div className="groupDiscount_199p" />
//                                                         </div>
//                                                         <div className="caption_2Jn3">
//                                                             <div className="promBanner_3cxp promList_2Jno" />
//                                                             <h3 className="productName_u171"><span className="truncateMedium_Tofh">máy tính bảng</span></h3>
//                                                             <div className="productPrice_1RFY"><strong className="currentPrice_2hr9">1.100.000đ</strong></div>
//                                                             <div className="info_3lhu">
//                                                                 <div />
//                                                             </div>
//                                                             <div className="footer_2CrX"><span className="shopName_4r40"><span className="textSmall_hRbk textOverflow_3gco">66ANhaTrang</span></span><span className="textSmall_hRbk textOverflow_3gco locationName_3SN5">Khánh Hòa</span></div>
//                                                         </div>
//                                                     </div>
//                                                 </a><a aria-label="item_3x07" href="https://www.sendo.vn/ipad-4-quoc-te-16gb-wifi-bao-hanh-6-thang-sieu-dep-sieu-muot-tang-bao-da-cap-sac-bao-hanh-6-thang-1-doi-1-tai-nha-trong-30-ngay-29392885.html?source_block_id=listing_products&source_info=desktop2_60___session_key___8b46e440-dd86-441d-bd3a-b27f88cb1014_-5_algo13_0_3_2_-1&source_page_id=cate1_vasup_desc" className="item_3x07">
//                                                     <div className="card_3Vc8">
//                                                         <div className="thumbnail_3tZG">
//                                                             <figure className="image_3mnm"><img src="./Thế Giới Di Động Samsung, Iphone, Máy Tính Bảng Xách Tay Giá Rẻ _ Sendo.vn_files/avY2KPh0ruTWjGZY6R4J_simg_de2fe0_250x250_maxb.jpg" className=" lazyloaded" data-src="//media3.scdn.vn/img4/2021/10_25/avY2KPh0ruTWjGZY6R4J_simg_de2fe0_250x250_maxb.jpg" />
//                                                             </figure>
//                                                             <div className="groupDiscount_199p" /><span className="videoBadge_1jgE"><img src="./Thế Giới Di Động Samsung, Iphone, Máy Tính Bảng Xách Tay Giá Rẻ _ Sendo.vn_files/Ev3MiuvzcYkH2xHWiVbE.png" alt="has-video" /></span>
//                                                         </div>
//                                                         <div className="caption_2Jn3">
//                                                             <div className="promBanner_3cxp promList_2Jno" />
//                                                             <h3 className="productName_u171"><span className="truncateMedium_Tofh">iPad 4 Quốc tế 16gb wifi bảo
//                                                                 hành 6 tháng siêu đẹp siêu mượt Tặng bao da cáp sạc bảo hành 6 tháng 1 đổi 1 tại nhà
//                                                                 trong 30 ngày</span></h3>
//                                                             <div className="productPrice_1RFY"><strong className="currentPrice_2hr9">3.550.000đ -
//                                                                 3.950.000đ</strong></div>
//                                                             <div className="info_3lhu">
//                                                                 <div>
//                                                                     <div className="stars_l6c- star17_3WUW small_1aJr" /><span className="ratingTotal_2Msc">(5)</span>
//                                                                 </div><span className="orderCount_3rDn"><svg width="1em" height="1em" viewBox="0 0 32 32" className="icon_Mf-x iconSmall_2eXS">
//                                                                     <path d="M27.292 15.496l-10.8-10.8A2.378 2.378 0 0014.808 4H6.4C5.08 4 4 5.08 4 6.4v8.4c0 .66.264 1.26.708 1.704l10.8 10.8A2.385 2.385 0 0017.2 28h.012c.658 0 1.253-.271 1.679-.708l8.4-8.4a2.342 2.342 0 00.708-1.68v-.013.001c0-.66-.276-1.272-.708-1.704zM8.2 10c-.996 0-1.8-.804-1.8-1.8s.804-1.8 1.8-1.8 1.8.804 1.8 1.8S9.196 10 8.2 10z">
//                                                                     </path>
//                                                                 </svg><span className="textSmall_hRbk">42</span></span>
//                                                             </div>
//                                                             <div className="footer_2CrX"><span className="shopName_4r40"><span className="textSmall_hRbk textOverflow_3gco">MiApple</span></span><span className="textSmall_hRbk textOverflow_3gco locationName_3SN5">HN</span></div>
//                                                         </div>
//                                                     </div>
//                                                 </a><a aria-label="item_3x07" href="https://www.sendo.vn/hang-chinh-hang-may-tinh-bang-ipad-mini-2-chinh-hang-quoc-te-37885201.html?source_block_id=listing_products&source_info=desktop2_60___session_key___8b46e440-dd86-441d-bd3a-b27f88cb1014_-5_algo13_0_4_2_-1&source_page_id=cate1_vasup_desc" className="item_3x07">
//                                                     <div className="card_3Vc8">
//                                                         <div className="thumbnail_3tZG">
//                                                             <figure className="image_3mnm"><img src="./Thế Giới Di Động Samsung, Iphone, Máy Tính Bảng Xách Tay Giá Rẻ _ Sendo.vn_files/5DXoSBytnqMG6gsQ3NUC_simg_de2fe0_250x250_maxb.jpg" className=" lazyloaded" data-src="//media3.scdn.vn/img4/2021/10_25/5DXoSBytnqMG6gsQ3NUC_simg_de2fe0_250x250_maxb.jpg" />
//                                                             </figure>
//                                                             <div className="groupDiscount_199p"><span className="discountBadge_1GZz">28%</span></div><span className="videoBadge_1jgE"><img src="./Thế Giới Di Động Samsung, Iphone, Máy Tính Bảng Xách Tay Giá Rẻ _ Sendo.vn_files/Ev3MiuvzcYkH2xHWiVbE.png" alt="has-video" /></span>
//                                                         </div>
//                                                         <div className="caption_2Jn3">
//                                                             <div className="promBanner_3cxp promList_2Jno" />
//                                                             <h3 className="productName_u171"><span className="truncateMedium_Tofh">[Hàng chính hãng] Máy tính
//                                                                 bảng ipad mini 2 chính hãng quốc tế</span></h3>
//                                                             <div className="productPrice_1RFY"><strong className="currentPrice_2hr9">2.650.000đ -
//                                                                 3.550.000đ</strong><strong className="oldPrice_itl0">4.650.000đ</strong></div>
//                                                             <div className="info_3lhu">
//                                                                 <div>
//                                                                     <div className="stars_l6c- star20_1zW7 small_1aJr" /><span className="ratingTotal_2Msc">(1)</span>
//                                                                 </div><span className="orderCount_3rDn"><svg width="1em" height="1em" viewBox="0 0 32 32" className="icon_Mf-x iconSmall_2eXS">
//                                                                     <path d="M27.292 15.496l-10.8-10.8A2.378 2.378 0 0014.808 4H6.4C5.08 4 4 5.08 4 6.4v8.4c0 .66.264 1.26.708 1.704l10.8 10.8A2.385 2.385 0 0017.2 28h.012c.658 0 1.253-.271 1.679-.708l8.4-8.4a2.342 2.342 0 00.708-1.68v-.013.001c0-.66-.276-1.272-.708-1.704zM8.2 10c-.996 0-1.8-.804-1.8-1.8s.804-1.8 1.8-1.8 1.8.804 1.8 1.8S9.196 10 8.2 10z">
//                                                                     </path>
//                                                                 </svg><span className="textSmall_hRbk">34</span></span>
//                                                             </div>
//                                                             <div className="footer_2CrX"><span className="shopName_4r40"><span className="textSmall_hRbk textOverflow_3gco">MiApple</span></span><span className="textSmall_hRbk textOverflow_3gco locationName_3SN5">HN</span></div>
//                                                         </div>
//                                                     </div>
//                                                 </a><a aria-label="item_3x07" href="https://www.sendo.vn/dien-thoai-oppo-f1s-a59-man-hinh-sieu-lon-gia-hop-ly-bao-hanh-6-thang-tang-kem-cu-cap-op-70644321.html?source_block_id=listing_products&source_info=desktop2_60___session_key___8b46e440-dd86-441d-bd3a-b27f88cb1014_-5_algo13_0_5_2_-1&source_page_id=cate1_vasup_desc" className="item_3x07">
//                                                     <div className="card_3Vc8">
//                                                         <div className="thumbnail_3tZG">
//                                                             <figure className="image_3mnm"><img src="./Thế Giới Di Động Samsung, Iphone, Máy Tính Bảng Xách Tay Giá Rẻ _ Sendo.vn_files/e9MSVbQJ7OEe0fv0AerQ_simg_de2fe0_250x250_maxb.jpg" className=" lazyloaded" data-src="//media3.scdn.vn/img4/2021/12_20/e9MSVbQJ7OEe0fv0AerQ_simg_de2fe0_250x250_maxb.jpg" />
//                                                             </figure>
//                                                             <div className="groupDiscount_199p" />
//                                                         </div>
//                                                         <div className="caption_2Jn3">
//                                                             <div className="promBanner_3cxp promList_2Jno" />
//                                                             <h3 className="productName_u171"><span className="truncateMedium_Tofh">Điện thoại Oppo F1s A59 màn
//                                                                 hình siêu lớn giá hợp lý bảo hành 6 tháng tặng kèm củ cáp ốp</span></h3>
//                                                             <div className="productPrice_1RFY"><strong className="currentPrice_2hr9">1.390.000đ</strong></div>
//                                                             <div className="info_3lhu">
//                                                                 <div /><span className="orderCount_3rDn"><svg width="1em" height="1em" viewBox="0 0 32 32" className="icon_Mf-x iconSmall_2eXS">
//                                                                     <path d="M27.292 15.496l-10.8-10.8A2.378 2.378 0 0014.808 4H6.4C5.08 4 4 5.08 4 6.4v8.4c0 .66.264 1.26.708 1.704l10.8 10.8A2.385 2.385 0 0017.2 28h.012c.658 0 1.253-.271 1.679-.708l8.4-8.4a2.342 2.342 0 00.708-1.68v-.013.001c0-.66-.276-1.272-.708-1.704zM8.2 10c-.996 0-1.8-.804-1.8-1.8s.804-1.8 1.8-1.8 1.8.804 1.8 1.8S9.196 10 8.2 10z">
//                                                                     </path>
//                                                                 </svg><span className="textSmall_hRbk">19</span></span>
//                                                             </div>
//                                                             <div className="footer_2CrX"><span className="shopName_4r40"><span className="textSmall_hRbk textOverflow_3gco">MiApple</span></span><span className="textSmall_hRbk textOverflow_3gco locationName_3SN5">HN</span></div>
//                                                         </div>
//                                                     </div>
//                                                 </a></div>
//                                         </div>
//                                         <div style={{ height: '387.2px', left: '0px', position: 'absolute', top: '387.2px', width: '100%' }}>
//                                             <div className="list_1OKC grid5_3JhR"><a aria-label="item_3x07" href="https://www.sendo.vn/may-tinh-bang-ipad-air-1-quoc-te-chinh-hang-bao-hanh-6-thang-1-doi-1-yen-tam-mua-sam-tai-miapple-69708965.html?source_block_id=listing_products&source_info=desktop2_60___session_key___8b46e440-dd86-441d-bd3a-b27f88cb1014_-5_algo13_0_6_2_-1&source_page_id=cate1_vasup_desc" className="item_3x07">
//                                                 <div className="card_3Vc8">
//                                                     <div className="thumbnail_3tZG">
//                                                         <figure className="image_3mnm"><img src="./Thế Giới Di Động Samsung, Iphone, Máy Tính Bảng Xách Tay Giá Rẻ _ Sendo.vn_files/9Idv9WDvV4ks7LaOvpmC_simg_de2fe0_250x250_maxb.png" className=" lazyloaded" data-src="//media3.scdn.vn/img4/2022/03_30/9Idv9WDvV4ks7LaOvpmC_simg_de2fe0_250x250_maxb.png" />
//                                                         </figure>
//                                                         <div className="groupDiscount_199p"><span className="discountBadge_1GZz">9%</span></div>
//                                                     </div>
//                                                     <div className="caption_2Jn3">
//                                                         <div className="promBanner_3cxp promList_2Jno" />
//                                                         <h3 className="productName_u171"><span className="truncateMedium_Tofh">Máy tính bảng iPad air 1 quốc
//                                                             tế chính hãng bảo hành 6 tháng 1 đổi 1 yên tâm mua sắm tại Miapple</span></h3>
//                                                         <div className="productPrice_1RFY"><strong className="currentPrice_2hr9">3.390.000đ -
//                                                             4.190.000đ</strong><strong className="oldPrice_itl0">4.390.000đ</strong></div>
//                                                         <div className="info_3lhu">
//                                                             <div>
//                                                                 <div className="stars_l6c- star20_1zW7 small_1aJr" /><span className="ratingTotal_2Msc">(1)</span>
//                                                             </div><span className="orderCount_3rDn"><svg width="1em" height="1em" viewBox="0 0 32 32" className="icon_Mf-x iconSmall_2eXS">
//                                                                 <path d="M27.292 15.496l-10.8-10.8A2.378 2.378 0 0014.808 4H6.4C5.08 4 4 5.08 4 6.4v8.4c0 .66.264 1.26.708 1.704l10.8 10.8A2.385 2.385 0 0017.2 28h.012c.658 0 1.253-.271 1.679-.708l8.4-8.4a2.342 2.342 0 00.708-1.68v-.013.001c0-.66-.276-1.272-.708-1.704zM8.2 10c-.996 0-1.8-.804-1.8-1.8s.804-1.8 1.8-1.8 1.8.804 1.8 1.8S9.196 10 8.2 10z">
//                                                                 </path>
//                                                             </svg><span className="textSmall_hRbk">29</span></span>
//                                                         </div>
//                                                         <div className="footer_2CrX"><span className="shopName_4r40"><span className="textSmall_hRbk textOverflow_3gco">MiApple</span></span><span className="textSmall_hRbk textOverflow_3gco locationName_3SN5">HN</span></div>
//                                                     </div>
//                                                 </div>
//                                             </a><a aria-label="item_3x07" href="https://www.sendo.vn/dien-thoai-oppo-a37m-ram-2g-bo-nho-16g-man-hinh-5inch-nho-gon-choi-game-xem-youtube-thoai-mai-sac-net-70644494.html?source_block_id=listing_products&source_info=desktop2_60___session_key___8b46e440-dd86-441d-bd3a-b27f88cb1014_-5_algo13_0_7_2_-1&source_page_id=cate1_vasup_desc" className="item_3x07">
//                                                     <div className="card_3Vc8">
//                                                         <div className="thumbnail_3tZG">
//                                                             <figure className="image_3mnm"><img src="./Thế Giới Di Động Samsung, Iphone, Máy Tính Bảng Xách Tay Giá Rẻ _ Sendo.vn_files/9H0EG4AXqjCthrwV9BPx_simg_de2fe0_250x250_maxb.jpg" className=" lazyloaded" data-src="//media3.scdn.vn/img4/2021/12_20/9H0EG4AXqjCthrwV9BPx_simg_de2fe0_250x250_maxb.jpg" />
//                                                             </figure>
//                                                             <div className="groupDiscount_199p" />
//                                                         </div>
//                                                         <div className="caption_2Jn3">
//                                                             <div className="promBanner_3cxp promList_2Jno" />
//                                                             <h3 className="productName_u171"><span className="truncateMedium_Tofh">ĐIỆN THOẠI OPPO A37m Ram 2G
//                                                                 Bộ Nhớ 16G Màn Hình 5inch Nhỏ Gọn Chơi Game Xem Youtube Thoải Mái Sắc Nét</span></h3>
//                                                             <div className="productPrice_1RFY"><strong className="currentPrice_2hr9">1.090.000đ</strong></div>
//                                                             <div className="info_3lhu">
//                                                                 <div /><span className="orderCount_3rDn"><svg width="1em" height="1em" viewBox="0 0 32 32" className="icon_Mf-x iconSmall_2eXS">
//                                                                     <path d="M27.292 15.496l-10.8-10.8A2.378 2.378 0 0014.808 4H6.4C5.08 4 4 5.08 4 6.4v8.4c0 .66.264 1.26.708 1.704l10.8 10.8A2.385 2.385 0 0017.2 28h.012c.658 0 1.253-.271 1.679-.708l8.4-8.4a2.342 2.342 0 00.708-1.68v-.013.001c0-.66-.276-1.272-.708-1.704zM8.2 10c-.996 0-1.8-.804-1.8-1.8s.804-1.8 1.8-1.8 1.8.804 1.8 1.8S9.196 10 8.2 10z">
//                                                                     </path>
//                                                                 </svg><span className="textSmall_hRbk">2</span></span>
//                                                             </div>
//                                                             <div className="footer_2CrX"><span className="shopName_4r40"><span className="textSmall_hRbk textOverflow_3gco">MiApple</span></span><span className="textSmall_hRbk textOverflow_3gco locationName_3SN5">HN</span></div>
//                                                         </div>
//                                                     </div>
//                                                 </a><a aria-label="item_3x07" href="https://www.sendo.vn/chuot-may-tinh-khong-day-gn-220-70285253.html?source_block_id=listing_products&source_info=desktop2_60___session_key___8b46e440-dd86-441d-bd3a-b27f88cb1014_-5_algo13_0_8_2_-1&source_page_id=cate1_vasup_desc" className="item_3x07">
//                                                     <div className="card_3Vc8">
//                                                         <div className="thumbnail_3tZG">
//                                                             <figure className="image_3mnm"><img src="./Thế Giới Di Động Samsung, Iphone, Máy Tính Bảng Xách Tay Giá Rẻ _ Sendo.vn_files/9xHnz7iX58KykVoGnJ6I_simg_de2fe0_250x250_maxb.jpg" className=" lazyloaded" data-src="//media3.scdn.vn/img4/2021/12_14/9xHnz7iX58KykVoGnJ6I_simg_de2fe0_250x250_maxb.jpg" />
//                                                             </figure>
//                                                             <div className="groupDiscount_199p" />
//                                                         </div>
//                                                         <div className="caption_2Jn3">
//                                                             <div className="promBanner_3cxp promList_2Jno" />
//                                                             <h3 className="productName_u171"><span className="truncateMedium_Tofh">Chuột Máy Tính Không dây GN
//                                                                 220</span></h3>
//                                                             <div className="productPrice_1RFY"><strong className="currentPrice_2hr9">180.000đ</strong></div>
//                                                             <div className="info_3lhu">
//                                                                 <div />
//                                                             </div>
//                                                             <div className="footer_2CrX"><span className="shopName_4r40"><span className="textSmall_hRbk textOverflow_3gco">Store Đồ Máy Tính</span></span><span className="textSmall_hRbk textOverflow_3gco locationName_3SN5">Hải Dương</span></div>
//                                                         </div>
//                                                     </div>
//                                                 </a><a aria-label="item_3x07" href="https://www.sendo.vn/dien-thoai-dang-su-dung-69825075.html?source_block_id=listing_products&source_info=desktop2_60___session_key___8b46e440-dd86-441d-bd3a-b27f88cb1014_-5_algo13_0_9_2_-1&source_page_id=cate1_vasup_desc" className="item_3x07">
//                                                     <div className="card_3Vc8">
//                                                         <div className="thumbnail_3tZG">
//                                                             <figure className="image_3mnm"><img src="./Thế Giới Di Động Samsung, Iphone, Máy Tính Bảng Xách Tay Giá Rẻ _ Sendo.vn_files/4hzQRdtingfACKBeiZ3I_simg_de2fe0_250x250_maxb.jpg" className=" lazyloaded" data-src="//media3.scdn.vn/img4/2021/12_07/4hzQRdtingfACKBeiZ3I_simg_de2fe0_250x250_maxb.jpg" />
//                                                             </figure>
//                                                             <div className="groupDiscount_199p" />
//                                                         </div>
//                                                         <div className="caption_2Jn3">
//                                                             <div className="promBanner_3cxp promList_2Jno" />
//                                                             <h3 className="productName_u171"><span className="truncateMedium_Tofh">điện thoại đang sử
//                                                                 dụng</span></h3>
//                                                             <div className="productPrice_1RFY"><strong className="currentPrice_2hr9">2.500.000đ</strong></div>
//                                                             <div className="info_3lhu">
//                                                                 <div />
//                                                             </div>
//                                                             <div className="footer_2CrX"><span className="shopName_4r40"><span className="textSmall_hRbk textOverflow_3gco">66ANhaTrang</span></span><span className="textSmall_hRbk textOverflow_3gco locationName_3SN5">Khánh Hòa</span></div>
//                                                         </div>
//                                                     </div>
//                                                 </a><a aria-label="item_3x07" href="https://www.sendo.vn/lg-g7-lg-g7-thinq-28498316.html?source_block_id=listing_products&source_info=desktop2_60___session_key___8b46e440-dd86-441d-bd3a-b27f88cb1014_-5_algo13_0_10_2_-1&source_page_id=cate1_vasup_desc" className="item_3x07">
//                                                     <div className="card_3Vc8">
//                                                         <div className="thumbnail_3tZG">
//                                                             <figure className="image_3mnm"><img src="./Thế Giới Di Động Samsung, Iphone, Máy Tính Bảng Xách Tay Giá Rẻ _ Sendo.vn_files/CVqXcnxnNHhTaKJQMRPW_simg_de2fe0_250x250_maxb.jpg" className=" lazyloaded" data-src="//media3.scdn.vn/img4/2020/04_10/CVqXcnxnNHhTaKJQMRPW_simg_de2fe0_250x250_maxb.jpg" />
//                                                             </figure>
//                                                             <div className="groupDiscount_199p" />
//                                                         </div>
//                                                         <div className="caption_2Jn3">
//                                                             <div className="promBanner_3cxp promList_2Jno" />
//                                                             <h3 className="productName_u171"><span className="truncateMedium_Tofh">LG G7 LG G7 ThinQ</span></h3>
//                                                             <div className="productPrice_1RFY"><strong className="currentPrice_2hr9">3.299.000đ -
//                                                                 3.399.000đ</strong></div>
//                                                             <div className="info_3lhu">
//                                                                 <div />
//                                                             </div>
//                                                             <div className="footer_2CrX"><span className="shopName_4r40"><span className="textSmall_hRbk textOverflow_3gco">TRUNG TÂM ĐIỆN MÁY</span></span><span className="textSmall_hRbk textOverflow_3gco locationName_3SN5">TP.HCM</span></div>
//                                                         </div>
//                                                     </div>
//                                                 </a></div>
//                                         </div>
//                                         <div style={{ height: '387.2px', left: '0px', position: 'absolute', top: '774.4px', width: '100%' }}>
//                                             <div className="list_1OKC grid5_3JhR"><a aria-label="item_3x07" href="https://www.sendo.vn/iphone-6-iphone-6-28506728.html?source_block_id=listing_products&source_info=desktop2_60___session_key___8b46e440-dd86-441d-bd3a-b27f88cb1014_-5_algo13_0_11_2_-1&source_page_id=cate1_vasup_desc" className="item_3x07">
//                                                 <div className="card_3Vc8">
//                                                     <div className="thumbnail_3tZG">
//                                                         <figure className="image_3mnm"><img src="./Thế Giới Di Động Samsung, Iphone, Máy Tính Bảng Xách Tay Giá Rẻ _ Sendo.vn_files/GObCzS_simg_de2fe0_250x250_maxb.jpg" className=" lazyloaded" data-src="//media3.scdn.vn/img3/2019/6_4/GObCzS_simg_de2fe0_250x250_maxb.jpg" /></figure>
//                                                         <div className="groupDiscount_199p" />
//                                                     </div>
//                                                     <div className="caption_2Jn3">
//                                                         <div className="promBanner_3cxp promList_2Jno" />
//                                                         <h3 className="productName_u171"><span className="truncateMedium_Tofh">iPhone 6 iPhone 6</span></h3>
//                                                         <div className="productPrice_1RFY"><strong className="currentPrice_2hr9">2.399.000đ -
//                                                             2.999.000đ</strong></div>
//                                                         <div className="info_3lhu">
//                                                             <div />
//                                                         </div>
//                                                         <div className="footer_2CrX"><span className="shopName_4r40"><span className="textSmall_hRbk textOverflow_3gco">TRUNG TÂM ĐIỆN MÁY</span></span><span className="textSmall_hRbk textOverflow_3gco locationName_3SN5">TP.HCM</span></div>
//                                                     </div>
//                                                 </div>
//                                             </a><a aria-label="item_3x07" href="https://www.sendo.vn/xac-dien-thoai-asus-zenphone-4-max-69695461.html?source_block_id=listing_products&source_info=desktop2_60___session_key___8b46e440-dd86-441d-bd3a-b27f88cb1014_-5_algo13_0_12_2_-1&source_page_id=cate1_vasup_desc" className="item_3x07">
//                                                     <div className="card_3Vc8">
//                                                         <div className="thumbnail_3tZG">
//                                                             <figure className="image_3mnm"><img src="./Thế Giới Di Động Samsung, Iphone, Máy Tính Bảng Xách Tay Giá Rẻ _ Sendo.vn_files/6xgCzApuBAmkB6NNhAMW_simg_de2fe0_250x250_maxb.jpg" className=" lazyloaded" data-src="//media3.scdn.vn/img4/2021/12_04/6xgCzApuBAmkB6NNhAMW_simg_de2fe0_250x250_maxb.jpg" />
//                                                             </figure>
//                                                             <div className="groupDiscount_199p" />
//                                                         </div>
//                                                         <div className="caption_2Jn3">
//                                                             <div className="promBanner_3cxp promList_2Jno" />
//                                                             <h3 className="productName_u171"><span className="truncateMedium_Tofh">xác điện thoại asus zenphone
//                                                                 4 max</span></h3>
//                                                             <div className="productPrice_1RFY"><strong className="currentPrice_2hr9">500.000đ</strong></div>
//                                                             <div className="info_3lhu">
//                                                                 <div /><span className="orderCount_3rDn"><svg width="1em" height="1em" viewBox="0 0 32 32" className="icon_Mf-x iconSmall_2eXS">
//                                                                     <path d="M27.292 15.496l-10.8-10.8A2.378 2.378 0 0014.808 4H6.4C5.08 4 4 5.08 4 6.4v8.4c0 .66.264 1.26.708 1.704l10.8 10.8A2.385 2.385 0 0017.2 28h.012c.658 0 1.253-.271 1.679-.708l8.4-8.4a2.342 2.342 0 00.708-1.68v-.013.001c0-.66-.276-1.272-.708-1.704zM8.2 10c-.996 0-1.8-.804-1.8-1.8s.804-1.8 1.8-1.8 1.8.804 1.8 1.8S9.196 10 8.2 10z">
//                                                                     </path>
//                                                                 </svg><span className="textSmall_hRbk">1</span></span>
//                                                             </div>
//                                                             <div className="footer_2CrX"><span className="shopName_4r40"><span className="textSmall_hRbk textOverflow_3gco">minh khang sohp</span></span><span className="textSmall_hRbk textOverflow_3gco locationName_3SN5">Tuyên Quang</span></div>
//                                                         </div>
//                                                     </div>
//                                                 </a><a aria-label="item_3x07" href="https://www.sendo.vn/may-tinh-bang-ipad-2-tang-bao-da-cap-sac-bh-6-thang-cai-dat-zoom-hoc-online-28957607.html?source_block_id=listing_products&source_info=desktop2_60___session_key___8b46e440-dd86-441d-bd3a-b27f88cb1014_-5_algo13_0_13_2_-1&source_page_id=cate1_vasup_desc" className="item_3x07">
//                                                     <div className="card_3Vc8">
//                                                         <div className="thumbnail_3tZG">
//                                                             <figure className="image_3mnm"><img src="./Thế Giới Di Động Samsung, Iphone, Máy Tính Bảng Xách Tay Giá Rẻ _ Sendo.vn_files/NnucCLvNH9eHuz5Rou4e_simg_de2fe0_250x250_maxb.jpg" className=" lazyloaded" data-src="//media3.scdn.vn/img4/2021/10_25/NnucCLvNH9eHuz5Rou4e_simg_de2fe0_250x250_maxb.jpg" />
//                                                             </figure>
//                                                             <div className="groupDiscount_199p"><span className="discountBadge_1GZz">20%</span></div><span className="videoBadge_1jgE"><img src="./Thế Giới Di Động Samsung, Iphone, Máy Tính Bảng Xách Tay Giá Rẻ _ Sendo.vn_files/Ev3MiuvzcYkH2xHWiVbE.png" alt="has-video" /></span>
//                                                         </div>
//                                                         <div className="caption_2Jn3">
//                                                             <div className="promBanner_3cxp promList_2Jno" />
//                                                             <h3 className="productName_u171"><span className="truncateMedium_Tofh">Máy tính bảng ipad 2 tặng bao
//                                                                 da cáp sạc bh 6 tháng cài đặt zoom học online</span></h3>
//                                                             <div className="productPrice_1RFY"><strong className="currentPrice_2hr9">1.362.000đ -
//                                                                 2.342.000đ</strong><strong className="oldPrice_itl0">2.890.000đ</strong></div>
//                                                             <div className="info_3lhu">
//                                                                 <div>
//                                                                     <div className="stars_l6c- star18_2wdr small_1aJr" /><span className="ratingTotal_2Msc">(44)</span>
//                                                                 </div><span className="orderCount_3rDn"><svg width="1em" height="1em" viewBox="0 0 32 32" className="icon_Mf-x iconSmall_2eXS">
//                                                                     <path d="M27.292 15.496l-10.8-10.8A2.378 2.378 0 0014.808 4H6.4C5.08 4 4 5.08 4 6.4v8.4c0 .66.264 1.26.708 1.704l10.8 10.8A2.385 2.385 0 0017.2 28h.012c.658 0 1.253-.271 1.679-.708l8.4-8.4a2.342 2.342 0 00.708-1.68v-.013.001c0-.66-.276-1.272-.708-1.704zM8.2 10c-.996 0-1.8-.804-1.8-1.8s.804-1.8 1.8-1.8 1.8.804 1.8 1.8S9.196 10 8.2 10z">
//                                                                     </path>
//                                                                 </svg><span className="textSmall_hRbk">238</span></span>
//                                                             </div>
//                                                             <div className="footer_2CrX"><span className="shopName_4r40"><span className="textSmall_hRbk textOverflow_3gco">MiApple</span></span><span className="textSmall_hRbk textOverflow_3gco locationName_3SN5">HN</span></div>
//                                                         </div>
//                                                     </div>
//                                                 </a><a aria-label="item_3x07" href="https://www.sendo.vn/ip-4s-chinh-hang-gan-duoc-sim-moi-99-ip4s-22007015.html?source_block_id=listing_products&source_info=desktop2_60___session_key___8b46e440-dd86-441d-bd3a-b27f88cb1014_-5_algo13_0_14_2_-1&source_page_id=cate1_vasup_desc" className="item_3x07">
//                                                     <div className="card_3Vc8">
//                                                         <div className="thumbnail_3tZG">
//                                                             <figure className="image_3mnm"><img src="./Thế Giới Di Động Samsung, Iphone, Máy Tính Bảng Xách Tay Giá Rẻ _ Sendo.vn_files/jys9HKBMmQR7EjJhWWsc_simg_de2fe0_250x250_maxb.png" className=" lazyloaded" data-src="//media3.scdn.vn/img4/2021/03_08/jys9HKBMmQR7EjJhWWsc_simg_de2fe0_250x250_maxb.png" />
//                                                             </figure>
//                                                             <div className="groupDiscount_199p"><span className="discountBadge_1GZz">21%</span></div><span className="videoBadge_1jgE"><img src="./Thế Giới Di Động Samsung, Iphone, Máy Tính Bảng Xách Tay Giá Rẻ _ Sendo.vn_files/Ev3MiuvzcYkH2xHWiVbE.png" alt="has-video" /></span>
//                                                         </div>
//                                                         <div className="caption_2Jn3">
//                                                             <div className="promBanner_3cxp promList_2Jno" />
//                                                             <h3 className="productName_u171"><span className="truncateMedium_Tofh">ip 4s chính hãng gắn được sim
//                                                                 mới 99 - ip4s</span></h3>
//                                                             <div className="productPrice_1RFY"><strong className="currentPrice_2hr9">381.000đ -
//                                                                 391.000đ</strong><strong className="oldPrice_itl0">490.000đ</strong></div>
//                                                             <div className="info_3lhu">
//                                                                 <div>
//                                                                     <div className="stars_l6c- star20_1zW7 small_1aJr" /><span className="ratingTotal_2Msc">(10)</span>
//                                                                 </div><span className="orderCount_3rDn"><svg width="1em" height="1em" viewBox="0 0 32 32" className="icon_Mf-x iconSmall_2eXS">
//                                                                     <path d="M27.292 15.496l-10.8-10.8A2.378 2.378 0 0014.808 4H6.4C5.08 4 4 5.08 4 6.4v8.4c0 .66.264 1.26.708 1.704l10.8 10.8A2.385 2.385 0 0017.2 28h.012c.658 0 1.253-.271 1.679-.708l8.4-8.4a2.342 2.342 0 00.708-1.68v-.013.001c0-.66-.276-1.272-.708-1.704zM8.2 10c-.996 0-1.8-.804-1.8-1.8s.804-1.8 1.8-1.8 1.8.804 1.8 1.8S9.196 10 8.2 10z">
//                                                                     </path>
//                                                                 </svg><span className="textSmall_hRbk">86</span></span>
//                                                             </div>
//                                                             <div className="footer_2CrX"><span className="shopName_4r40"><span className="textSmall_hRbk textOverflow_3gco">MiApple</span></span><span className="textSmall_hRbk textOverflow_3gco locationName_3SN5">HN</span></div>
//                                                         </div>
//                                                     </div>
//                                                 </a><a aria-label="item_3x07" href="https://www.sendo.vn/nokia-6701-69140290.html?source_block_id=listing_products&source_info=desktop2_60___session_key___8b46e440-dd86-441d-bd3a-b27f88cb1014_-5_algo13_0_15_2_-1&source_page_id=cate1_vasup_desc" className="item_3x07">
//                                                     <div className="card_3Vc8">
//                                                         <div className="thumbnail_3tZG">
//                                                             <figure className="image_3mnm"><img src="./Thế Giới Di Động Samsung, Iphone, Máy Tính Bảng Xách Tay Giá Rẻ _ Sendo.vn_files/aNDC8wYLtrUdnLpsIyZT_simg_de2fe0_250x250_maxb.jpg" className=" lazyloaded" data-src="//media3.scdn.vn/img4/2021/11_27/aNDC8wYLtrUdnLpsIyZT_simg_de2fe0_250x250_maxb.jpg" />
//                                                             </figure>
//                                                             <div className="groupDiscount_199p" />
//                                                         </div>
//                                                         <div className="caption_2Jn3">
//                                                             <div className="promBanner_3cxp promList_2Jno" />
//                                                             <h3 className="productName_u171"><span className="truncateMedium_Tofh">nokia 6701</span></h3>
//                                                             <div className="productPrice_1RFY"><strong className="currentPrice_2hr9">2.800.000đ</strong></div>
//                                                             <div className="info_3lhu">
//                                                                 <div /><span className="orderCount_3rDn"><svg width="1em" height="1em" viewBox="0 0 32 32" className="icon_Mf-x iconSmall_2eXS">
//                                                                     <path d="M27.292 15.496l-10.8-10.8A2.378 2.378 0 0014.808 4H6.4C5.08 4 4 5.08 4 6.4v8.4c0 .66.264 1.26.708 1.704l10.8 10.8A2.385 2.385 0 0017.2 28h.012c.658 0 1.253-.271 1.679-.708l8.4-8.4a2.342 2.342 0 00.708-1.68v-.013.001c0-.66-.276-1.272-.708-1.704zM8.2 10c-.996 0-1.8-.804-1.8-1.8s.804-1.8 1.8-1.8 1.8.804 1.8 1.8S9.196 10 8.2 10z">
//                                                                     </path>
//                                                                 </svg><span className="textSmall_hRbk">2</span></span>
//                                                             </div>
//                                                             <div className="footer_2CrX"><span className="shopName_4r40"><span className="textSmall_hRbk textOverflow_3gco">thangvip998</span></span><span className="textSmall_hRbk textOverflow_3gco locationName_3SN5">Thái Nguyên</span></div>
//                                                         </div>
//                                                     </div>
//                                                 </a></div>
//                                         </div>
//                                         <div style={{ height: '387.2px', left: '0px', position: 'absolute', top: '1161.6px', width: '100%' }}>
//                                             <div className="list_1OKC grid5_3JhR"><a aria-label="item_3x07" href="https://www.sendo.vn/dien-thoai-iphone-4-4s-quoc-te-chinh-hang-bh-6-thang-1-doi-1-tai-nha-23861376.html?source_block_id=listing_products&source_info=desktop2_60___session_key___8b46e440-dd86-441d-bd3a-b27f88cb1014_-5_algo13_0_16_2_-1&source_page_id=cate1_vasup_desc" className="item_3x07">
//                                                 <div className="card_3Vc8">
//                                                     <div className="thumbnail_3tZG">
//                                                         <figure className="image_3mnm"><img src="./Thế Giới Di Động Samsung, Iphone, Máy Tính Bảng Xách Tay Giá Rẻ _ Sendo.vn_files/vjYVqW_simg_de2fe0_250x250_maxb.png" className=" lazyloaded" data-src="//media3.scdn.vn/img3/2019/11_22/vjYVqW_simg_de2fe0_250x250_maxb.png" />
//                                                         </figure>
//                                                         <div className="groupDiscount_199p"><span className="discountBadge_1GZz">19%</span></div><span className="videoBadge_1jgE"><img src="./Thế Giới Di Động Samsung, Iphone, Máy Tính Bảng Xách Tay Giá Rẻ _ Sendo.vn_files/Ev3MiuvzcYkH2xHWiVbE.png" alt="has-video" /></span>
//                                                     </div>
//                                                     <div className="caption_2Jn3">
//                                                         <div className="promBanner_3cxp promList_2Jno" />
//                                                         <h3 className="productName_u171"><span className="truncateMedium_Tofh">Điện thoại Iphone 4,4s Quốc
//                                                             tế chính hãng BH 6 Tháng 1 đổi 1 Tại nhà</span></h3>
//                                                         <div className="productPrice_1RFY"><strong className="currentPrice_2hr9">332.000đ -
//                                                             459.000đ</strong><strong className="oldPrice_itl0">530.000đ</strong></div>
//                                                         <div className="info_3lhu">
//                                                             <div>
//                                                                 <div className="stars_l6c- star16_1BW_ small_1aJr" /><span className="ratingTotal_2Msc">(37)</span>
//                                                             </div><span className="orderCount_3rDn"><svg width="1em" height="1em" viewBox="0 0 32 32" className="icon_Mf-x iconSmall_2eXS">
//                                                                 <path d="M27.292 15.496l-10.8-10.8A2.378 2.378 0 0014.808 4H6.4C5.08 4 4 5.08 4 6.4v8.4c0 .66.264 1.26.708 1.704l10.8 10.8A2.385 2.385 0 0017.2 28h.012c.658 0 1.253-.271 1.679-.708l8.4-8.4a2.342 2.342 0 00.708-1.68v-.013.001c0-.66-.276-1.272-.708-1.704zM8.2 10c-.996 0-1.8-.804-1.8-1.8s.804-1.8 1.8-1.8 1.8.804 1.8 1.8S9.196 10 8.2 10z">
//                                                                 </path>
//                                                             </svg><span className="textSmall_hRbk">273</span></span>
//                                                         </div>
//                                                         <div className="footer_2CrX"><span className="shopName_4r40"><span className="textSmall_hRbk textOverflow_3gco">MiApple</span></span><span className="textSmall_hRbk textOverflow_3gco locationName_3SN5">HN</span></div>
//                                                     </div>
//                                                 </div>
//                                             </a><a aria-label="item_3x07" href="https://www.sendo.vn/dien-thoai-iphone-4-4s-quoc-te-chinh-hang-bh-6-thang-1-doi-1-tai-nha-23893045.html?source_block_id=listing_products&source_info=desktop2_60___session_key___8b46e440-dd86-441d-bd3a-b27f88cb1014_-5_algo13_0_17_2_-1&source_page_id=cate1_vasup_desc" className="item_3x07">
//                                                     <div className="card_3Vc8">
//                                                         <div className="thumbnail_3tZG">
//                                                             <figure className="image_3mnm"><img src="./Thế Giới Di Động Samsung, Iphone, Máy Tính Bảng Xách Tay Giá Rẻ _ Sendo.vn_files/4pdaz9g3Y62DvnIvdfao_simg_de2fe0_250x250_maxb.jpg" className=" lazyloaded" data-src="//media3.scdn.vn/img4/2021/03_08/4pdaz9g3Y62DvnIvdfao_simg_de2fe0_250x250_maxb.jpg" />
//                                                             </figure>
//                                                             <div className="groupDiscount_199p"><span className="discountBadge_1GZz">17%</span></div><span className="videoBadge_1jgE"><img src="./Thế Giới Di Động Samsung, Iphone, Máy Tính Bảng Xách Tay Giá Rẻ _ Sendo.vn_files/Ev3MiuvzcYkH2xHWiVbE.png" alt="has-video" /></span>
//                                                         </div>
//                                                         <div className="caption_2Jn3">
//                                                             <div className="promBanner_3cxp promList_2Jno" />
//                                                             <h3 className="productName_u171"><span className="truncateMedium_Tofh">Điện thoại Iphone 4,4s Quốc
//                                                                 tế chính hãng BH 6 Tháng 1 đổi 1 Tại nhà</span></h3>
//                                                             <div className="productPrice_1RFY"><strong className="currentPrice_2hr9">339.000đ -
//                                                                 490.000đ</strong><strong className="oldPrice_itl0">530.000đ</strong></div>
//                                                             <div className="info_3lhu">
//                                                                 <div>
//                                                                     <div className="stars_l6c- star16_1BW_ small_1aJr" /><span className="ratingTotal_2Msc">(14)</span>
//                                                                 </div><span className="orderCount_3rDn"><svg width="1em" height="1em" viewBox="0 0 32 32" className="icon_Mf-x iconSmall_2eXS">
//                                                                     <path d="M27.292 15.496l-10.8-10.8A2.378 2.378 0 0014.808 4H6.4C5.08 4 4 5.08 4 6.4v8.4c0 .66.264 1.26.708 1.704l10.8 10.8A2.385 2.385 0 0017.2 28h.012c.658 0 1.253-.271 1.679-.708l8.4-8.4a2.342 2.342 0 00.708-1.68v-.013.001c0-.66-.276-1.272-.708-1.704zM8.2 10c-.996 0-1.8-.804-1.8-1.8s.804-1.8 1.8-1.8 1.8.804 1.8 1.8S9.196 10 8.2 10z">
//                                                                     </path>
//                                                                 </svg><span className="textSmall_hRbk">133</span></span>
//                                                             </div>
//                                                             <div className="footer_2CrX"><span className="shopName_4r40"><span className="textSmall_hRbk textOverflow_3gco">MiApple</span></span><span className="textSmall_hRbk textOverflow_3gco locationName_3SN5">HN</span></div>
//                                                         </div>
//                                                     </div>
//                                                 </a><a aria-label="item_3x07" href="https://www.sendo.vn/man-hinh-r7-60252906.html?source_block_id=listing_products&source_info=desktop2_60___session_key___8b46e440-dd86-441d-bd3a-b27f88cb1014_-5_algo13_0_18_2_-1&source_page_id=cate1_vasup_desc" className="item_3x07">
//                                                     <div className="card_3Vc8">
//                                                         <div className="thumbnail_3tZG">
//                                                             <figure className="image_3mnm"><img src="./Thế Giới Di Động Samsung, Iphone, Máy Tính Bảng Xách Tay Giá Rẻ _ Sendo.vn_files/w0Zqz8q2Bn1FosCbTpoy_simg_de2fe0_250x250_maxb.jpg" className=" lazyloaded" data-src="//media3.scdn.vn/img4/2021/11_04/w0Zqz8q2Bn1FosCbTpoy_simg_de2fe0_250x250_maxb.jpg" />
//                                                             </figure>
//                                                             <div className="groupDiscount_199p" />
//                                                         </div>
//                                                         <div className="caption_2Jn3">
//                                                             <div className="promBanner_3cxp promList_2Jno" />
//                                                             <h3 className="productName_u171"><span className="truncateMedium_Tofh">Màn hình R7</span></h3>
//                                                             <div className="productPrice_1RFY"><strong className="currentPrice_2hr9">580.000đ</strong></div>
//                                                             <div className="info_3lhu">
//                                                                 <div />
//                                                             </div>
//                                                             <div className="footer_2CrX"><span className="shopName_4r40"><span className="textSmall_hRbk textOverflow_3gco">Trương gia huy</span></span><span className="textSmall_hRbk textOverflow_3gco locationName_3SN5">TP.HCM</span></div>
//                                                         </div>
//                                                     </div>
//                                                 </a><a aria-label="item_3x07" href="https://www.sendo.vn/xiaomi-mi-11lite-4g-61613741.html?source_block_id=listing_products&source_info=desktop2_60___session_key___8b46e440-dd86-441d-bd3a-b27f88cb1014_-5_algo13_0_19_2_-1&source_page_id=cate1_vasup_desc" className="item_3x07">
//                                                     <div className="card_3Vc8">
//                                                         <div className="thumbnail_3tZG">
//                                                             <figure className="image_3mnm"><img src="./Thế Giới Di Động Samsung, Iphone, Máy Tính Bảng Xách Tay Giá Rẻ _ Sendo.vn_files/GNI7IFndE1Unbp6s7Pfk_simg_de2fe0_250x250_maxb.jpg" className=" lazyloaded" data-src="//media3.scdn.vn/img4/2021/11_05/GNI7IFndE1Unbp6s7Pfk_simg_de2fe0_250x250_maxb.jpg" />
//                                                             </figure>
//                                                             <div className="groupDiscount_199p" />
//                                                         </div>
//                                                         <div className="caption_2Jn3">
//                                                             <div className="promBanner_3cxp promList_2Jno" />
//                                                             <h3 className="productName_u171"><span className="truncateMedium_Tofh">XIAOMI Mi 11lite 4G</span>
//                                                             </h3>
//                                                             <div className="productPrice_1RFY"><strong className="currentPrice_2hr9">6.500.000đ</strong></div>
//                                                             <div className="info_3lhu">
//                                                                 <div />
//                                                             </div>
//                                                             <div className="footer_2CrX"><span className="shopName_4r40"><span className="textSmall_hRbk textOverflow_3gco">Shop Đt 99</span></span><span className="textSmall_hRbk textOverflow_3gco locationName_3SN5">Cà Mau</span></div>
//                                                         </div>
//                                                     </div>
//                                                 </a><a aria-label="item_3x07" href="https://www.sendo.vn/may-tinh-bang-alldocube-kpad-man-2k-hoc-online-60181655.html?source_block_id=listing_products&source_info=desktop2_60___session_key___8b46e440-dd86-441d-bd3a-b27f88cb1014_-5_algo13_0_20_2_-1&source_page_id=cate1_vasup_desc" className="item_3x07">
//                                                     <div className="card_3Vc8">
//                                                         <div className="thumbnail_3tZG">
//                                                             <figure className="image_3mnm"><img src="./Thế Giới Di Động Samsung, Iphone, Máy Tính Bảng Xách Tay Giá Rẻ _ Sendo.vn_files/O5hJC0OBgiHRJXlQjci3_simg_de2fe0_250x250_maxb.jpg" className=" lazyloaded" data-src="//media3.scdn.vn/img4/2021/11_02/O5hJC0OBgiHRJXlQjci3_simg_de2fe0_250x250_maxb.jpg" />
//                                                             </figure>
//                                                             <div className="groupDiscount_199p" />
//                                                         </div>
//                                                         <div className="caption_2Jn3">
//                                                             <div className="promBanner_3cxp promList_2Jno" />
//                                                             <h3 className="productName_u171"><span className="truncateMedium_Tofh"><img src="./Thế Giới Di Động Samsung, Iphone, Máy Tính Bảng Xách Tay Giá Rẻ _ Sendo.vn_files/h6fJaiL5WkEbDU2eQRZb.png" alt="shop-plus" className="shopPlus_zM6- size-md_1G43" />Máy tính bảng Alldocube KPAD màn 2k
//                                                                 học online</span></h3>
//                                                             <div className="productPrice_1RFY"><strong className="currentPrice_2hr9">3.899.000đ</strong></div>
//                                                             <div className="info_3lhu">
//                                                                 <div /><span className="orderCount_3rDn"><svg width="1em" height="1em" viewBox="0 0 32 32" className="icon_Mf-x iconSmall_2eXS">
//                                                                     <path d="M27.292 15.496l-10.8-10.8A2.378 2.378 0 0014.808 4H6.4C5.08 4 4 5.08 4 6.4v8.4c0 .66.264 1.26.708 1.704l10.8 10.8A2.385 2.385 0 0017.2 28h.012c.658 0 1.253-.271 1.679-.708l8.4-8.4a2.342 2.342 0 00.708-1.68v-.013.001c0-.66-.276-1.272-.708-1.704zM8.2 10c-.996 0-1.8-.804-1.8-1.8s.804-1.8 1.8-1.8 1.8.804 1.8 1.8S9.196 10 8.2 10z">
//                                                                     </path>
//                                                                 </svg><span className="textSmall_hRbk">4</span></span>
//                                                             </div>
//                                                             <div className="footer_2CrX"><span className="shopName_4r40"><span className="textSmall_hRbk textOverflow_3gco">Đẹp &amp; Tốt</span></span><span className="textSmall_hRbk textOverflow_3gco locationName_3SN5">TP.HCM</span></div>
//                                                         </div>
//                                                     </div>
//                                                 </a></div>
//                                         </div>
//                                         <div style={{ height: '387.2px', left: '0px', position: 'absolute', top: '1548.8px', width: '100%' }}>
//                                             <div className="list_1OKC grid5_3JhR"><a aria-label="item_3x07" href="https://www.sendo.vn/xac-dien-thoai-huawei-5a-57405985.html?source_block_id=listing_products&source_info=desktop2_60___session_key___8b46e440-dd86-441d-bd3a-b27f88cb1014_-5_algo13_0_21_2_-1&source_page_id=cate1_vasup_desc" className="item_3x07">
//                                                 <div className="card_3Vc8">
//                                                     <div className="thumbnail_3tZG">
//                                                         <figure className="image_3mnm"><img src="./Thế Giới Di Động Samsung, Iphone, Máy Tính Bảng Xách Tay Giá Rẻ _ Sendo.vn_files/nh4DtpYiNy6XUruxq0wn_simg_de2fe0_250x250_maxb.jpg" className=" lazyloaded" data-src="//media3.scdn.vn/img4/2021/10_26/nh4DtpYiNy6XUruxq0wn_simg_de2fe0_250x250_maxb.jpg" />
//                                                         </figure>
//                                                         <div className="groupDiscount_199p" />
//                                                     </div>
//                                                     <div className="caption_2Jn3">
//                                                         <div className="promBanner_3cxp promList_2Jno" />
//                                                         <h3 className="productName_u171"><span className="truncateMedium_Tofh">xác điện thoại huawei
//                                                             5A</span></h3>
//                                                         <div className="productPrice_1RFY"><strong className="currentPrice_2hr9">156.000đ</strong></div>
//                                                         <div className="info_3lhu">
//                                                             <div /><span className="orderCount_3rDn"><svg width="1em" height="1em" viewBox="0 0 32 32" className="icon_Mf-x iconSmall_2eXS">
//                                                                 <path d="M27.292 15.496l-10.8-10.8A2.378 2.378 0 0014.808 4H6.4C5.08 4 4 5.08 4 6.4v8.4c0 .66.264 1.26.708 1.704l10.8 10.8A2.385 2.385 0 0017.2 28h.012c.658 0 1.253-.271 1.679-.708l8.4-8.4a2.342 2.342 0 00.708-1.68v-.013.001c0-.66-.276-1.272-.708-1.704zM8.2 10c-.996 0-1.8-.804-1.8-1.8s.804-1.8 1.8-1.8 1.8.804 1.8 1.8S9.196 10 8.2 10z">
//                                                                 </path>
//                                                             </svg><span className="textSmall_hRbk">1</span></span>
//                                                         </div>
//                                                         <div className="footer_2CrX"><span className="shopName_4r40"><span className="textSmall_hRbk textOverflow_3gco">linhkiên097</span></span><span className="textSmall_hRbk textOverflow_3gco locationName_3SN5">Cao Bằng</span></div>
//                                                     </div>
//                                                 </div>
//                                             </a><a aria-label="item_3x07" href="https://www.sendo.vn/laptop-hp-pavilion-15-eg0505tu-i5-1135g78gb512gbwin10-46m02pa-51835794.html?source_block_id=listing_products&source_info=desktop2_60___session_key___8b46e440-dd86-441d-bd3a-b27f88cb1014_-5_algo13_0_22_2_-1&source_page_id=cate1_vasup_desc" className="item_3x07">
//                                                     <div className="card_3Vc8">
//                                                         <div className="thumbnail_3tZG">
//                                                             <figure className="image_3mnm"><img src="./Thế Giới Di Động Samsung, Iphone, Máy Tính Bảng Xách Tay Giá Rẻ _ Sendo.vn_files/7veehl7wX4G9dwjfhQWL_simg_de2fe0_250x250_maxb.jpg" className=" lazyloaded" data-src="//media3.scdn.vn/img4/2021/10_10/7veehl7wX4G9dwjfhQWL_simg_de2fe0_250x250_maxb.jpg" />
//                                                             </figure>
//                                                             <div className="groupDiscount_199p" />
//                                                         </div>
//                                                         <div className="caption_2Jn3">
//                                                             <div className="promBanner_3cxp promList_2Jno" />
//                                                             <h3 className="productName_u171"><span className="truncateMedium_Tofh"><img src="./Thế Giới Di Động Samsung, Iphone, Máy Tính Bảng Xách Tay Giá Rẻ _ Sendo.vn_files/h6fJaiL5WkEbDU2eQRZb.png" alt="shop-plus" className="shopPlus_zM6- size-md_1G43" />Laptop HP Pavilion 15 eg0505TU i5
//                                                                 1135G7/8GB/512GB/Win10 (46M02PA</span></h3>
//                                                             <div className="productPrice_1RFY"><strong className="currentPrice_2hr9">13.900.000đ</strong></div>
//                                                             <div className="info_3lhu">
//                                                                 <div /><span className="orderCount_3rDn"><svg width="1em" height="1em" viewBox="0 0 32 32" className="icon_Mf-x iconSmall_2eXS">
//                                                                     <path d="M27.292 15.496l-10.8-10.8A2.378 2.378 0 0014.808 4H6.4C5.08 4 4 5.08 4 6.4v8.4c0 .66.264 1.26.708 1.704l10.8 10.8A2.385 2.385 0 0017.2 28h.012c.658 0 1.253-.271 1.679-.708l8.4-8.4a2.342 2.342 0 00.708-1.68v-.013.001c0-.66-.276-1.272-.708-1.704zM8.2 10c-.996 0-1.8-.804-1.8-1.8s.804-1.8 1.8-1.8 1.8.804 1.8 1.8S9.196 10 8.2 10z">
//                                                                     </path>
//                                                                 </svg><span className="textSmall_hRbk">3</span></span>
//                                                             </div>
//                                                             <div className="footer_2CrX"><span className="shopName_4r40"><span className="textSmall_hRbk textOverflow_3gco">HmamMobile</span></span><span className="textSmall_hRbk textOverflow_3gco locationName_3SN5">TP.HCM</span></div>
//                                                         </div>
//                                                     </div>
//                                                 </a><a aria-label="item_3x07" href="https://www.sendo.vn/iphone-6s-plus-32gb-30222241.html?source_block_id=listing_products&source_info=desktop2_60___session_key___8b46e440-dd86-441d-bd3a-b27f88cb1014_-5_algo13_0_23_2_-1&source_page_id=cate1_vasup_desc" className="item_3x07">
//                                                     <div className="card_3Vc8">
//                                                         <div className="thumbnail_3tZG">
//                                                             <figure className="image_3mnm"><img src="./Thế Giới Di Động Samsung, Iphone, Máy Tính Bảng Xách Tay Giá Rẻ _ Sendo.vn_files/odUJTrftH72P6yN8NLYp_simg_de2fe0_250x250_maxb.jpg" className=" lazyloaded" data-src="//media3.scdn.vn/img4/2020/09_20/odUJTrftH72P6yN8NLYp_simg_de2fe0_250x250_maxb.jpg" />
//                                                             </figure>
//                                                             <div className="groupDiscount_199p" />
//                                                         </div>
//                                                         <div className="caption_2Jn3">
//                                                             <div className="promBanner_3cxp promList_2Jno" />
//                                                             <h3 className="productName_u171"><span className="truncateMedium_Tofh">iPhone 6S Plus 32Gb</span>
//                                                             </h3>
//                                                             <div className="productPrice_1RFY"><strong className="currentPrice_2hr9">3.650.000đ</strong></div>
//                                                             <div className="info_3lhu">
//                                                                 <div /><span className="orderCount_3rDn"><svg width="1em" height="1em" viewBox="0 0 32 32" className="icon_Mf-x iconSmall_2eXS">
//                                                                     <path d="M27.292 15.496l-10.8-10.8A2.378 2.378 0 0014.808 4H6.4C5.08 4 4 5.08 4 6.4v8.4c0 .66.264 1.26.708 1.704l10.8 10.8A2.385 2.385 0 0017.2 28h.012c.658 0 1.253-.271 1.679-.708l8.4-8.4a2.342 2.342 0 00.708-1.68v-.013.001c0-.66-.276-1.272-.708-1.704zM8.2 10c-.996 0-1.8-.804-1.8-1.8s.804-1.8 1.8-1.8 1.8.804 1.8 1.8S9.196 10 8.2 10z">
//                                                                     </path>
//                                                                 </svg><span className="textSmall_hRbk">8</span></span>
//                                                             </div>
//                                                             <div className="footer_2CrX"><span className="shopName_4r40"><span className="textSmall_hRbk textOverflow_3gco">Fam Mobile</span></span><span className="textSmall_hRbk textOverflow_3gco locationName_3SN5">HN</span></div>
//                                                         </div>
//                                                     </div>
//                                                 </a><a aria-label="item_3x07" href="https://www.sendo.vn/dien-thoai-servo-h8-xanh-4-simpin-3000-mha-51344319.html?source_block_id=listing_products&source_info=desktop2_60___session_key___8b46e440-dd86-441d-bd3a-b27f88cb1014_-5_algo13_0_24_2_-1&source_page_id=cate1_vasup_desc" className="item_3x07">
//                                                     <div className="card_3Vc8">
//                                                         <div className="thumbnail_3tZG">
//                                                             <figure className="image_3mnm"><img src="./Thế Giới Di Động Samsung, Iphone, Máy Tính Bảng Xách Tay Giá Rẻ _ Sendo.vn_files/XhAKB5Ga1dTOrem7ks6q_simg_de2fe0_250x250_maxb.jpg" className=" lazyloaded" data-src="//media3.scdn.vn/img4/2021/09_29/XhAKB5Ga1dTOrem7ks6q_simg_de2fe0_250x250_maxb.jpg" />
//                                                             </figure>
//                                                             <div className="groupDiscount_199p" />
//                                                         </div>
//                                                         <div className="caption_2Jn3">
//                                                             <div className="promBanner_3cxp promList_2Jno" />
//                                                             <h3 className="productName_u171"><span className="truncateMedium_Tofh">Điện thoại SERVO H8 Xanh 4
//                                                                 simpin 3000 mha</span></h3>
//                                                             <div className="productPrice_1RFY"><strong className="currentPrice_2hr9">1.198.000đ</strong></div>
//                                                             <div className="info_3lhu">
//                                                                 <div />
//                                                             </div>
//                                                             <div className="footer_2CrX"><span className="shopName_4r40"><span className="textSmall_hRbk textOverflow_3gco">An Lạc</span></span><span className="textSmall_hRbk textOverflow_3gco locationName_3SN5">TP.HCM</span></div>
//                                                         </div>
//                                                     </div>
//                                                 </a><a aria-label="item_3x07" href="https://www.sendo.vn/dien-thoai-iphone-11-promax-64gb-zin-moi-99-bao-hanh-12-thang-kem-tang-full-phu-kien-49371202.html?source_block_id=listing_products&source_info=desktop2_60___session_key___8b46e440-dd86-441d-bd3a-b27f88cb1014_-5_algo13_0_25_2_-1&source_page_id=cate1_vasup_desc" className="item_3x07">
//                                                     <div className="card_3Vc8">
//                                                         <div className="thumbnail_3tZG">
//                                                             <figure className="image_3mnm"><img src="./Thế Giới Di Động Samsung, Iphone, Máy Tính Bảng Xách Tay Giá Rẻ _ Sendo.vn_files/o0vB1yus2T3HTIWHC3Vq_simg_de2fe0_250x250_maxb.jpg" className=" lazyloaded" data-src="//media3.scdn.vn/img4/2021/09_20/o0vB1yus2T3HTIWHC3Vq_simg_de2fe0_250x250_maxb.jpg" />
//                                                             </figure>
//                                                             <div className="groupDiscount_199p" /><span className="videoBadge_1jgE"><img src="./Thế Giới Di Động Samsung, Iphone, Máy Tính Bảng Xách Tay Giá Rẻ _ Sendo.vn_files/Ev3MiuvzcYkH2xHWiVbE.png" alt="has-video" /></span>
//                                                         </div>
//                                                         <div className="caption_2Jn3">
//                                                             <div className="promBanner_3cxp promList_2Jno" />
//                                                             <h3 className="productName_u171"><span className="truncateMedium_Tofh">Điện Thoại iphone 11 Promax
//                                                                 64gb zin mới 99% Bảo Hành 12 Tháng kèm tặng full phụ kiện</span></h3>
//                                                             <div className="productPrice_1RFY"><strong className="currentPrice_2hr9">15.990.000đ -
//                                                                 16.900.000đ</strong></div>
//                                                             <div className="info_3lhu">
//                                                                 <div /><span className="orderCount_3rDn"><svg width="1em" height="1em" viewBox="0 0 32 32" className="icon_Mf-x iconSmall_2eXS">
//                                                                     <path d="M27.292 15.496l-10.8-10.8A2.378 2.378 0 0014.808 4H6.4C5.08 4 4 5.08 4 6.4v8.4c0 .66.264 1.26.708 1.704l10.8 10.8A2.385 2.385 0 0017.2 28h.012c.658 0 1.253-.271 1.679-.708l8.4-8.4a2.342 2.342 0 00.708-1.68v-.013.001c0-.66-.276-1.272-.708-1.704zM8.2 10c-.996 0-1.8-.804-1.8-1.8s.804-1.8 1.8-1.8 1.8.804 1.8 1.8S9.196 10 8.2 10z">
//                                                                     </path>
//                                                                 </svg><span className="textSmall_hRbk">3</span></span>
//                                                             </div>
//                                                             <div className="footer_2CrX"><span className="shopName_4r40"><span className="textSmall_hRbk textOverflow_3gco">Phụ Kiện Onlie</span></span><span className="textSmall_hRbk textOverflow_3gco locationName_3SN5">Kiên Giang</span></div>
//                                                         </div>
//                                                     </div>
//                                                 </a></div>
//                                         </div>
//                                         <div style={{ height: '387.2px', left: '0px', position: 'absolute', top: '1936px', width: '100%' }}>
//                                             <div className="list_1OKC grid5_3JhR"><a aria-label="item_3x07" href="https://www.sendo.vn/hinh-thuc-may-moi-97-11090000d-hinh-thuc-may-moi-99-10600000d-mau-vang-lien-he-zalo-0784147748-gap-diem-48684935.html?source_block_id=listing_products&source_info=desktop2_60___session_key___8b46e440-dd86-441d-bd3a-b27f88cb1014_-5_algo13_0_26_2_-1&source_page_id=cate1_vasup_desc" className="item_3x07">
//                                                 <div className="card_3Vc8">
//                                                     <div className="thumbnail_3tZG">
//                                                         <figure className="image_3mnm"><img src="./Thế Giới Di Động Samsung, Iphone, Máy Tính Bảng Xách Tay Giá Rẻ _ Sendo.vn_files/5mhGrLD0uNDy1baveX84_simg_de2fe0_250x250_maxb.jpg" className=" lazyloaded" data-src="//media3.scdn.vn/img4/2021/08_20/5mhGrLD0uNDy1baveX84_simg_de2fe0_250x250_maxb.jpg" />
//                                                         </figure>
//                                                         <div className="groupDiscount_199p" />
//                                                     </div>
//                                                     <div className="caption_2Jn3">
//                                                         <div className="promBanner_3cxp promList_2Jno" />
//                                                         <h3 className="productName_u171"><span className="truncateMedium_Tofh">Hình thức máy mới 97% :
//                                                             11.090.000đ
//                                                             Hình thức máy mới 99% : 10.600.000đ
//                                                             Màu Vàng . LIÊN HỆ ZALO: 0784147748 GẶP DIỄM</span></h3>
//                                                         <div className="productPrice_1RFY"><strong className="currentPrice_2hr9">10.600.000đ</strong></div>
//                                                         <div className="info_3lhu">
//                                                             <div /><span className="orderCount_3rDn"><svg width="1em" height="1em" viewBox="0 0 32 32" className="icon_Mf-x iconSmall_2eXS">
//                                                                 <path d="M27.292 15.496l-10.8-10.8A2.378 2.378 0 0014.808 4H6.4C5.08 4 4 5.08 4 6.4v8.4c0 .66.264 1.26.708 1.704l10.8 10.8A2.385 2.385 0 0017.2 28h.012c.658 0 1.253-.271 1.679-.708l8.4-8.4a2.342 2.342 0 00.708-1.68v-.013.001c0-.66-.276-1.272-.708-1.704zM8.2 10c-.996 0-1.8-.804-1.8-1.8s.804-1.8 1.8-1.8 1.8.804 1.8 1.8S9.196 10 8.2 10z">
//                                                                 </path>
//                                                             </svg><span className="textSmall_hRbk">1</span></span>
//                                                         </div>
//                                                         <div className="footer_2CrX"><span className="shopName_4r40"><span className="textSmall_hRbk textOverflow_3gco">SONG THIÊN</span></span><span className="textSmall_hRbk textOverflow_3gco locationName_3SN5">Đồng Nai</span></div>
//                                                     </div>
//                                                 </div>
//                                             </a><a aria-label="item_3x07" href="https://www.sendo.vn/dien-thoai-vinsmart-live-48603882.html?source_block_id=listing_products&source_info=desktop2_60___session_key___8b46e440-dd86-441d-bd3a-b27f88cb1014_-5_algo13_0_27_2_-1&source_page_id=cate1_vasup_desc" className="item_3x07">
//                                                     <div className="card_3Vc8">
//                                                         <div className="thumbnail_3tZG">
//                                                             <figure className="image_3mnm"><img src="./Thế Giới Di Động Samsung, Iphone, Máy Tính Bảng Xách Tay Giá Rẻ _ Sendo.vn_files/Myz3DrlOD6L1GUUhxAak_simg_de2fe0_250x250_maxb.jpg" className=" lazyloaded" data-src="//media3.scdn.vn/img4/2021/08_15/Myz3DrlOD6L1GUUhxAak_simg_de2fe0_250x250_maxb.jpg" />
//                                                             </figure>
//                                                             <div className="groupDiscount_199p" />
//                                                         </div>
//                                                         <div className="caption_2Jn3">
//                                                             <div className="promBanner_3cxp promList_2Jno" />
//                                                             <h3 className="productName_u171"><span className="truncateMedium_Tofh">điện thoại vinsmart
//                                                                 live</span></h3>
//                                                             <div className="productPrice_1RFY"><strong className="currentPrice_2hr9">2.100.000đ</strong></div>
//                                                             <div className="info_3lhu">
//                                                                 <div /><span className="orderCount_3rDn"><svg width="1em" height="1em" viewBox="0 0 32 32" className="icon_Mf-x iconSmall_2eXS">
//                                                                     <path d="M27.292 15.496l-10.8-10.8A2.378 2.378 0 0014.808 4H6.4C5.08 4 4 5.08 4 6.4v8.4c0 .66.264 1.26.708 1.704l10.8 10.8A2.385 2.385 0 0017.2 28h.012c.658 0 1.253-.271 1.679-.708l8.4-8.4a2.342 2.342 0 00.708-1.68v-.013.001c0-.66-.276-1.272-.708-1.704zM8.2 10c-.996 0-1.8-.804-1.8-1.8s.804-1.8 1.8-1.8 1.8.804 1.8 1.8S9.196 10 8.2 10z">
//                                                                     </path>
//                                                                 </svg><span className="textSmall_hRbk">1</span></span>
//                                                             </div>
//                                                             <div className="footer_2CrX"><span className="shopName_4r40"><span className="textSmall_hRbk textOverflow_3gco">shop cây rừng0994</span></span><span className="textSmall_hRbk textOverflow_3gco locationName_3SN5">Phú Thọ</span></div>
//                                                         </div>
//                                                     </div>
//                                                 </a><a aria-label="item_3x07" href="https://www.sendo.vn/vsmart-aris-46049063.html?source_block_id=listing_products&source_info=desktop2_60___session_key___8b46e440-dd86-441d-bd3a-b27f88cb1014_-5_algo13_0_28_2_-1&source_page_id=cate1_vasup_desc" className="item_3x07">
//                                                     <div className="card_3Vc8">
//                                                         <div className="thumbnail_3tZG">
//                                                             <figure className="image_3mnm"><img src="./Thế Giới Di Động Samsung, Iphone, Máy Tính Bảng Xách Tay Giá Rẻ _ Sendo.vn_files/UFyu31U3rY5GOSM0Kokv_simg_de2fe0_250x250_maxb.jpg" className=" lazyloaded" data-src="//media3.scdn.vn/img4/2021/06_22/UFyu31U3rY5GOSM0Kokv_simg_de2fe0_250x250_maxb.jpg" />
//                                                             </figure>
//                                                             <div className="groupDiscount_199p" />
//                                                         </div>
//                                                         <div className="caption_2Jn3">
//                                                             <div className="promBanner_3cxp promList_2Jno" />
//                                                             <h3 className="productName_u171"><span className="truncateMedium_Tofh">Vsmart_ARIS</span></h3>
//                                                             <div className="productPrice_1RFY"><strong className="currentPrice_2hr9">6.900.000đ</strong></div>
//                                                             <div className="info_3lhu">
//                                                                 <div /><span className="orderCount_3rDn"><svg width="1em" height="1em" viewBox="0 0 32 32" className="icon_Mf-x iconSmall_2eXS">
//                                                                     <path d="M27.292 15.496l-10.8-10.8A2.378 2.378 0 0014.808 4H6.4C5.08 4 4 5.08 4 6.4v8.4c0 .66.264 1.26.708 1.704l10.8 10.8A2.385 2.385 0 0017.2 28h.012c.658 0 1.253-.271 1.679-.708l8.4-8.4a2.342 2.342 0 00.708-1.68v-.013.001c0-.66-.276-1.272-.708-1.704zM8.2 10c-.996 0-1.8-.804-1.8-1.8s.804-1.8 1.8-1.8 1.8.804 1.8 1.8S9.196 10 8.2 10z">
//                                                                     </path>
//                                                                 </svg><span className="textSmall_hRbk">3</span></span>
//                                                             </div>
//                                                             <div className="footer_2CrX"><span className="shopName_4r40"><span className="textSmall_hRbk textOverflow_3gco">Hoatay273</span></span><span className="textSmall_hRbk textOverflow_3gco locationName_3SN5">TP.HCM</span></div>
//                                                         </div>
//                                                     </div>
//                                                 </a><a aria-label="item_3x07" href="https://www.sendo.vn/dien-thoai-iphone-xs-max-quoc-te-256gb-fullbox-46161326.html?source_block_id=listing_products&source_info=desktop2_60___session_key___8b46e440-dd86-441d-bd3a-b27f88cb1014_-5_algo13_0_29_2_-1&source_page_id=cate1_vasup_desc" className="item_3x07">
//                                                     <div className="card_3Vc8">
//                                                         <div className="thumbnail_3tZG">
//                                                             <figure className="image_3mnm"><img src="./Thế Giới Di Động Samsung, Iphone, Máy Tính Bảng Xách Tay Giá Rẻ _ Sendo.vn_files/p9Buiz41Nif6OREznlZC_simg_de2fe0_250x250_maxb.jpg" className=" lazyloaded" data-src="//media3.scdn.vn/img4/2021/06_21/p9Buiz41Nif6OREznlZC_simg_de2fe0_250x250_maxb.jpg" />
//                                                             </figure>
//                                                             <div className="groupDiscount_199p"><span className="discountBadge_1GZz">12%</span></div>
//                                                         </div>
//                                                         <div className="caption_2Jn3">
//                                                             <div className="promBanner_3cxp promList_2Jno" />
//                                                             <h3 className="productName_u171"><span className="truncateMedium_Tofh">Điện thoại iphone xs max quốc
//                                                                 tế 256Gb fullbox</span></h3>
//                                                             <div className="productPrice_1RFY"><strong className="currentPrice_2hr9">10.900.000đ -
//                                                                 11.500.000đ</strong><strong className="oldPrice_itl0">13.000.000đ</strong></div>
//                                                             <div className="info_3lhu">
//                                                                 <div /><span className="orderCount_3rDn"><svg width="1em" height="1em" viewBox="0 0 32 32" className="icon_Mf-x iconSmall_2eXS">
//                                                                     <path d="M27.292 15.496l-10.8-10.8A2.378 2.378 0 0014.808 4H6.4C5.08 4 4 5.08 4 6.4v8.4c0 .66.264 1.26.708 1.704l10.8 10.8A2.385 2.385 0 0017.2 28h.012c.658 0 1.253-.271 1.679-.708l8.4-8.4a2.342 2.342 0 00.708-1.68v-.013.001c0-.66-.276-1.272-.708-1.704zM8.2 10c-.996 0-1.8-.804-1.8-1.8s.804-1.8 1.8-1.8 1.8.804 1.8 1.8S9.196 10 8.2 10z">
//                                                                     </path>
//                                                                 </svg><span className="textSmall_hRbk">1</span></span>
//                                                             </div>
//                                                             <div className="footer_2CrX"><span className="shopName_4r40"><span className="textSmall_hRbk textOverflow_3gco">King Of Mobile</span></span><span className="textSmall_hRbk textOverflow_3gco locationName_3SN5">Nam Định</span></div>
//                                                         </div>
//                                                     </div>
//                                                 </a><a aria-label="item_3x07" href="https://www.sendo.vn/dien-thoai-cu-43494177.html?source_block_id=listing_products&source_info=desktop2_60___session_key___8b46e440-dd86-441d-bd3a-b27f88cb1014_-5_algo13_0_30_2_-1&source_page_id=cate1_vasup_desc" className="item_3x07">
//                                                     <div className="card_3Vc8">
//                                                         <div className="thumbnail_3tZG">
//                                                             <figure className="image_3mnm"><img src="./Thế Giới Di Động Samsung, Iphone, Máy Tính Bảng Xách Tay Giá Rẻ _ Sendo.vn_files/tt17a68IsndHbQuWhjw0_simg_de2fe0_250x250_maxb.jpg" className=" lazyloaded" data-src="//media3.scdn.vn/img4/2021/05_06/tt17a68IsndHbQuWhjw0_simg_de2fe0_250x250_maxb.jpg" />
//                                                             </figure>
//                                                             <div className="groupDiscount_199p" />
//                                                         </div>
//                                                         <div className="caption_2Jn3">
//                                                             <div className="promBanner_3cxp promList_2Jno" />
//                                                             <h3 className="productName_u171"><span className="truncateMedium_Tofh"><img src="./Thế Giới Di Động Samsung, Iphone, Máy Tính Bảng Xách Tay Giá Rẻ _ Sendo.vn_files/h6fJaiL5WkEbDU2eQRZb.png" alt="shop-plus" className="shopPlus_zM6- size-md_1G43" />điện thoại cũ</span></h3>
//                                                             <div className="productPrice_1RFY"><strong className="currentPrice_2hr9">1.200.000đ</strong></div>
//                                                             <div className="info_3lhu">
//                                                                 <div /><span className="orderCount_3rDn"><svg width="1em" height="1em" viewBox="0 0 32 32" className="icon_Mf-x iconSmall_2eXS">
//                                                                     <path d="M27.292 15.496l-10.8-10.8A2.378 2.378 0 0014.808 4H6.4C5.08 4 4 5.08 4 6.4v8.4c0 .66.264 1.26.708 1.704l10.8 10.8A2.385 2.385 0 0017.2 28h.012c.658 0 1.253-.271 1.679-.708l8.4-8.4a2.342 2.342 0 00.708-1.68v-.013.001c0-.66-.276-1.272-.708-1.704zM8.2 10c-.996 0-1.8-.804-1.8-1.8s.804-1.8 1.8-1.8 1.8.804 1.8 1.8S9.196 10 8.2 10z">
//                                                                     </path>
//                                                                 </svg><span className="textSmall_hRbk">1</span></span>
//                                                             </div>
//                                                             <div className="footer_2CrX"><span className="shopName_4r40"><span className="textSmall_hRbk textOverflow_3gco">THT</span></span><span className="textSmall_hRbk textOverflow_3gco locationName_3SN5">Hà Nam</span></div>
//                                                         </div>
//                                                     </div>
//                                                 </a></div>
//                                         </div>
//                                         <div style={{ height: '387.2px', left: '0px', position: 'absolute', top: '2323.2px', width: '100%' }}>
//                                             <div className="list_1OKC grid5_3JhR"><a aria-label="item_3x07" href="https://www.sendo.vn/con-dung-tot-pin-xai-1-ngay-43493081.html?source_block_id=listing_products&source_info=desktop2_60___session_key___8b46e440-dd86-441d-bd3a-b27f88cb1014_-5_algo13_0_31_2_-1&source_page_id=cate1_vasup_desc" className="item_3x07">
//                                                 <div className="card_3Vc8">
//                                                     <div className="thumbnail_3tZG">
//                                                         <figure className="image_3mnm"><img src="./Thế Giới Di Động Samsung, Iphone, Máy Tính Bảng Xách Tay Giá Rẻ _ Sendo.vn_files/L1qWSlCSto0L4QMyeKKy_simg_de2fe0_250x250_maxb.jpg" className=" lazyloaded" data-src="//media3.scdn.vn/img4/2021/05_06/L1qWSlCSto0L4QMyeKKy_simg_de2fe0_250x250_maxb.jpg" />
//                                                         </figure>
//                                                         <div className="groupDiscount_199p" />
//                                                     </div>
//                                                     <div className="caption_2Jn3">
//                                                         <div className="promBanner_3cxp promList_2Jno" />
//                                                         <h3 className="productName_u171"><span className="truncateMedium_Tofh"><img src="./Thế Giới Di Động Samsung, Iphone, Máy Tính Bảng Xách Tay Giá Rẻ _ Sendo.vn_files/h6fJaiL5WkEbDU2eQRZb.png" alt="shop-plus" className="shopPlus_zM6- size-md_1G43" />còn dùng tốt,pin xài 1 ngày</span>
//                                                         </h3>
//                                                         <div className="productPrice_1RFY"><strong className="currentPrice_2hr9">999.000đ</strong></div>
//                                                         <div className="info_3lhu">
//                                                             <div /><span className="orderCount_3rDn"><svg width="1em" height="1em" viewBox="0 0 32 32" className="icon_Mf-x iconSmall_2eXS">
//                                                                 <path d="M27.292 15.496l-10.8-10.8A2.378 2.378 0 0014.808 4H6.4C5.08 4 4 5.08 4 6.4v8.4c0 .66.264 1.26.708 1.704l10.8 10.8A2.385 2.385 0 0017.2 28h.012c.658 0 1.253-.271 1.679-.708l8.4-8.4a2.342 2.342 0 00.708-1.68v-.013.001c0-.66-.276-1.272-.708-1.704zM8.2 10c-.996 0-1.8-.804-1.8-1.8s.804-1.8 1.8-1.8 1.8.804 1.8 1.8S9.196 10 8.2 10z">
//                                                                 </path>
//                                                             </svg><span className="textSmall_hRbk">2</span></span>
//                                                         </div>
//                                                         <div className="footer_2CrX"><span className="shopName_4r40"><span className="textSmall_hRbk textOverflow_3gco">THT</span></span><span className="textSmall_hRbk textOverflow_3gco locationName_3SN5">Hà Nam</span></div>
//                                                     </div>
//                                                 </div>
//                                             </a><a aria-label="item_3x07" href="https://www.sendo.vn/remid-note-9s-6128g-full-new-1-thang-43120222.html?source_block_id=listing_products&source_info=desktop2_60___session_key___8b46e440-dd86-441d-bd3a-b27f88cb1014_-5_algo13_0_32_2_-1&source_page_id=cate1_vasup_desc" className="item_3x07">
//                                                     <div className="card_3Vc8">
//                                                         <div className="thumbnail_3tZG">
//                                                             <figure className="image_3mnm"><img src="./Thế Giới Di Động Samsung, Iphone, Máy Tính Bảng Xách Tay Giá Rẻ _ Sendo.vn_files/6EOcKXOGY1UqK7VW9CS4_simg_de2fe0_250x250_maxb.jpg" className=" lazyloaded" data-src="//media3.scdn.vn/img4/2021/04_28/6EOcKXOGY1UqK7VW9CS4_simg_de2fe0_250x250_maxb.jpg" />
//                                                             </figure>
//                                                             <div className="groupDiscount_199p" />
//                                                         </div>
//                                                         <div className="caption_2Jn3">
//                                                             <div className="promBanner_3cxp promList_2Jno" />
//                                                             <h3 className="productName_u171"><span className="truncateMedium_Tofh">Remid note 9s 6/128G Full New
//                                                                 1 Tháng</span></h3>
//                                                             <div className="productPrice_1RFY"><strong className="currentPrice_2hr9">5.500.000đ</strong></div>
//                                                             <div className="info_3lhu">
//                                                                 <div /><span className="orderCount_3rDn"><svg width="1em" height="1em" viewBox="0 0 32 32" className="icon_Mf-x iconSmall_2eXS">
//                                                                     <path d="M27.292 15.496l-10.8-10.8A2.378 2.378 0 0014.808 4H6.4C5.08 4 4 5.08 4 6.4v8.4c0 .66.264 1.26.708 1.704l10.8 10.8A2.385 2.385 0 0017.2 28h.012c.658 0 1.253-.271 1.679-.708l8.4-8.4a2.342 2.342 0 00.708-1.68v-.013.001c0-.66-.276-1.272-.708-1.704zM8.2 10c-.996 0-1.8-.804-1.8-1.8s.804-1.8 1.8-1.8 1.8.804 1.8 1.8S9.196 10 8.2 10z">
//                                                                     </path>
//                                                                 </svg><span className="textSmall_hRbk">1</span></span>
//                                                             </div>
//                                                             <div className="footer_2CrX"><span className="shopName_4r40"><span className="textSmall_hRbk textOverflow_3gco">Vkan</span></span><span className="textSmall_hRbk textOverflow_3gco locationName_3SN5">Long An</span></div>
//                                                         </div>
//                                                     </div>
//                                                 </a><a aria-label="item_3x07" href="https://www.sendo.vn/nokia-6300-42629437.html?source_block_id=listing_products&source_info=desktop2_60___session_key___8b46e440-dd86-441d-bd3a-b27f88cb1014_-5_algo13_0_33_2_-1&source_page_id=cate1_vasup_desc" className="item_3x07">
//                                                     <div className="card_3Vc8">
//                                                         <div className="thumbnail_3tZG">
//                                                             <figure className="image_3mnm"><img src="./Thế Giới Di Động Samsung, Iphone, Máy Tính Bảng Xách Tay Giá Rẻ _ Sendo.vn_files/PRPtabvHGs3OeOqZ6JwV_simg_de2fe0_250x250_maxb.jpg" className=" lazyloaded" data-src="//media3.scdn.vn/img4/2021/04_18/PRPtabvHGs3OeOqZ6JwV_simg_de2fe0_250x250_maxb.jpg" />
//                                                             </figure>
//                                                             <div className="groupDiscount_199p" />
//                                                         </div>
//                                                         <div className="caption_2Jn3">
//                                                             <div className="promBanner_3cxp promList_2Jno" />
//                                                             <h3 className="productName_u171"><span className="truncateMedium_Tofh">NOKIA 6300</span></h3>
//                                                             <div className="productPrice_1RFY"><strong className="currentPrice_2hr9">550.000đ</strong></div>
//                                                             <div className="info_3lhu">
//                                                                 <div />
//                                                             </div>
//                                                             <div className="footer_2CrX"><span className="shopName_4r40"><span className="textSmall_hRbk textOverflow_3gco">Thanh Nhã 0101</span></span><span className="textSmall_hRbk textOverflow_3gco locationName_3SN5">TP.HCM</span></div>
//                                                         </div>
//                                                     </div>
//                                                 </a><a aria-label="item_3x07" href="https://www.sendo.vn/google-pixel-3a-ban-zin-42464433.html?source_block_id=listing_products&source_info=desktop2_60___session_key___8b46e440-dd86-441d-bd3a-b27f88cb1014_-5_algo13_0_34_2_-1&source_page_id=cate1_vasup_desc" className="item_3x07">
//                                                     <div className="card_3Vc8">
//                                                         <div className="thumbnail_3tZG">
//                                                             <figure className="image_3mnm"><img src="./Thế Giới Di Động Samsung, Iphone, Máy Tính Bảng Xách Tay Giá Rẻ _ Sendo.vn_files/DOD3wlVX7fNJ6GDi7bXe_simg_de2fe0_250x250_maxb.jpg" className=" lazyloaded" data-src="//media3.scdn.vn/img4/2021/04_15/DOD3wlVX7fNJ6GDi7bXe_simg_de2fe0_250x250_maxb.jpg" />
//                                                             </figure>
//                                                             <div className="groupDiscount_199p" />
//                                                         </div>
//                                                         <div className="caption_2Jn3">
//                                                             <div className="promBanner_3cxp promList_2Jno" />
//                                                             <h3 className="productName_u171"><span className="truncateMedium_Tofh">google pixel 3a bản
//                                                                 zin</span></h3>
//                                                             <div className="productPrice_1RFY"><strong className="currentPrice_2hr9">2.500.000đ</strong></div>
//                                                             <div className="info_3lhu">
//                                                                 <div /><span className="orderCount_3rDn"><svg width="1em" height="1em" viewBox="0 0 32 32" className="icon_Mf-x iconSmall_2eXS">
//                                                                     <path d="M27.292 15.496l-10.8-10.8A2.378 2.378 0 0014.808 4H6.4C5.08 4 4 5.08 4 6.4v8.4c0 .66.264 1.26.708 1.704l10.8 10.8A2.385 2.385 0 0017.2 28h.012c.658 0 1.253-.271 1.679-.708l8.4-8.4a2.342 2.342 0 00.708-1.68v-.013.001c0-.66-.276-1.272-.708-1.704zM8.2 10c-.996 0-1.8-.804-1.8-1.8s.804-1.8 1.8-1.8 1.8.804 1.8 1.8S9.196 10 8.2 10z">
//                                                                     </path>
//                                                                 </svg><span className="textSmall_hRbk">2</span></span>
//                                                             </div>
//                                                             <div className="footer_2CrX"><span className="shopName_4r40"><span className="textSmall_hRbk textOverflow_3gco">thành phát mobile</span></span><span className="textSmall_hRbk textOverflow_3gco locationName_3SN5">Quảng Ninh</span></div>
//                                                         </div>
//                                                     </div>
//                                                 </a><a aria-label="item_3x07" href="https://www.sendo.vn/google-pixel-4xl-ban-qt-42438144.html?source_block_id=listing_products&source_info=desktop2_60___session_key___8b46e440-dd86-441d-bd3a-b27f88cb1014_-5_algo13_0_35_2_-1&source_page_id=cate1_vasup_desc" className="item_3x07">
//                                                     <div className="card_3Vc8">
//                                                         <div className="thumbnail_3tZG">
//                                                             <figure className="image_3mnm"><img src="./Thế Giới Di Động Samsung, Iphone, Máy Tính Bảng Xách Tay Giá Rẻ _ Sendo.vn_files/xUjgAToObDBQ0IK6frXc_simg_de2fe0_250x250_maxb.jpg" className=" lazyloaded" data-src="//media3.scdn.vn/img4/2021/04_14/xUjgAToObDBQ0IK6frXc_simg_de2fe0_250x250_maxb.jpg" />
//                                                             </figure>
//                                                             <div className="groupDiscount_199p" />
//                                                         </div>
//                                                         <div className="caption_2Jn3">
//                                                             <div className="promBanner_3cxp promList_2Jno" />
//                                                             <h3 className="productName_u171"><span className="truncateMedium_Tofh">google pixel 4xl bản
//                                                                 qt</span></h3>
//                                                             <div className="productPrice_1RFY"><strong className="currentPrice_2hr9">7.800.000đ</strong></div>
//                                                             <div className="info_3lhu">
//                                                                 <div />
//                                                             </div>
//                                                             <div className="footer_2CrX"><span className="shopName_4r40"><span className="textSmall_hRbk textOverflow_3gco">thành phát mobile</span></span><span className="textSmall_hRbk textOverflow_3gco locationName_3SN5">Quảng Ninh</span></div>
//                                                         </div>
//                                                     </div>
//                                                 </a></div>
//                                         </div>
//                                         <div style={{ height: '387.2px', left: '0px', position: 'absolute', top: '2710.4px', width: '100%' }}>
//                                             <div className="list_1OKC grid5_3JhR"><a aria-label="item_3x07" href="https://www.sendo.vn/khai-truong-sale-ip12-pro-max-cho-nguoi-may-man-dau-tien-42336967.html?source_block_id=listing_products&source_info=desktop2_60___session_key___8b46e440-dd86-441d-bd3a-b27f88cb1014_-5_algo13_0_36_2_-1&source_page_id=cate1_vasup_desc" className="item_3x07">
//                                                 <div className="card_3Vc8">
//                                                     <div className="thumbnail_3tZG">
//                                                         <figure className="image_3mnm"><img src="./Thế Giới Di Động Samsung, Iphone, Máy Tính Bảng Xách Tay Giá Rẻ _ Sendo.vn_files/QLoQuy0dXFSW4f6FE1Sf_simg_de2fe0_250x250_maxb.jpg" className=" lazyloaded" data-src="//media3.scdn.vn/img4/2021/04_09/QLoQuy0dXFSW4f6FE1Sf_simg_de2fe0_250x250_maxb.jpg" />
//                                                         </figure>
//                                                         <div className="groupDiscount_199p" />
//                                                     </div>
//                                                     <div className="caption_2Jn3">
//                                                         <div className="promBanner_3cxp promList_2Jno" />
//                                                         <h3 className="productName_u171"><span className="truncateMedium_Tofh">khai trương sale ip12 pro max
//                                                             cho người may mắn đầu tiền</span></h3>
//                                                         <div className="productPrice_1RFY"><strong className="currentPrice_2hr9">40.000.000đ</strong></div>
//                                                         <div className="info_3lhu">
//                                                             <div /><span className="orderCount_3rDn"><svg width="1em" height="1em" viewBox="0 0 32 32" className="icon_Mf-x iconSmall_2eXS">
//                                                                 <path d="M27.292 15.496l-10.8-10.8A2.378 2.378 0 0014.808 4H6.4C5.08 4 4 5.08 4 6.4v8.4c0 .66.264 1.26.708 1.704l10.8 10.8A2.385 2.385 0 0017.2 28h.012c.658 0 1.253-.271 1.679-.708l8.4-8.4a2.342 2.342 0 00.708-1.68v-.013.001c0-.66-.276-1.272-.708-1.704zM8.2 10c-.996 0-1.8-.804-1.8-1.8s.804-1.8 1.8-1.8 1.8.804 1.8 1.8S9.196 10 8.2 10z">
//                                                                 </path>
//                                                             </svg><span className="textSmall_hRbk">2</span></span>
//                                                         </div>
//                                                         <div className="footer_2CrX"><span className="shopName_4r40"><span className="textSmall_hRbk textOverflow_3gco">TND2304</span></span><span className="textSmall_hRbk textOverflow_3gco locationName_3SN5">Khánh Hòa</span></div>
//                                                     </div>
//                                                 </div>
//                                             </a><a aria-label="item_3x07" href="https://www.sendo.vn/duoc-kiem-hang-truoc-dien-thoai-samsung-a7-2018-chinh-hang-41208210.html?source_block_id=listing_products&source_info=desktop2_60___session_key___8b46e440-dd86-441d-bd3a-b27f88cb1014_-5_algo13_0_37_2_-1&source_page_id=cate1_vasup_desc" className="item_3x07">
//                                                     <div className="card_3Vc8">
//                                                         <div className="thumbnail_3tZG">
//                                                             <figure className="image_3mnm"><img src="./Thế Giới Di Động Samsung, Iphone, Máy Tính Bảng Xách Tay Giá Rẻ _ Sendo.vn_files/MSLJDEdkrWzza4wXB9Vk_simg_de2fe0_250x250_maxb.jpg" className=" lazyloaded" data-src="//media3.scdn.vn/img4/2021/03_02/MSLJDEdkrWzza4wXB9Vk_simg_de2fe0_250x250_maxb.jpg" />
//                                                             </figure>
//                                                             <div className="groupDiscount_199p" />
//                                                         </div>
//                                                         <div className="caption_2Jn3">
//                                                             <div className="promBanner_3cxp promList_2Jno" />
//                                                             <h3 className="productName_u171"><span className="truncateMedium_Tofh"><img src="./Thế Giới Di Động Samsung, Iphone, Máy Tính Bảng Xách Tay Giá Rẻ _ Sendo.vn_files/h6fJaiL5WkEbDU2eQRZb.png" alt="shop-plus" className="shopPlus_zM6- size-md_1G43" />[ĐƯỢC KIỂM HÀNG TRƯỚC] Điện thoại
//                                                                 samsung A7 2018 chính hãng</span></h3>
//                                                             <div className="productPrice_1RFY"><strong className="currentPrice_2hr9">2.950.000đ</strong></div>
//                                                             <div className="info_3lhu">
//                                                                 <div /><span className="orderCount_3rDn"><svg width="1em" height="1em" viewBox="0 0 32 32" className="icon_Mf-x iconSmall_2eXS">
//                                                                     <path d="M27.292 15.496l-10.8-10.8A2.378 2.378 0 0014.808 4H6.4C5.08 4 4 5.08 4 6.4v8.4c0 .66.264 1.26.708 1.704l10.8 10.8A2.385 2.385 0 0017.2 28h.012c.658 0 1.253-.271 1.679-.708l8.4-8.4a2.342 2.342 0 00.708-1.68v-.013.001c0-.66-.276-1.272-.708-1.704zM8.2 10c-.996 0-1.8-.804-1.8-1.8s.804-1.8 1.8-1.8 1.8.804 1.8 1.8S9.196 10 8.2 10z">
//                                                                     </path>
//                                                                 </svg><span className="textSmall_hRbk">1</span></span>
//                                                             </div>
//                                                             <div className="footer_2CrX"><span className="shopName_4r40"><span className="textSmall_hRbk textOverflow_3gco">Minhtammobile</span></span><span className="textSmall_hRbk textOverflow_3gco locationName_3SN5">TP.HCM</span></div>
//                                                         </div>
//                                                     </div>
//                                                 </a><a aria-label="item_3x07" href="https://www.sendo.vn/samsung-galaxy-s10e-128gb-ban-my-like-new-37250086.html?source_block_id=listing_products&source_info=desktop2_60___session_key___8b46e440-dd86-441d-bd3a-b27f88cb1014_-5_algo13_0_38_2_-1&source_page_id=cate1_vasup_desc" className="item_3x07">
//                                                     <div className="card_3Vc8">
//                                                         <div className="thumbnail_3tZG">
//                                                             <figure className="image_3mnm"><img src="./Thế Giới Di Động Samsung, Iphone, Máy Tính Bảng Xách Tay Giá Rẻ _ Sendo.vn_files/20kKnqyGFVRLRI37N5Cf_simg_de2fe0_250x250_maxb.jpg" className=" lazyloaded" data-src="//media3.scdn.vn/img4/2020/11_12/20kKnqyGFVRLRI37N5Cf_simg_de2fe0_250x250_maxb.jpg" />
//                                                             </figure>
//                                                             <div className="groupDiscount_199p" />
//                                                         </div>
//                                                         <div className="caption_2Jn3">
//                                                             <div className="promBanner_3cxp promList_2Jno" />
//                                                             <h3 className="productName_u171"><span className="truncateMedium_Tofh">Samsung galaxy S10e 128GB
//                                                                 (Bản Mỹ) like new</span></h3>
//                                                             <div className="productPrice_1RFY"><strong className="currentPrice_2hr9">7.950.000đ</strong></div>
//                                                             <div className="info_3lhu">
//                                                                 <div /><span className="orderCount_3rDn"><svg width="1em" height="1em" viewBox="0 0 32 32" className="icon_Mf-x iconSmall_2eXS">
//                                                                     <path d="M27.292 15.496l-10.8-10.8A2.378 2.378 0 0014.808 4H6.4C5.08 4 4 5.08 4 6.4v8.4c0 .66.264 1.26.708 1.704l10.8 10.8A2.385 2.385 0 0017.2 28h.012c.658 0 1.253-.271 1.679-.708l8.4-8.4a2.342 2.342 0 00.708-1.68v-.013.001c0-.66-.276-1.272-.708-1.704zM8.2 10c-.996 0-1.8-.804-1.8-1.8s.804-1.8 1.8-1.8 1.8.804 1.8 1.8S9.196 10 8.2 10z">
//                                                                     </path>
//                                                                 </svg><span className="textSmall_hRbk">1</span></span>
//                                                             </div>
//                                                             <div className="footer_2CrX"><span className="shopName_4r40"><span className="textSmall_hRbk textOverflow_3gco">Sĩ Mobile</span></span><span className="textSmall_hRbk textOverflow_3gco locationName_3SN5">TP.HCM</span></div>
//                                                         </div>
//                                                     </div>
//                                                 </a><a aria-label="item_3x07" href="https://www.sendo.vn/sony-xperia-1-dual-sim-quoc-te-like-new-99-fullbox-37170219.html?source_block_id=listing_products&source_info=desktop2_60___session_key___8b46e440-dd86-441d-bd3a-b27f88cb1014_-5_algo13_0_39_2_-1&source_page_id=cate1_vasup_desc" className="item_3x07">
//                                                     <div className="card_3Vc8">
//                                                         <div className="thumbnail_3tZG">
//                                                             <figure className="image_3mnm"><img src="./Thế Giới Di Động Samsung, Iphone, Máy Tính Bảng Xách Tay Giá Rẻ _ Sendo.vn_files/cLCP9m0kpjkvsJtzzxfO_simg_de2fe0_250x250_maxb.jpg" className=" lazyloaded" data-src="//media3.scdn.vn/img4/2020/11_09/cLCP9m0kpjkvsJtzzxfO_simg_de2fe0_250x250_maxb.jpg" />
//                                                             </figure>
//                                                             <div className="groupDiscount_199p" />
//                                                         </div>
//                                                         <div className="caption_2Jn3">
//                                                             <div className="promBanner_3cxp promList_2Jno" />
//                                                             <h3 className="productName_u171"><span className="truncateMedium_Tofh">Sony Xperia 1 Dual Sim Quốc
//                                                                 Tế like new 99% fullbox</span></h3>
//                                                             <div className="productPrice_1RFY"><strong className="currentPrice_2hr9">11.650.000đ</strong></div>
//                                                             <div className="info_3lhu">
//                                                                 <div />
//                                                             </div>
//                                                             <div className="footer_2CrX"><span className="shopName_4r40"><span className="textSmall_hRbk textOverflow_3gco">Sĩ Mobile</span></span><span className="textSmall_hRbk textOverflow_3gco locationName_3SN5">TP.HCM</span></div>
//                                                         </div>
//                                                     </div>
//                                                 </a><a aria-label="item_3x07" href="https://www.sendo.vn/dien-thoai-poco-x3-gt-8gb128gb-ha-ng-chi-nh-ha-ng-nguyen-seal-38322238.html?source_block_id=listing_products&source_info=desktop2_60___session_key___8b46e440-dd86-441d-bd3a-b27f88cb1014_-5_algo13_0_40_2_-1&source_page_id=cate1_vasup_desc" className="item_3x07">
//                                                     <div className="card_3Vc8">
//                                                         <div className="thumbnail_3tZG">
//                                                             <figure className="image_3mnm"><img src="./Thế Giới Di Động Samsung, Iphone, Máy Tính Bảng Xách Tay Giá Rẻ _ Sendo.vn_files/Tlg5U0GcwlGtsXvCrwDz_simg_de2fe0_250x250_maxb.jpg" className=" lazyloaded" data-src="//media3.scdn.vn/img4/2022/02_18/Tlg5U0GcwlGtsXvCrwDz_simg_de2fe0_250x250_maxb.jpg" />
//                                                             </figure>
//                                                             <div className="groupDiscount_199p"><span className="discountBadge_1GZz">21%</span></div>
//                                                         </div>
//                                                         <div className="caption_2Jn3">
//                                                             <div className="promBanner_3cxp promList_2Jno" />
//                                                             <h3 className="productName_u171"><span className="truncateMedium_Tofh">Điện thoại POCO X3 GT
//                                                                 (8GB/128GB) Hàng chính hãng. Nguyên seal</span></h3>
//                                                             <div className="productPrice_1RFY"><strong className="currentPrice_2hr9">6.250.000đ -
//                                                                 7.900.000đ</strong><strong className="oldPrice_itl0">7.900.000đ</strong></div>
//                                                             <div className="info_3lhu">
//                                                                 <div>
//                                                                     <div className="stars_l6c- star20_1zW7 small_1aJr" /><span className="ratingTotal_2Msc">(1)</span>
//                                                                 </div><span className="orderCount_3rDn"><svg width="1em" height="1em" viewBox="0 0 32 32" className="icon_Mf-x iconSmall_2eXS">
//                                                                     <path d="M27.292 15.496l-10.8-10.8A2.378 2.378 0 0014.808 4H6.4C5.08 4 4 5.08 4 6.4v8.4c0 .66.264 1.26.708 1.704l10.8 10.8A2.385 2.385 0 0017.2 28h.012c.658 0 1.253-.271 1.679-.708l8.4-8.4a2.342 2.342 0 00.708-1.68v-.013.001c0-.66-.276-1.272-.708-1.704zM8.2 10c-.996 0-1.8-.804-1.8-1.8s.804-1.8 1.8-1.8 1.8.804 1.8 1.8S9.196 10 8.2 10z">
//                                                                     </path>
//                                                                 </svg><span className="textSmall_hRbk">85</span></span>
//                                                             </div>
//                                                             <div className="footer_2CrX"><span className="shopName_4r40"><span className="textSmall_hRbk textOverflow_3gco">SmartVN</span></span><span className="textSmall_hRbk textOverflow_3gco locationName_3SN5">TP.HCM</span></div>
//                                                         </div>
//                                                     </div>
//                                                 </a></div>
//                                         </div>
//                                         <div style={{ height: '387.2px', left: '0px', position: 'absolute', top: '3097.6px', width: '100%' }}>
//                                             <div className="list_1OKC grid5_3JhR"><a aria-label="item_3x07" href="https://www.sendo.vn/dien-thoai-iphone-xs-max-256gb-23590494.html?source_block_id=listing_products&source_info=desktop2_60___session_key___8b46e440-dd86-441d-bd3a-b27f88cb1014_-5_algo13_0_41_2_-1&source_page_id=cate1_vasup_desc" className="item_3x07">
//                                                 <div className="card_3Vc8">
//                                                     <div className="thumbnail_3tZG">
//                                                         <figure className="image_3mnm"><img src="./Thế Giới Di Động Samsung, Iphone, Máy Tính Bảng Xách Tay Giá Rẻ _ Sendo.vn_files/jxdKky_simg_de2fe0_250x250_maxb.jpg" className=" lazyloaded" data-src="//media3.scdn.vn/img3/2019/11_12/jxdKky_simg_de2fe0_250x250_maxb.jpg" />
//                                                         </figure>
//                                                         <div className="groupDiscount_199p"><span className="discountBadge_1GZz">36%</span></div><span className="videoBadge_1jgE"><img src="./Thế Giới Di Động Samsung, Iphone, Máy Tính Bảng Xách Tay Giá Rẻ _ Sendo.vn_files/Ev3MiuvzcYkH2xHWiVbE.png" alt="has-video" /></span>
//                                                     </div>
//                                                     <div className="caption_2Jn3">
//                                                         <div className="promBanner_3cxp promList_2Jno" />
//                                                         <h3 className="productName_u171"><span className="truncateMedium_Tofh">Điện thoại iPhone Xs Max
//                                                             256GB</span></h3>
//                                                         <div className="productPrice_1RFY"><strong className="currentPrice_2hr9">10.999.000đ -
//                                                             11.499.000đ</strong><strong className="oldPrice_itl0">16.999.000đ</strong></div>
//                                                         <div className="info_3lhu">
//                                                             <div>
//                                                                 <div className="stars_l6c- star4_1-Wk small_1aJr" /><span className="ratingTotal_2Msc">(1)</span>
//                                                             </div><span className="orderCount_3rDn"><svg width="1em" height="1em" viewBox="0 0 32 32" className="icon_Mf-x iconSmall_2eXS">
//                                                                 <path d="M27.292 15.496l-10.8-10.8A2.378 2.378 0 0014.808 4H6.4C5.08 4 4 5.08 4 6.4v8.4c0 .66.264 1.26.708 1.704l10.8 10.8A2.385 2.385 0 0017.2 28h.012c.658 0 1.253-.271 1.679-.708l8.4-8.4a2.342 2.342 0 00.708-1.68v-.013.001c0-.66-.276-1.272-.708-1.704zM8.2 10c-.996 0-1.8-.804-1.8-1.8s.804-1.8 1.8-1.8 1.8.804 1.8 1.8S9.196 10 8.2 10z">
//                                                                 </path>
//                                                             </svg><span className="textSmall_hRbk">34</span></span>
//                                                         </div>
//                                                         <div className="footer_2CrX"><span className="shopName_4r40"><span className="textSmall_hRbk textOverflow_3gco">techmobile09</span></span><span className="textSmall_hRbk textOverflow_3gco locationName_3SN5">HN</span></div>
//                                                     </div>
//                                                 </div>
//                                             </a><a aria-label="item_3x07" href="https://www.sendo.vn/iphone-xs-max-99-chinh-hang-ban-quoc-te-36973831.html?source_block_id=listing_products&source_info=desktop2_60___session_key___8b46e440-dd86-441d-bd3a-b27f88cb1014_-5_algo13_0_42_2_-1&source_page_id=cate1_vasup_desc" className="item_3x07">
//                                                     <div className="card_3Vc8">
//                                                         <div className="thumbnail_3tZG">
//                                                             <figure className="image_3mnm"><img src="./Thế Giới Di Động Samsung, Iphone, Máy Tính Bảng Xách Tay Giá Rẻ _ Sendo.vn_files/Zt9Q8lv33mVSjxc837Y2_simg_de2fe0_250x250_maxb.jpg" className=" lazyloaded" data-src="//media3.scdn.vn/img4/2020/03_05/Zt9Q8lv33mVSjxc837Y2_simg_de2fe0_250x250_maxb.jpg" />
//                                                             </figure>
//                                                             <div className="groupDiscount_199p"><span className="discountBadge_1GZz">37%</span></div><span className="videoBadge_1jgE"><img src="./Thế Giới Di Động Samsung, Iphone, Máy Tính Bảng Xách Tay Giá Rẻ _ Sendo.vn_files/Ev3MiuvzcYkH2xHWiVbE.png" alt="has-video" /></span>
//                                                         </div>
//                                                         <div className="caption_2Jn3">
//                                                             <div className="promBanner_3cxp promList_2Jno" />
//                                                             <h3 className="productName_u171"><span className="truncateMedium_Tofh">IPHONE XS MAX 99, CHÍNH HÃNG,
//                                                                 BẢN QUỐC TẾ</span></h3>
//                                                             <div className="productPrice_1RFY"><strong className="currentPrice_2hr9">10.199.000đ -
//                                                                 10.499.000đ</strong><strong className="oldPrice_itl0">15.990.000đ</strong></div>
//                                                             <div className="info_3lhu">
//                                                                 <div /><span className="orderCount_3rDn"><svg width="1em" height="1em" viewBox="0 0 32 32" className="icon_Mf-x iconSmall_2eXS">
//                                                                     <path d="M27.292 15.496l-10.8-10.8A2.378 2.378 0 0014.808 4H6.4C5.08 4 4 5.08 4 6.4v8.4c0 .66.264 1.26.708 1.704l10.8 10.8A2.385 2.385 0 0017.2 28h.012c.658 0 1.253-.271 1.679-.708l8.4-8.4a2.342 2.342 0 00.708-1.68v-.013.001c0-.66-.276-1.272-.708-1.704zM8.2 10c-.996 0-1.8-.804-1.8-1.8s.804-1.8 1.8-1.8 1.8.804 1.8 1.8S9.196 10 8.2 10z">
//                                                                     </path>
//                                                                 </svg><span className="textSmall_hRbk">71</span></span>
//                                                             </div>
//                                                             <div className="footer_2CrX"><span className="shopName_4r40"><span className="textSmall_hRbk textOverflow_3gco">techmobile09</span></span><span className="textSmall_hRbk textOverflow_3gco locationName_3SN5">HN</span></div>
//                                                         </div>
//                                                     </div>
//                                                 </a><a aria-label="item_3x07" href="https://www.sendo.vn/dien-thoai-iphone-xs-max-64gb-khong-face-id-hang-trung-bay-26700130.html?source_block_id=listing_products&source_info=desktop2_60___session_key___8b46e440-dd86-441d-bd3a-b27f88cb1014_-5_algo13_0_43_2_-1&source_page_id=cate1_vasup_desc" className="item_3x07">
//                                                     <div className="card_3Vc8">
//                                                         <div className="thumbnail_3tZG">
//                                                             <figure className="image_3mnm"><img src="./Thế Giới Di Động Samsung, Iphone, Máy Tính Bảng Xách Tay Giá Rẻ _ Sendo.vn_files/Zt9Q8lv33mVSjxc837Y2_simg_de2fe0_250x250_maxb.jpg" className=" lazyloaded" data-src="//media3.scdn.vn/img4/2020/03_05/Zt9Q8lv33mVSjxc837Y2_simg_de2fe0_250x250_maxb.jpg" />
//                                                             </figure>
//                                                             <div className="groupDiscount_199p"><span className="discountBadge_1GZz">33%</span></div><span className="videoBadge_1jgE"><img src="./Thế Giới Di Động Samsung, Iphone, Máy Tính Bảng Xách Tay Giá Rẻ _ Sendo.vn_files/Ev3MiuvzcYkH2xHWiVbE.png" alt="has-video" /></span>
//                                                         </div>
//                                                         <div className="caption_2Jn3">
//                                                             <div className="promBanner_3cxp promList_2Jno" />
//                                                             <h3 className="productName_u171"><span className="truncateMedium_Tofh">Điện thoại iPhone Xs Max 64GB
//                                                                 không face id hàng trưng bầy</span></h3>
//                                                             <div className="productPrice_1RFY"><strong className="currentPrice_2hr9">8.799.000đ</strong><strong className="oldPrice_itl0">13.000.000đ</strong></div>
//                                                             <div className="info_3lhu">
//                                                                 <div>
//                                                                     <div className="stars_l6c- star16_1BW_ small_1aJr" /><span className="ratingTotal_2Msc">(1)</span>
//                                                                 </div><span className="orderCount_3rDn"><svg width="1em" height="1em" viewBox="0 0 32 32" className="icon_Mf-x iconSmall_2eXS">
//                                                                     <path d="M27.292 15.496l-10.8-10.8A2.378 2.378 0 0014.808 4H6.4C5.08 4 4 5.08 4 6.4v8.4c0 .66.264 1.26.708 1.704l10.8 10.8A2.385 2.385 0 0017.2 28h.012c.658 0 1.253-.271 1.679-.708l8.4-8.4a2.342 2.342 0 00.708-1.68v-.013.001c0-.66-.276-1.272-.708-1.704zM8.2 10c-.996 0-1.8-.804-1.8-1.8s.804-1.8 1.8-1.8 1.8.804 1.8 1.8S9.196 10 8.2 10z">
//                                                                     </path>
//                                                                 </svg><span className="textSmall_hRbk">83</span></span>
//                                                             </div>
//                                                             <div className="footer_2CrX"><span className="shopName_4r40"><span className="textSmall_hRbk textOverflow_3gco">techmobile09</span></span><span className="textSmall_hRbk textOverflow_3gco locationName_3SN5">HN</span></div>
//                                                         </div>
//                                                     </div>
//                                                 </a><a aria-label="item_3x07" href="https://www.sendo.vn/dien-thoai-di-dong-vsmart-star-5-4g64gxanh-duongco-n-ba-o-ha-nh-to-i-tha-ng-122022-40671381.html?source_block_id=listing_products&source_info=desktop2_60___session_key___8b46e440-dd86-441d-bd3a-b27f88cb1014_-5_algo13_0_44_2_-1&source_page_id=cate1_vasup_desc" className="item_3x07">
//                                                     <div className="card_3Vc8">
//                                                         <div className="thumbnail_3tZG">
//                                                             <figure className="image_3mnm"><img src="./Thế Giới Di Động Samsung, Iphone, Máy Tính Bảng Xách Tay Giá Rẻ _ Sendo.vn_files/n6g5wWb2Ky9qELWxjq1z_simg_de2fe0_250x250_maxb.png" className=" lazyloaded" data-src="//media3.scdn.vn/img4/2022/03_30/n6g5wWb2Ky9qELWxjq1z_simg_de2fe0_250x250_maxb.png" />
//                                                             </figure>
//                                                             <div className="groupDiscount_199p" />
//                                                         </div>
//                                                         <div className="caption_2Jn3">
//                                                             <div className="promBanner_3cxp promList_2Jno" />
//                                                             <h3 className="productName_u171"><span className="truncateMedium_Tofh">Điện thoại di động Vsmart
//                                                                 Star 5 (4G/64G).Xanh Dương.Còn bảo hành tới tháng 12/2022</span></h3>
//                                                             <div className="productPrice_1RFY"><strong className="currentPrice_2hr9">2.450.000đ</strong></div>
//                                                             <div className="info_3lhu">
//                                                                 <div /><span className="orderCount_3rDn"><svg width="1em" height="1em" viewBox="0 0 32 32" className="icon_Mf-x iconSmall_2eXS">
//                                                                     <path d="M27.292 15.496l-10.8-10.8A2.378 2.378 0 0014.808 4H6.4C5.08 4 4 5.08 4 6.4v8.4c0 .66.264 1.26.708 1.704l10.8 10.8A2.385 2.385 0 0017.2 28h.012c.658 0 1.253-.271 1.679-.708l8.4-8.4a2.342 2.342 0 00.708-1.68v-.013.001c0-.66-.276-1.272-.708-1.704zM8.2 10c-.996 0-1.8-.804-1.8-1.8s.804-1.8 1.8-1.8 1.8.804 1.8 1.8S9.196 10 8.2 10z">
//                                                                     </path>
//                                                                 </svg><span className="textSmall_hRbk">2</span></span>
//                                                             </div>
//                                                             <div className="footer_2CrX"><span className="shopName_4r40"><span className="textSmall_hRbk textOverflow_3gco">SmartVN</span></span><span className="textSmall_hRbk textOverflow_3gco locationName_3SN5">TP.HCM</span></div>
//                                                         </div>
//                                                     </div>
//                                                 </a><a aria-label="item_3x07" href="https://www.sendo.vn/camera-phi-a-sau-cho-iphone-6s-39778043.html?source_block_id=listing_products&source_info=desktop2_60___session_key___8b46e440-dd86-441d-bd3a-b27f88cb1014_-5_algo13_0_45_2_-1&source_page_id=cate1_vasup_desc" className="item_3x07">
//                                                     <div className="card_3Vc8">
//                                                         <div className="thumbnail_3tZG">
//                                                             <figure className="image_3mnm"><img src="./Thế Giới Di Động Samsung, Iphone, Máy Tính Bảng Xách Tay Giá Rẻ _ Sendo.vn_files/JOBmorpGM5kbt0q9tkvk_simg_de2fe0_250x250_maxb.jpg" className=" lazyloaded" data-src="//media3.scdn.vn/img4/2021/01_13/JOBmorpGM5kbt0q9tkvk_simg_de2fe0_250x250_maxb.jpg" />
//                                                             </figure>
//                                                             <div className="groupDiscount_199p" />
//                                                         </div>
//                                                         <div className="caption_2Jn3">
//                                                             <div className="promBanner_3cxp promList_2Jno" />
//                                                             <h3 className="productName_u171"><span className="truncateMedium_Tofh">Camera phía sau cho Iphone
//                                                                 6s</span></h3>
//                                                             <div className="productPrice_1RFY"><strong className="currentPrice_2hr9">320.000đ</strong></div>
//                                                             <div className="info_3lhu">
//                                                                 <div />
//                                                             </div>
//                                                             <div className="footer_2CrX"><span className="shopName_4r40"><span className="textSmall_hRbk textOverflow_3gco">LeMnh</span></span><span className="textSmall_hRbk textOverflow_3gco locationName_3SN5">Đồng Tháp</span></div>
//                                                         </div>
//                                                     </div>
//                                                 </a></div>
//                                         </div>
//                                         <div style={{ height: '387.2px', left: '0px', position: 'absolute', top: '3484.8px', width: '100%' }}>
//                                             <div className="list_1OKC grid5_3JhR"><a aria-label="item_3x07" href="https://www.sendo.vn/dien-thoai-vsmart-aris-pro-86g128g-ha-ng-chi-nh-ha-ngnguyen-seal-ba-o-ha-nh-18-tha-ng-39135949.html?source_block_id=listing_products&source_info=desktop2_60___session_key___8b46e440-dd86-441d-bd3a-b27f88cb1014_-5_algo13_0_46_2_-1&source_page_id=cate1_vasup_desc" className="item_3x07">
//                                                 <div className="card_3Vc8">
//                                                     <div className="thumbnail_3tZG">
//                                                         <figure className="image_3mnm"><img src="./Thế Giới Di Động Samsung, Iphone, Máy Tính Bảng Xách Tay Giá Rẻ _ Sendo.vn_files/w0iTflcxqgOpWmoAQag4_simg_de2fe0_250x250_maxb.png" className=" lazyloaded" data-src="//media3.scdn.vn/img4/2021/12_20/w0iTflcxqgOpWmoAQag4_simg_de2fe0_250x250_maxb.png" />
//                                                         </figure>
//                                                         <div className="groupDiscount_199p"><span className="discountBadge_1GZz">42%</span></div>
//                                                     </div>
//                                                     <div className="caption_2Jn3">
//                                                         <div className="promBanner_3cxp promList_2Jno" />
//                                                         <h3 className="productName_u171"><span className="truncateMedium_Tofh">Điện thoại Vsmart Aris Pro
//                                                             (86G/128G). Hàng chính hãng.nguyên seal. Bảo hành 18 tháng</span></h3>
//                                                         <div className="productPrice_1RFY"><strong className="currentPrice_2hr9">5.190.000đ</strong><strong className="oldPrice_itl0">8.900.000đ</strong></div>
//                                                         <div className="info_3lhu">
//                                                             <div>
//                                                                 <div className="stars_l6c- star20_1zW7 small_1aJr" /><span className="ratingTotal_2Msc">(2)</span>
//                                                             </div><span className="orderCount_3rDn"><svg width="1em" height="1em" viewBox="0 0 32 32" className="icon_Mf-x iconSmall_2eXS">
//                                                                 <path d="M27.292 15.496l-10.8-10.8A2.378 2.378 0 0014.808 4H6.4C5.08 4 4 5.08 4 6.4v8.4c0 .66.264 1.26.708 1.704l10.8 10.8A2.385 2.385 0 0017.2 28h.012c.658 0 1.253-.271 1.679-.708l8.4-8.4a2.342 2.342 0 00.708-1.68v-.013.001c0-.66-.276-1.272-.708-1.704zM8.2 10c-.996 0-1.8-.804-1.8-1.8s.804-1.8 1.8-1.8 1.8.804 1.8 1.8S9.196 10 8.2 10z">
//                                                                 </path>
//                                                             </svg><span className="textSmall_hRbk">18</span></span>
//                                                         </div>
//                                                         <div className="footer_2CrX"><span className="shopName_4r40"><span className="textSmall_hRbk textOverflow_3gco">SmartVN</span></span><span className="textSmall_hRbk textOverflow_3gco locationName_3SN5">TP.HCM</span></div>
//                                                     </div>
//                                                 </div>
//                                             </a><a aria-label="item_3x07" href="https://www.sendo.vn/dien-thoai-danh-cho-nguoi-gia-goly-a16-40578914.html?source_block_id=listing_products&source_info=desktop2_60___session_key___8b46e440-dd86-441d-bd3a-b27f88cb1014_-5_algo13_0_47_2_-1&source_page_id=cate1_vasup_desc" className="item_3x07">
//                                                     <div className="card_3Vc8">
//                                                         <div className="thumbnail_3tZG">
//                                                             <figure className="image_3mnm"><img src="./Thế Giới Di Động Samsung, Iphone, Máy Tính Bảng Xách Tay Giá Rẻ _ Sendo.vn_files/lGx4nFUrUdJ4Rb9Gu0y3_simg_de2fe0_250x250_maxb.jpg" className=" lazyloaded" data-src="//media3.scdn.vn/img4/2021/01_23/lGx4nFUrUdJ4Rb9Gu0y3_simg_de2fe0_250x250_maxb.jpg" />
//                                                             </figure>
//                                                             <div className="groupDiscount_199p" />
//                                                         </div>
//                                                         <div className="caption_2Jn3">
//                                                             <div className="promBanner_3cxp promList_2Jno" />
//                                                             <h3 className="productName_u171"><span className="truncateMedium_Tofh">điện thoại dành cho người già
//                                                                 GoLY A16</span></h3>
//                                                             <div className="productPrice_1RFY"><strong className="currentPrice_2hr9">430.000đ</strong></div>
//                                                             <div className="info_3lhu">
//                                                                 <div />
//                                                             </div>
//                                                             <div className="footer_2CrX"><span className="shopName_4r40"><span className="textSmall_hRbk textOverflow_3gco">ĐỖ HỒNG 86</span></span><span className="textSmall_hRbk textOverflow_3gco locationName_3SN5">Hải Phòng</span></div>
//                                                         </div>
//                                                     </div>
//                                                 </a><a aria-label="item_3x07" href="https://www.sendo.vn/sony-xperia-1-mark-2-256gb-2-sim-quoc-te-moi-100-fullbox-37316705.html?source_block_id=listing_products&source_info=desktop2_60___session_key___8b46e440-dd86-441d-bd3a-b27f88cb1014_-5_algo13_0_48_2_-1&source_page_id=cate1_vasup_desc" className="item_3x07">
//                                                     <div className="card_3Vc8">
//                                                         <div className="thumbnail_3tZG">
//                                                             <figure className="image_3mnm"><img src="./Thế Giới Di Động Samsung, Iphone, Máy Tính Bảng Xách Tay Giá Rẻ _ Sendo.vn_files/pYIP9cJmjtfWHLCDZGnk_simg_de2fe0_250x250_maxb.jpg" className=" lazyloaded" data-src="//media3.scdn.vn/img4/2020/11_14/pYIP9cJmjtfWHLCDZGnk_simg_de2fe0_250x250_maxb.jpg" />
//                                                             </figure>
//                                                             <div className="groupDiscount_199p" />
//                                                         </div>
//                                                         <div className="caption_2Jn3">
//                                                             <div className="promBanner_3cxp promList_2Jno" />
//                                                             <h3 className="productName_u171"><span className="truncateMedium_Tofh">Sony Xperia 1 Mark 2 256GB 2
//                                                                 Sim (Quốc Tế) mới 100% fullbox</span></h3>
//                                                             <div className="productPrice_1RFY"><strong className="currentPrice_2hr9">23.650.000đ</strong></div>
//                                                             <div className="info_3lhu">
//                                                                 <div />
//                                                             </div>
//                                                             <div className="footer_2CrX"><span className="shopName_4r40"><span className="textSmall_hRbk textOverflow_3gco">Sĩ Mobile</span></span><span className="textSmall_hRbk textOverflow_3gco locationName_3SN5">TP.HCM</span></div>
//                                                         </div>
//                                                     </div>
//                                                 </a><a aria-label="item_3x07" href="https://www.sendo.vn/may-tinh-bang-masstel-tab-825-cu-40204960.html?source_block_id=listing_products&source_info=desktop2_60___session_key___8b46e440-dd86-441d-bd3a-b27f88cb1014_-5_algo13_0_49_2_-1&source_page_id=cate1_vasup_desc" className="item_3x07">
//                                                     <div className="card_3Vc8">
//                                                         <div className="thumbnail_3tZG">
//                                                             <figure className="image_3mnm"><img src="./Thế Giới Di Động Samsung, Iphone, Máy Tính Bảng Xách Tay Giá Rẻ _ Sendo.vn_files/RSf3p6Y16Q8c2dYxIaiW_simg_de2fe0_250x250_maxb.jpg" className=" lazyloaded" data-src="//media3.scdn.vn/img4/2021/01_19/RSf3p6Y16Q8c2dYxIaiW_simg_de2fe0_250x250_maxb.jpg" />
//                                                             </figure>
//                                                             <div className="groupDiscount_199p"><span className="discountBadge_1GZz">34%</span></div>
//                                                         </div>
//                                                         <div className="caption_2Jn3">
//                                                             <div className="promBanner_3cxp promList_2Jno" />
//                                                             <h3 className="productName_u171"><span className="truncateMedium_Tofh">Máy tính bảng Masstel Tab 825
//                                                                 cũ</span></h3>
//                                                             <div className="productPrice_1RFY"><strong className="currentPrice_2hr9">800.000đ</strong><strong className="oldPrice_itl0">1.200.000đ</strong></div>
//                                                             <div className="info_3lhu">
//                                                                 <div /><span className="orderCount_3rDn"><svg width="1em" height="1em" viewBox="0 0 32 32" className="icon_Mf-x iconSmall_2eXS">
//                                                                     <path d="M27.292 15.496l-10.8-10.8A2.378 2.378 0 0014.808 4H6.4C5.08 4 4 5.08 4 6.4v8.4c0 .66.264 1.26.708 1.704l10.8 10.8A2.385 2.385 0 0017.2 28h.012c.658 0 1.253-.271 1.679-.708l8.4-8.4a2.342 2.342 0 00.708-1.68v-.013.001c0-.66-.276-1.272-.708-1.704zM8.2 10c-.996 0-1.8-.804-1.8-1.8s.804-1.8 1.8-1.8 1.8.804 1.8 1.8S9.196 10 8.2 10z">
//                                                                     </path>
//                                                                 </svg><span className="textSmall_hRbk">26</span></span>
//                                                             </div>
//                                                             <div className="footer_2CrX"><span className="shopName_4r40"><span className="textSmall_hRbk textOverflow_3gco">Hangthanhly2020</span></span><span className="textSmall_hRbk textOverflow_3gco locationName_3SN5">TP.HCM</span></div>
//                                                         </div>
//                                                     </div>
//                                                 </a><a aria-label="item_3x07" href="https://www.sendo.vn/may-tinh-bang-gia-re-40200852.html?source_block_id=listing_products&source_info=desktop2_60___session_key___8b46e440-dd86-441d-bd3a-b27f88cb1014_-5_algo13_0_50_2_-1&source_page_id=cate1_vasup_desc" className="item_3x07">
//                                                     <div className="card_3Vc8">
//                                                         <div className="thumbnail_3tZG">
//                                                             <figure className="image_3mnm"><img src="./Thế Giới Di Động Samsung, Iphone, Máy Tính Bảng Xách Tay Giá Rẻ _ Sendo.vn_files/ziyDTMi7qJbzeea1xxYR_simg_de2fe0_250x250_maxb.jpg" className=" lazyloaded" data-src="//media3.scdn.vn/img4/2021/01_19/ziyDTMi7qJbzeea1xxYR_simg_de2fe0_250x250_maxb.jpg" />
//                                                             </figure>
//                                                             <div className="groupDiscount_199p"><span className="discountBadge_1GZz">19%</span></div>
//                                                         </div>
//                                                         <div className="caption_2Jn3">
//                                                             <div className="promBanner_3cxp promList_2Jno" />
//                                                             <h3 className="productName_u171"><span className="truncateMedium_Tofh">Máy tính bảng giá rẻ</span>
//                                                             </h3>
//                                                             <div className="productPrice_1RFY"><strong className="currentPrice_2hr9">650.000đ</strong><strong className="oldPrice_itl0">800.000đ</strong></div>
//                                                             <div className="info_3lhu">
//                                                                 <div /><span className="orderCount_3rDn"><svg width="1em" height="1em" viewBox="0 0 32 32" className="icon_Mf-x iconSmall_2eXS">
//                                                                     <path d="M27.292 15.496l-10.8-10.8A2.378 2.378 0 0014.808 4H6.4C5.08 4 4 5.08 4 6.4v8.4c0 .66.264 1.26.708 1.704l10.8 10.8A2.385 2.385 0 0017.2 28h.012c.658 0 1.253-.271 1.679-.708l8.4-8.4a2.342 2.342 0 00.708-1.68v-.013.001c0-.66-.276-1.272-.708-1.704zM8.2 10c-.996 0-1.8-.804-1.8-1.8s.804-1.8 1.8-1.8 1.8.804 1.8 1.8S9.196 10 8.2 10z">
//                                                                     </path>
//                                                                 </svg><span className="textSmall_hRbk">130</span></span>
//                                                             </div>
//                                                             <div className="footer_2CrX"><span className="shopName_4r40"><span className="textSmall_hRbk textOverflow_3gco">Hangthanhly2020</span></span><span className="textSmall_hRbk textOverflow_3gco locationName_3SN5">TP.HCM</span></div>
//                                                         </div>
//                                                     </div>
//                                                 </a></div>
//                                         </div>
//                                         <div style={{ height: '387.2px', left: '0px', position: 'absolute', top: '3872px', width: '100%' }}>
//                                             <div className="list_1OKC grid5_3JhR"><a aria-label="item_3x07" href="https://www.sendo.vn/dien-thoai-iphone-6s-plus-16gb-quoc-te-34143139.html?source_block_id=listing_products&source_info=desktop2_60___session_key___8b46e440-dd86-441d-bd3a-b27f88cb1014_-5_algo13_0_51_2_-1&source_page_id=cate1_vasup_desc" className="item_3x07">
//                                                 <div className="card_3Vc8">
//                                                     <div className="thumbnail_3tZG">
//                                                         <figure className="image_3mnm"><img src="./Thế Giới Di Động Samsung, Iphone, Máy Tính Bảng Xách Tay Giá Rẻ _ Sendo.vn_files/G8Bn2t8PRzJp0ECCYNF4_simg_de2fe0_250x250_maxb.jpg" className=" lazyloaded" data-src="//media3.scdn.vn/img4/2020/09_24/G8Bn2t8PRzJp0ECCYNF4_simg_de2fe0_250x250_maxb.jpg" />
//                                                         </figure>
//                                                         <div className="groupDiscount_199p" />
//                                                     </div>
//                                                     <div className="caption_2Jn3">
//                                                         <div className="promBanner_3cxp promList_2Jno" />
//                                                         <h3 className="productName_u171"><span className="truncateMedium_Tofh">Điện Thoại iPhone 6S Plus
//                                                             16GB Quốc Tế</span></h3>
//                                                         <div className="productPrice_1RFY"><strong className="currentPrice_2hr9">3.450.000đ -
//                                                             3.590.000đ</strong></div>
//                                                         <div className="info_3lhu">
//                                                             <div /><span className="orderCount_3rDn"><svg width="1em" height="1em" viewBox="0 0 32 32" className="icon_Mf-x iconSmall_2eXS">
//                                                                 <path d="M27.292 15.496l-10.8-10.8A2.378 2.378 0 0014.808 4H6.4C5.08 4 4 5.08 4 6.4v8.4c0 .66.264 1.26.708 1.704l10.8 10.8A2.385 2.385 0 0017.2 28h.012c.658 0 1.253-.271 1.679-.708l8.4-8.4a2.342 2.342 0 00.708-1.68v-.013.001c0-.66-.276-1.272-.708-1.704zM8.2 10c-.996 0-1.8-.804-1.8-1.8s.804-1.8 1.8-1.8 1.8.804 1.8 1.8S9.196 10 8.2 10z">
//                                                                 </path>
//                                                             </svg><span className="textSmall_hRbk">8</span></span>
//                                                         </div>
//                                                         <div className="footer_2CrX"><span className="shopName_4r40"><span className="textSmall_hRbk textOverflow_3gco">Fam Mobile</span></span><span className="textSmall_hRbk textOverflow_3gco locationName_3SN5">HN</span></div>
//                                                     </div>
//                                                 </div>
//                                             </a><a aria-label="item_3x07" href="https://www.sendo.vn/samsung-galaxy-s9-plus-64gb-ban-my-nguyen-zin-99-31423138.html?source_block_id=listing_products&source_info=desktop2_60___session_key___8b46e440-dd86-441d-bd3a-b27f88cb1014_-5_algo13_0_52_2_-1&source_page_id=cate1_vasup_desc" className="item_3x07">
//                                                     <div className="card_3Vc8">
//                                                         <div className="thumbnail_3tZG">
//                                                             <figure className="image_3mnm"><img src="./Thế Giới Di Động Samsung, Iphone, Máy Tính Bảng Xách Tay Giá Rẻ _ Sendo.vn_files/xAVrzE6ZCT8e34kb93v7_simg_de2fe0_250x250_maxb.jpg" className=" lazyloaded" data-src="//media3.scdn.vn/img4/2020/07_11/xAVrzE6ZCT8e34kb93v7_simg_de2fe0_250x250_maxb.jpg" />
//                                                             </figure>
//                                                             <div className="groupDiscount_199p" />
//                                                         </div>
//                                                         <div className="caption_2Jn3">
//                                                             <div className="promBanner_3cxp promList_2Jno" />
//                                                             <h3 className="productName_u171"><span className="truncateMedium_Tofh">Samsung Galaxy S9 Plus 64GB
//                                                                 (Bản Mỹ) nguyên zin 99%</span></h3>
//                                                             <div className="productPrice_1RFY"><strong className="currentPrice_2hr9">6.100.000đ</strong></div>
//                                                             <div className="info_3lhu">
//                                                                 <div />
//                                                             </div>
//                                                             <div className="footer_2CrX"><span className="shopName_4r40"><span className="textSmall_hRbk textOverflow_3gco">Sĩ Mobile</span></span><span className="textSmall_hRbk textOverflow_3gco locationName_3SN5">TP.HCM</span></div>
//                                                         </div>
//                                                     </div>
//                                                 </a><a aria-label="item_3x07" href="https://www.sendo.vn/oppo-f11-fro-39976919.html?source_block_id=listing_products&source_info=desktop2_60___session_key___8b46e440-dd86-441d-bd3a-b27f88cb1014_-5_algo13_0_53_2_-1&source_page_id=cate1_vasup_desc" className="item_3x07">
//                                                     <div className="card_3Vc8">
//                                                         <div className="thumbnail_3tZG">
//                                                             <figure className="image_3mnm"><img src="./Thế Giới Di Động Samsung, Iphone, Máy Tính Bảng Xách Tay Giá Rẻ _ Sendo.vn_files/qBcFIhywVAO0IAzNABiv_simg_de2fe0_250x250_maxb.jpg" className=" lazyloaded" data-src="//media3.scdn.vn/img4/2021/01_14/qBcFIhywVAO0IAzNABiv_simg_de2fe0_250x250_maxb.jpg" />
//                                                             </figure>
//                                                             <div className="groupDiscount_199p" />
//                                                         </div>
//                                                         <div className="caption_2Jn3">
//                                                             <div className="promBanner_3cxp promList_2Jno" />
//                                                             <h3 className="productName_u171"><span className="truncateMedium_Tofh">oppo f11 fro</span></h3>
//                                                             <div className="productPrice_1RFY"><strong className="currentPrice_2hr9">4.800.000đ</strong></div>
//                                                             <div className="info_3lhu">
//                                                                 <div /><span className="orderCount_3rDn"><svg width="1em" height="1em" viewBox="0 0 32 32" className="icon_Mf-x iconSmall_2eXS">
//                                                                     <path d="M27.292 15.496l-10.8-10.8A2.378 2.378 0 0014.808 4H6.4C5.08 4 4 5.08 4 6.4v8.4c0 .66.264 1.26.708 1.704l10.8 10.8A2.385 2.385 0 0017.2 28h.012c.658 0 1.253-.271 1.679-.708l8.4-8.4a2.342 2.342 0 00.708-1.68v-.013.001c0-.66-.276-1.272-.708-1.704zM8.2 10c-.996 0-1.8-.804-1.8-1.8s.804-1.8 1.8-1.8 1.8.804 1.8 1.8S9.196 10 8.2 10z">
//                                                                     </path>
//                                                                 </svg><span className="textSmall_hRbk">1</span></span>
//                                                             </div>
//                                                             <div className="footer_2CrX"><span className="shopName_4r40"><span className="textSmall_hRbk textOverflow_3gco">mừng nguyễn</span></span><span className="textSmall_hRbk textOverflow_3gco locationName_3SN5">HN</span></div>
//                                                         </div>
//                                                     </div>
//                                                 </a><a aria-label="item_3x07" href="https://www.sendo.vn/die-n-thoa-i-nokia-1110i-vo-go-ma-u-cha-me-22185745.html?source_block_id=listing_products&source_info=desktop2_60___session_key___8b46e440-dd86-441d-bd3a-b27f88cb1014_-5_algo13_0_54_2_-1&source_page_id=cate1_vasup_desc" className="item_3x07">
//                                                     <div className="card_3Vc8">
//                                                         <div className="thumbnail_3tZG">
//                                                             <figure className="image_3mnm"><img src="./Thế Giới Di Động Samsung, Iphone, Máy Tính Bảng Xách Tay Giá Rẻ _ Sendo.vn_files/KjaEXP_simg_de2fe0_250x250_maxb.jpg" className=" lazyloaded" data-src="//media3.scdn.vn/img3/2019/10_1/KjaEXP_simg_de2fe0_250x250_maxb.jpg" /><img src="./Thế Giới Di Động Samsung, Iphone, Máy Tính Bảng Xách Tay Giá Rẻ _ Sendo.vn_files/qstDaOLPySSP0I67yekv.png" alt="frame-event" className="frame_3QV8" /></figure>
//                                                             <div className="groupDiscount_199p" /><span className="videoBadge_1jgE"><img src="./Thế Giới Di Động Samsung, Iphone, Máy Tính Bảng Xách Tay Giá Rẻ _ Sendo.vn_files/Ev3MiuvzcYkH2xHWiVbE.png" alt="has-video" /></span>
//                                                         </div>
//                                                         <div className="caption_2Jn3">
//                                                             <div className="promBanner_3cxp promList_2Jno" />
//                                                             <h3 className="productName_u171"><span className="truncateMedium_Tofh"><img src="./Thế Giới Di Động Samsung, Iphone, Máy Tính Bảng Xách Tay Giá Rẻ _ Sendo.vn_files/h6fJaiL5WkEbDU2eQRZb.png" alt="shop-plus" className="shopPlus_zM6- size-md_1G43" />Điện thoại Nokia 1110i vỏ gỗ
//                                                                 mẫu Cha Mẹ</span></h3>
//                                                             <div className="productPrice_1RFY"><strong className="currentPrice_2hr9">379.000đ</strong></div>
//                                                             <div className="info_3lhu">
//                                                                 <div>
//                                                                     <div className="stars_l6c- star20_1zW7 small_1aJr" /><span className="ratingTotal_2Msc">(1)</span>
//                                                                 </div><span className="orderCount_3rDn"><svg width="1em" height="1em" viewBox="0 0 32 32" className="icon_Mf-x iconSmall_2eXS">
//                                                                     <path d="M27.292 15.496l-10.8-10.8A2.378 2.378 0 0014.808 4H6.4C5.08 4 4 5.08 4 6.4v8.4c0 .66.264 1.26.708 1.704l10.8 10.8A2.385 2.385 0 0017.2 28h.012c.658 0 1.253-.271 1.679-.708l8.4-8.4a2.342 2.342 0 00.708-1.68v-.013.001c0-.66-.276-1.272-.708-1.704zM8.2 10c-.996 0-1.8-.804-1.8-1.8s.804-1.8 1.8-1.8 1.8.804 1.8 1.8S9.196 10 8.2 10z">
//                                                                     </path>
//                                                                 </svg><span className="textSmall_hRbk">3</span></span>
//                                                             </div>
//                                                             <div className="footer_2CrX"><span className="shopName_4r40"><span className="textSmall_hRbk textOverflow_3gco">HƯNG THỊNH</span><img src="./Thế Giới Di Động Samsung, Iphone, Máy Tính Bảng Xách Tay Giá Rẻ _ Sendo.vn_files/d0DISnbiFa7jRW20whKD.png" alt="shop-plus" className="shopTypeIcon_35_b size-md_3f2_" /></span><span className="textSmall_hRbk textOverflow_3gco locationName_3SN5">TP.HCM</span></div>
//                                                         </div>
//                                                     </div>
//                                                 </a><a aria-label="item_3x07" href="https://www.sendo.vn/dien-thoai-nokia-110i-chi-nh-ha-ng-5767392.html?source_block_id=listing_products&source_info=desktop2_60___session_key___8b46e440-dd86-441d-bd3a-b27f88cb1014_-5_algo13_0_55_2_-1&source_page_id=cate1_vasup_desc" className="item_3x07">
//                                                     <div className="card_3Vc8">
//                                                         <div className="thumbnail_3tZG">
//                                                             <figure className="image_3mnm"><img src="./Thế Giới Di Động Samsung, Iphone, Máy Tính Bảng Xách Tay Giá Rẻ _ Sendo.vn_files/G9jchB_simg_de2fe0_250x250_maxb.jpg" className=" lazyloaded" data-src="//media3.scdn.vn/img2/2017/5_23/G9jchB_simg_de2fe0_250x250_maxb.jpg" /><img src="./Thế Giới Di Động Samsung, Iphone, Máy Tính Bảng Xách Tay Giá Rẻ _ Sendo.vn_files/qstDaOLPySSP0I67yekv.png" alt="frame-event" className="frame_3QV8" /></figure>
//                                                             <div className="groupDiscount_199p" /><span className="videoBadge_1jgE"><img src="./Thế Giới Di Động Samsung, Iphone, Máy Tính Bảng Xách Tay Giá Rẻ _ Sendo.vn_files/Ev3MiuvzcYkH2xHWiVbE.png" alt="has-video" /></span>
//                                                         </div>
//                                                         <div className="caption_2Jn3">
//                                                             <div className="promBanner_3cxp promList_2Jno" />
//                                                             <h3 className="productName_u171"><span className="truncateMedium_Tofh"><img src="./Thế Giới Di Động Samsung, Iphone, Máy Tính Bảng Xách Tay Giá Rẻ _ Sendo.vn_files/h6fJaiL5WkEbDU2eQRZb.png" alt="shop-plus" className="shopPlus_zM6- size-md_1G43" />Điện thoại NOKIA 110i chính
//                                                                 hãng</span></h3>
//                                                             <div className="productPrice_1RFY"><strong className="currentPrice_2hr9">229.000đ</strong></div>
//                                                             <div className="info_3lhu">
//                                                                 <div>
//                                                                     <div className="stars_l6c- star16_1BW_ small_1aJr" /><span className="ratingTotal_2Msc">(14)</span>
//                                                                 </div><span className="orderCount_3rDn"><svg width="1em" height="1em" viewBox="0 0 32 32" className="icon_Mf-x iconSmall_2eXS">
//                                                                     <path d="M27.292 15.496l-10.8-10.8A2.378 2.378 0 0014.808 4H6.4C5.08 4 4 5.08 4 6.4v8.4c0 .66.264 1.26.708 1.704l10.8 10.8A2.385 2.385 0 0017.2 28h.012c.658 0 1.253-.271 1.679-.708l8.4-8.4a2.342 2.342 0 00.708-1.68v-.013.001c0-.66-.276-1.272-.708-1.704zM8.2 10c-.996 0-1.8-.804-1.8-1.8s.804-1.8 1.8-1.8 1.8.804 1.8 1.8S9.196 10 8.2 10z">
//                                                                     </path>
//                                                                 </svg><span className="textSmall_hRbk">167</span></span>
//                                                             </div>
//                                                             <div className="footer_2CrX"><span className="shopName_4r40"><span className="textSmall_hRbk textOverflow_3gco">HƯNG THỊNH</span><img src="./Thế Giới Di Động Samsung, Iphone, Máy Tính Bảng Xách Tay Giá Rẻ _ Sendo.vn_files/d0DISnbiFa7jRW20whKD.png" alt="shop-plus" className="shopTypeIcon_35_b size-md_3f2_" /></span><span className="textSmall_hRbk textOverflow_3gco locationName_3SN5">TP.HCM</span></div>
//                                                         </div>
//                                                     </div>
//                                                 </a></div>
//                                         </div>
//                                         <div style={{ height: '387.2px', left: '0px', position: 'absolute', top: '4259.2px', width: '100%' }}>
//                                             <div className="list_1OKC grid5_3JhR"><a aria-label="item_3x07" href="https://www.sendo.vn/google-pixel-2-34745772.html?source_block_id=listing_products&source_info=desktop2_60___session_key___8b46e440-dd86-441d-bd3a-b27f88cb1014_-5_algo13_0_56_2_-1&source_page_id=cate1_vasup_desc" className="item_3x07">
//                                                 <div className="card_3Vc8">
//                                                     <div className="thumbnail_3tZG">
//                                                         <figure className="image_3mnm"><img src="./Thế Giới Di Động Samsung, Iphone, Máy Tính Bảng Xách Tay Giá Rẻ _ Sendo.vn_files/eXsZuPg77UZAgrvPGWga_simg_de2fe0_250x250_maxb.jpg" className=" lazyloaded" data-src="//media3.scdn.vn/img4/2020/10_06/eXsZuPg77UZAgrvPGWga_simg_de2fe0_250x250_maxb.jpg" />
//                                                         </figure>
//                                                         <div className="groupDiscount_199p"><span className="discountBadge_1GZz appDiscountBadge_3gSD">2%</span></div>
//                                                     </div>
//                                                     <div className="caption_2Jn3">
//                                                         <div className="promBanner_3cxp promList_2Jno" />
//                                                         <h3 className="productName_u171"><span className="truncateMedium_Tofh"><img src="./Thế Giới Di Động Samsung, Iphone, Máy Tính Bảng Xách Tay Giá Rẻ _ Sendo.vn_files/h6fJaiL5WkEbDU2eQRZb.png" alt="shop-plus" className="shopPlus_zM6- size-md_1G43" />Google&nbsp;&nbsp;Pixel 2</span>
//                                                         </h3>
//                                                         <div className="productPrice_1RFY"><strong className="currentPrice_2hr9">2.550.000đ</strong></div>
//                                                         <div className="info_3lhu">
//                                                             <div /><span className="orderCount_3rDn"><svg width="1em" height="1em" viewBox="0 0 32 32" className="icon_Mf-x iconSmall_2eXS">
//                                                                 <path d="M27.292 15.496l-10.8-10.8A2.378 2.378 0 0014.808 4H6.4C5.08 4 4 5.08 4 6.4v8.4c0 .66.264 1.26.708 1.704l10.8 10.8A2.385 2.385 0 0017.2 28h.012c.658 0 1.253-.271 1.679-.708l8.4-8.4a2.342 2.342 0 00.708-1.68v-.013.001c0-.66-.276-1.272-.708-1.704zM8.2 10c-.996 0-1.8-.804-1.8-1.8s.804-1.8 1.8-1.8 1.8.804 1.8 1.8S9.196 10 8.2 10z">
//                                                                 </path>
//                                                             </svg><span className="textSmall_hRbk">3</span></span>
//                                                         </div>
//                                                         <div className="footer_2CrX"><span className="shopName_4r40"><span className="textSmall_hRbk textOverflow_3gco">NT mobile318</span></span><span className="textSmall_hRbk textOverflow_3gco locationName_3SN5">TP.HCM</span></div>
//                                                     </div>
//                                                 </div>
//                                             </a><a aria-label="item_3x07" href="https://www.sendo.vn/die-n-thoa-i-vo-go-nokia-110i-ma-u-chu-nha-n-20844304.html?source_block_id=listing_products&source_info=desktop2_60___session_key___8b46e440-dd86-441d-bd3a-b27f88cb1014_-5_algo13_0_57_2_-1&source_page_id=cate1_vasup_desc" className="item_3x07">
//                                                     <div className="card_3Vc8">
//                                                         <div className="thumbnail_3tZG">
//                                                             <figure className="image_3mnm"><img src="./Thế Giới Di Động Samsung, Iphone, Máy Tính Bảng Xách Tay Giá Rẻ _ Sendo.vn_files/kxy8eR_simg_de2fe0_250x250_maxb.jpg" className=" lazyloaded" data-src="//media3.scdn.vn/img3/2019/8_17/kxy8eR_simg_de2fe0_250x250_maxb.jpg" /><img src="./Thế Giới Di Động Samsung, Iphone, Máy Tính Bảng Xách Tay Giá Rẻ _ Sendo.vn_files/qstDaOLPySSP0I67yekv.png" alt="frame-event" className="frame_3QV8" /></figure>
//                                                             <div className="groupDiscount_199p" /><span className="videoBadge_1jgE"><img src="./Thế Giới Di Động Samsung, Iphone, Máy Tính Bảng Xách Tay Giá Rẻ _ Sendo.vn_files/Ev3MiuvzcYkH2xHWiVbE.png" alt="has-video" /></span>
//                                                         </div>
//                                                         <div className="caption_2Jn3">
//                                                             <div className="promBanner_3cxp promList_2Jno" />
//                                                             <h3 className="productName_u171"><span className="truncateMedium_Tofh"><img src="./Thế Giới Di Động Samsung, Iphone, Máy Tính Bảng Xách Tay Giá Rẻ _ Sendo.vn_files/h6fJaiL5WkEbDU2eQRZb.png" alt="shop-plus" className="shopPlus_zM6- size-md_1G43" />Điện thoại vỏ gỗ nokia 110i
//                                                                 mẫu chữ nhẫn</span></h3>
//                                                             <div className="productPrice_1RFY"><strong className="currentPrice_2hr9">369.000đ</strong></div>
//                                                             <div className="info_3lhu">
//                                                                 <div />
//                                                             </div>
//                                                             <div className="footer_2CrX"><span className="shopName_4r40"><span className="textSmall_hRbk textOverflow_3gco">HƯNG THỊNH</span><img src="./Thế Giới Di Động Samsung, Iphone, Máy Tính Bảng Xách Tay Giá Rẻ _ Sendo.vn_files/d0DISnbiFa7jRW20whKD.png" alt="shop-plus" className="shopTypeIcon_35_b size-md_3f2_" /></span><span className="textSmall_hRbk textOverflow_3gco locationName_3SN5">TP.HCM</span></div>
//                                                         </div>
//                                                     </div>
//                                                 </a><a aria-label="item_3x07" href="https://www.sendo.vn/iphone-7-32gb-quoc-te-22497705.html?source_block_id=listing_products&source_info=desktop2_60___session_key___8b46e440-dd86-441d-bd3a-b27f88cb1014_-5_algo13_0_58_2_-1&source_page_id=cate1_vasup_desc" className="item_3x07">
//                                                     <div className="card_3Vc8">
//                                                         <div className="thumbnail_3tZG">
//                                                             <figure className="image_3mnm"><img src="./Thế Giới Di Động Samsung, Iphone, Máy Tính Bảng Xách Tay Giá Rẻ _ Sendo.vn_files/UXooBx_simg_de2fe0_250x250_maxb.jpg" className=" lazyloaded" data-src="//media3.scdn.vn/img3/2019/10_10/UXooBx_simg_de2fe0_250x250_maxb.jpg" />
//                                                             </figure>
//                                                             <div className="groupDiscount_199p"><span className="discountBadge_1GZz appDiscountBadge_3gSD">2%</span></div>
//                                                         </div>
//                                                         <div className="caption_2Jn3">
//                                                             <div className="promBanner_3cxp promList_2Jno" />
//                                                             <h3 className="productName_u171"><span className="truncateMedium_Tofh"><img src="./Thế Giới Di Động Samsung, Iphone, Máy Tính Bảng Xách Tay Giá Rẻ _ Sendo.vn_files/h6fJaiL5WkEbDU2eQRZb.png" alt="shop-plus" className="shopPlus_zM6- size-md_1G43" />Iphone 7 32GB Quốc Tế</span></h3>
//                                                             <div className="productPrice_1RFY"><strong className="currentPrice_2hr9">4.200.000đ</strong></div>
//                                                             <div className="info_3lhu">
//                                                                 <div /><span className="orderCount_3rDn"><svg width="1em" height="1em" viewBox="0 0 32 32" className="icon_Mf-x iconSmall_2eXS">
//                                                                     <path d="M27.292 15.496l-10.8-10.8A2.378 2.378 0 0014.808 4H6.4C5.08 4 4 5.08 4 6.4v8.4c0 .66.264 1.26.708 1.704l10.8 10.8A2.385 2.385 0 0017.2 28h.012c.658 0 1.253-.271 1.679-.708l8.4-8.4a2.342 2.342 0 00.708-1.68v-.013.001c0-.66-.276-1.272-.708-1.704zM8.2 10c-.996 0-1.8-.804-1.8-1.8s.804-1.8 1.8-1.8 1.8.804 1.8 1.8S9.196 10 8.2 10z">
//                                                                     </path>
//                                                                 </svg><span className="textSmall_hRbk">104</span></span>
//                                                             </div>
//                                                             <div className="footer_2CrX"><span className="shopName_4r40"><span className="textSmall_hRbk textOverflow_3gco">NT mobile318</span></span><span className="textSmall_hRbk textOverflow_3gco locationName_3SN5">TP.HCM</span></div>
//                                                         </div>
//                                                     </div>
//                                                 </a><a aria-label="item_3x07" href="https://www.sendo.vn/sony-xperia-xz-premium-2-sim-31234346.html?source_block_id=listing_products&source_info=desktop2_60___session_key___8b46e440-dd86-441d-bd3a-b27f88cb1014_-5_algo13_0_59_2_-1&source_page_id=cate1_vasup_desc" className="item_3x07">
//                                                     <div className="card_3Vc8">
//                                                         <div className="thumbnail_3tZG">
//                                                             <figure className="image_3mnm"><img src="./Thế Giới Di Động Samsung, Iphone, Máy Tính Bảng Xách Tay Giá Rẻ _ Sendo.vn_files/JHcEd34u5EjsmlI955zj_simg_de2fe0_250x250_maxb.jpg" className=" lazyloaded" data-src="//media3.scdn.vn/img4/2020/07_01/JHcEd34u5EjsmlI955zj_simg_de2fe0_250x250_maxb.jpg" />
//                                                             </figure>
//                                                             <div className="groupDiscount_199p"><span className="discountBadge_1GZz appDiscountBadge_3gSD">2%</span></div>
//                                                         </div>
//                                                         <div className="caption_2Jn3">
//                                                             <div className="promBanner_3cxp promList_2Jno" />
//                                                             <h3 className="productName_u171"><span className="truncateMedium_Tofh"><img src="./Thế Giới Di Động Samsung, Iphone, Máy Tính Bảng Xách Tay Giá Rẻ _ Sendo.vn_files/h6fJaiL5WkEbDU2eQRZb.png" alt="shop-plus" className="shopPlus_zM6- size-md_1G43" />SONY XPERIA XZ PREMIUM 2 sim</span>
//                                                             </h3>
//                                                             <div className="productPrice_1RFY"><strong className="currentPrice_2hr9">4.450.000đ</strong></div>
//                                                             <div className="info_3lhu">
//                                                                 <div /><span className="orderCount_3rDn"><svg width="1em" height="1em" viewBox="0 0 32 32" className="icon_Mf-x iconSmall_2eXS">
//                                                                     <path d="M27.292 15.496l-10.8-10.8A2.378 2.378 0 0014.808 4H6.4C5.08 4 4 5.08 4 6.4v8.4c0 .66.264 1.26.708 1.704l10.8 10.8A2.385 2.385 0 0017.2 28h.012c.658 0 1.253-.271 1.679-.708l8.4-8.4a2.342 2.342 0 00.708-1.68v-.013.001c0-.66-.276-1.272-.708-1.704zM8.2 10c-.996 0-1.8-.804-1.8-1.8s.804-1.8 1.8-1.8 1.8.804 1.8 1.8S9.196 10 8.2 10z">
//                                                                     </path>
//                                                                 </svg><span className="textSmall_hRbk">8</span></span>
//                                                             </div>
//                                                             <div className="footer_2CrX"><span className="shopName_4r40"><span className="textSmall_hRbk textOverflow_3gco">NT mobile318</span></span><span className="textSmall_hRbk textOverflow_3gco locationName_3SN5">TP.HCM</span></div>
//                                                         </div>
//                                                     </div>
//                                                 </a><a aria-label="item_3x07" href="https://www.sendo.vn/die-n-thoa-i-vo-go-nokia-1200-xi-n-ma-u-cha-me-20832291.html?source_block_id=listing_products&source_info=desktop2_60___session_key___8b46e440-dd86-441d-bd3a-b27f88cb1014_-5_algo13_0_60_2_-1&source_page_id=cate1_vasup_desc" className="item_3x07">
//                                                     <div className="card_3Vc8">
//                                                         <div className="thumbnail_3tZG">
//                                                             <figure className="image_3mnm"><img src="./Thế Giới Di Động Samsung, Iphone, Máy Tính Bảng Xách Tay Giá Rẻ _ Sendo.vn_files/K6CfFb_simg_de2fe0_250x250_maxb.jpg" className=" lazyloaded" data-src="//media3.scdn.vn/img3/2019/8_17/K6CfFb_simg_de2fe0_250x250_maxb.jpg" /><img src="./Thế Giới Di Động Samsung, Iphone, Máy Tính Bảng Xách Tay Giá Rẻ _ Sendo.vn_files/qstDaOLPySSP0I67yekv.png" alt="frame-event" className="frame_3QV8" /></figure>
//                                                             <div className="groupDiscount_199p" /><span className="videoBadge_1jgE"><img src="./Thế Giới Di Động Samsung, Iphone, Máy Tính Bảng Xách Tay Giá Rẻ _ Sendo.vn_files/Ev3MiuvzcYkH2xHWiVbE.png" alt="has-video" /></span>
//                                                         </div>
//                                                         <div className="caption_2Jn3">
//                                                             <div className="promBanner_3cxp promList_2Jno" />
//                                                             <h3 className="productName_u171"><span className="truncateMedium_Tofh"><img src="./Thế Giới Di Động Samsung, Iphone, Máy Tính Bảng Xách Tay Giá Rẻ _ Sendo.vn_files/h6fJaiL5WkEbDU2eQRZb.png" alt="shop-plus" className="shopPlus_zM6- size-md_1G43" />Điện thoại vỏ gỗ nokia 1200
//                                                                 xịn mẫu cha mẹ</span></h3>
//                                                             <div className="productPrice_1RFY"><strong className="currentPrice_2hr9">399.000đ</strong></div>
//                                                             <div className="info_3lhu">
//                                                                 <div />
//                                                             </div>
//                                                             <div className="footer_2CrX"><span className="shopName_4r40"><span className="textSmall_hRbk textOverflow_3gco">HƯNG THỊNH</span><img src="./Thế Giới Di Động Samsung, Iphone, Máy Tính Bảng Xách Tay Giá Rẻ _ Sendo.vn_files/d0DISnbiFa7jRW20whKD.png" alt="shop-plus" className="shopTypeIcon_35_b size-md_3f2_" /></span><span className="textSmall_hRbk textOverflow_3gco locationName_3SN5">TP.HCM</span></div>
//                                                         </div>
//                                                     </div>
//                                                 </a></div>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div className="paginationWrapper_lnTQ"><span className="text_R-cM">1 của 198 trang</span>
//                                     <ul className=" pagination_3f5v">
//                                         <li className="pageCaret_1jMC pagePrevious_CKPx ">&nbsp;</li>
//                                         <li className="
//         pageLink_3Urw
//         active_3BYx
        
        
//       "><button>1 </button></li>
//                                         <li className="
//         pageLink_3Urw
        
        
        
//       "><button>2 </button></li>
//                                         <li className="
//         pageLink_3Urw
        
        
        
//       "><button>3 </button></li>
//                                         <li className="
//         pageLink_3Urw
        
        
        
//       "><button>4 </button></li>
//                                         <li className="
//         pageLink_3Urw
        
        
        
//       "><button>5 </button></li>
//                                         <li className="
//         pageLink_3Urw
        
//         nonClick_2GS_
        
//       "><a>...</a></li>
//                                         <li className="pageCaret_1jMC pageNext_2D_R ">&nbsp;</li>
//                                     </ul>
//                                     <div>
//                                         <div className="paginationForm_c7Tb"><span>Đi tới trang</span><input type="number" min={1} max={198} defaultValue={2} /><button /></div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </section>
//                         <div />
//                     </div>
//                 </div>
//                 <div className="webFooter_1sFS">
//                     <div className="sendoStrengths_3p64">
//                         <div className="container">
//                             <div className="row">
//                                 <div className="col_205S col"><a href="https://www.sendo.vn/huong-dan/ve-sendo/" className="item_13ry" rel="nofollow">
//                                     <div className="iconBox_3BrW"><img className src="./Thế Giới Di Động Samsung, Iphone, Máy Tính Bảng Xách Tay Giá Rẻ _ Sendo.vn_files/benefit_1.d1c4f276.svg" alt="Siêu nhiều hàng tốt" /></div>
//                                     <h3 className="title_2y2L">Siêu nhiều hàng tốt</h3>
//                                     <p className="description_2VJu text-desc">Cần gì cũng có 26 ngành hàng &amp; 10 triệu sản phẩm</p>
//                                 </a></div>
//                                 <div className="col_205S col"><a href="https://www.sendo.vn/huong-dan/ve-sendo/" className="item_13ry" rel="nofollow">
//                                     <div className="iconBox_3BrW"><img className src="./Thế Giới Di Động Samsung, Iphone, Máy Tính Bảng Xách Tay Giá Rẻ _ Sendo.vn_files/benefit_2.1b86fd66.svg" alt="Siêu yên tâm" /></div>
//                                     <h3 className="title_2y2L">Siêu yên tâm</h3>
//                                     <p className="description_2VJu text-desc">Miễn phí đổi trả 48h (*)</p>
//                                 </a></div>
//                                 <div className="col_205S col"><a href="https://www.sendo.vn/huong-dan/ve-sendo/" className="item_13ry" rel="nofollow">
//                                     <div className="iconBox_3BrW"><img className src="./Thế Giới Di Động Samsung, Iphone, Máy Tính Bảng Xách Tay Giá Rẻ _ Sendo.vn_files/benefit_3.8c790757.svg" alt="Siêu tiện lợi" /></div>
//                                     <h3 className="title_2y2L">Siêu tiện lợi</h3>
//                                     <p className="description_2VJu text-desc">Mạng lưới vận chuyển toàn quốc, mua gì cũng có</p>
//                                 </a></div>
//                                 <div className="col_205S col"><a href="https://www.sendo.vn/huong-dan/ve-sendo/" className="item_13ry" rel="nofollow">
//                                     <div className="iconBox_3BrW"><img className src="./Thế Giới Di Động Samsung, Iphone, Máy Tính Bảng Xách Tay Giá Rẻ _ Sendo.vn_files/benefit_4.9504e1ef.svg" alt="Siêu tiết kiệm" /></div>
//                                     <h3 className="title_2y2L">Siêu tiết kiệm</h3>
//                                     <p className="description_2VJu text-desc">Giá hợp lý, vừa túi tiền. Luôn có nhiều chương trình khuyến mãi
//                                     </p>
//                                 </a></div>
//                                 <div className="col_205S col"><a href="https://www.sendo.vn/apps" className="item_13ry" rel="nofollow">
//                                     <div className="iconBox_3BrW"><img className="unsetHeight_m8tf" src="./Thế Giới Di Động Samsung, Iphone, Máy Tính Bảng Xách Tay Giá Rẻ _ Sendo.vn_files/benefit_5.85c0063d.png" alt="Tải ứng dụng SENDO" /></div>
//                                     <h3 className="title_2y2L">Tải ứng dụng SENDO</h3>
//                                     <p className="description_2VJu text-desc">Mang thế giới mua sắm của Sendo trong tầm tay bạn</p>
//                                 </a></div>
//                             </div>
//                         </div>
//                     </div>
//                     <div>
//                         <div className="container">
//                             <div className="row">
//                                 <div className="undefined col">
//                                     <div className="colItem_2K_Z">
//                                         <h3 className="title_3diI">VỀ CHÚNG TÔI</h3>
//                                         <ul>
//                                             <li className="link_1kzK"><a href="https://www.sendo.vn/huong-dan/ve-sendo/?ref=footer" rel="nofollow">Giới thiệu Sendo.vn</a></li>
//                                             <li className="link_1kzK"><a href="https://help.sendo.vn/hc/vi/categories/360000719872?ref=footer" rel="nofollow">Giới thiệu SenMall</a></li>
//                                             <li className="link_1kzK"><a href="https://www.sendo.vn/quy-che-hoat-dong/?ref=footer" rel="nofollow">Quy chế hoạt động</a></li>
//                                         </ul>
//                                     </div>
//                                 </div>
//                                 <div className="undefined col">
//                                     <div className="colItem_2K_Z">
//                                         <h3 className="title_3diI">DÀNH CHO NGƯỜI MUA</h3>
//                                         <ul>
//                                             <li className="link_1kzK"><a href="https://help.sendo.vn/hc/vi/categories/115000167331?ref=footer" rel="nofollow">Giải quyết khiếu nại</a></li>
//                                             <li className="link_1kzK"><a href="https://help.sendo.vn/hc/vi/articles/115001262292-H%C6%B0%E1%BB%9Bng-d%E1%BA%ABn-mua-h%C3%A0ng?ref=footer" rel="nofollow">Hướng dẫn mua hàng</a></li>
//                                             <li className="link_1kzK"><a href="https://help.sendo.vn/hc/vi/articles/115001260091?ref=footer" rel="nofollow">Chính sách đổi trả</a></li>
//                                             <li className="link_1kzK"><a href="https://help.sendo.vn/hc/vi/?ref=footer" rel="nofollow">Chăm sóc
//                                                 khách hàng</a></li>
//                                             <li className="link_1kzK"><a href="https://www.sendo.vn/tien-ich/nap-tien/?ref=footer" rel="nofollow">Nạp tiền điện thoại</a></li>
//                                         </ul>
//                                     </div>
//                                 </div>
//                                 <div className="undefined col">
//                                     <div className="colItem_2K_Z">
//                                         <h3 className="title_3diI">DÀNH CHO NGƯỜI BÁN</h3>
//                                         <ul>
//                                             <li className="link_1kzK"><a href="https://ban.sendo.vn/gioi-thieu-trang-ban?ref=footer" rel="nofollow">Mở shop trên Sendo</a></li>
//                                             <li className="link_1kzK"><a href="https://ban.sendo.vn/chinh-sach-nguoi-ban/?ref=footer" rel="nofollow">Quy định đối với người bán</a></li>
//                                             <li className="link_1kzK"><a href="https://ban.sendo.vn/chinh-sach-nguoi-ban/?ref=footer" rel="nofollow">Chính sách bán hàng</a></li>
//                                             <li className="link_1kzK"><a href="https://ban.sendo.vn/chinh-sach-nguoi-ban/36-5-quy-dinh-kiem-duyet?ref=footer" rel="nofollow">Hệ thống tiêu chí kiểm duyệt</a></li>
//                                         </ul>
//                                     </div>
//                                 </div>
//                                 <div className="undefined undefined  col col-5">
//                                     <div className="colItem_2K_Z">
//                                         <h3 className="title_3diI">Đăng ký nhận bản tin ưu đãi khủng từ sendo</h3>
//                                         <div className="subscribeEmailBox_2Oov">
//                                             <form className>
//                                                 <div className="inputEmail_1H_p input-group"><input type="text" placeholder="Email của bạn là" aria-label="Đăng ký nhận bản tin ưu đãi" defaultValue className="form-control" />
//                                                     <div className="input-group-append"><button className="btn btn-primary">Đăng ký</button></div>
//                                                 </div>
//                                                 <div className="radioGroup_16fT position-relative form-group"><label className="customRadio_YcMz"><input type="radio" name="gender-radio" defaultValue="nam" defaultChecked /><span className="cirle_2a93" /><span className="label_9crA">Nam</span></label><label className="customRadio_YcMz"><input type="radio" name="gender-radio" defaultValue="nu" /><span className="cirle_2a93" /><span className="label_9crA">Nữ</span></label></div>
//                                             </form>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="footerAddress_3W_M">
//                         <div className="container">
//                             <p>Copyright © 2012 Sendo.vn</p>
//                             <p>Công ty Cổ phần Công nghệ Sen Đỏ</p>
//                             <p>Số ĐKKD: 0312776486 - Ngày cấp: 13/05/2014, được sửa đổi lần thứ 6, ngày 23/05/2016.</p>
//                             <p>Cơ quan cấp: Sở Kế hoạch và Đầu tư TPHCM.</p>
//                             <p>Địa chỉ: Tầng 5, Tòa nhà A, Vườn Ươm Doanh Nghiệp, Lô D.01, Đường Tân Thuận, Khu chế xuất Tân Thuận,
//                                 Phường Tân Thuận Đông, Quận 7, Thành phố Hồ Chí Minh, Việt Nam.</p>
//                             <p><a className="email_mknF" href="mailto:lienhe@sendo.vn">Email: lienhe@sendo.vn</a></p>
//                         </div>
//                         <div className="container"><a target="_blank" rel="noopener noreferrer nofollow" href="http://online.gov.vn/Home/WebDetails/21391" title="Bộ Công Thương" style={{ marginRight: '16px' }}><img src="./Thế Giới Di Động Samsung, Iphone, Máy Tính Bảng Xách Tay Giá Rẻ _ Sendo.vn_files/XhpGDnvWqrlKeHLst3aS.png" alt="Bộ Công Thương" style={{ height: '33px' }} /></a><a target="_blank" rel="noopener noreferrer nofollow" href="https://help.sendo.vn/hc/vi/articles/115001260091-L%C3%A0m-th%E1%BA%BF-n%C3%A0o-%C4%91%E1%BB%83-tr%E1%BA%A3-h%C3%A0ng" title="Bộ Công Thương - Nói không với hàng giả"><img src="./Thế Giới Di Động Samsung, Iphone, Máy Tính Bảng Xách Tay Giá Rẻ _ Sendo.vn_files/h6lEMGIAt4Uapd0Mls34.png" alt="Bộ Công Thương - Nói không với hàng giả" style={{ height: '33px' }} /></a></div>
//                     </div>
//                     <div className="footerKeyWords_34dn">
//                         <div className="container">
//                             <h2>Top tìm kiếm<span className="collapseCtrl_2AVh" /></h2>
//                             <div className="keyWords_3hv- collapse"><a aria-label="keyword_hgfj" href="https://www.sendo.vn/iphone-6.htm" className="keyword_hgfj">iphone 6</a><a aria-label="keyword_hgfj" href="https://www.sendo.vn/iphone.htm" className="keyword_hgfj">iphone</a><a aria-label="keyword_hgfj" href="https://www.sendo.vn/iphone-6-plus-han-quoc.htm" className="keyword_hgfj">iphone 6 plus hàn quốc</a><a aria-label="keyword_hgfj" href="https://www.sendo.vn/dien-thoai-nokia-e75.htm" className="keyword_hgfj">điện
//                                 thoại nokia e75</a><a aria-label="keyword_hgfj" href="https://www.sendo.vn/samsung-galaxy-s7.htm" className="keyword_hgfj">samsung galaxy s7</a><a aria-label="keyword_hgfj" href="https://www.sendo.vn/dien-thoai.htm" className="keyword_hgfj">điện thoại</a><a aria-label="keyword_hgfj" href="https://www.sendo.vn/samsung-galaxy-j5.htm" className="keyword_hgfj">samsung
//                                     galaxy j5</a><a aria-label="keyword_hgfj" href="https://www.sendo.vn/samsung-galaxy-j3.htm" className="keyword_hgfj">samsung galaxy j3</a><a aria-label="keyword_hgfj" href="https://www.sendo.vn/iphone-5s.htm" className="keyword_hgfj">iphone 5s</a><a aria-label="keyword_hgfj" href="https://www.sendo.vn/dien-thoai-sony.htm" className="keyword_hgfj">điện thoại sony</a><a aria-label="keyword_hgfj" href="https://www.sendo.vn/dien-thoai-nokia-e73.htm" className="keyword_hgfj">điện
//                                         thoại nokia e73</a><a aria-label="keyword_hgfj" href="https://www.sendo.vn/samsung-galaxy-s6.htm" className="keyword_hgfj">samsung galaxy s6</a><a aria-label="keyword_hgfj" href="https://www.sendo.vn/samsung-galaxy-j7-prime.htm" className="keyword_hgfj">samsung galaxy j7
//                                             prime</a><a aria-label="keyword_hgfj" href="https://www.sendo.vn/iphone-6s-plus.htm" className="keyword_hgfj">iphone 6s plus</a><a aria-label="keyword_hgfj" href="https://www.sendo.vn/dien-thoai-nokia-1600.htm" className="keyword_hgfj">điện thoại nokia 1600</a><a aria-label="keyword_hgfj" href="https://www.sendo.vn/dien-thoai-nokia-e72-cu.htm" className="keyword_hgfj">điện thoại nokia e72 cũ</a><a aria-label="keyword_hgfj" href="https://www.sendo.vn/iphone-5.htm" className="keyword_hgfj">iphone 5</a><a aria-label="keyword_hgfj" href="https://www.sendo.vn/samsung-galaxy-j7.htm" className="keyword_hgfj">samsung galaxy j7</a><a aria-label="keyword_hgfj" href="https://www.sendo.vn/iphone-6-plus.htm" className="keyword_hgfj">iphone 6
//                                                 plus</a><a aria-label="keyword_hgfj" href="https://www.sendo.vn/dien-thoai-cam-ung-gia-re-duoi-1-trieu.htm" className="keyword_hgfj">điện thoại
//                                                     cảm ứng giá rẻ dưới 1 triệu</a><a aria-label="keyword_hgfj" href="https://www.sendo.vn/samsung-galaxy-note-5.htm" className="keyword_hgfj">samsung galaxy note 5</a><a aria-label="keyword_hgfj" href="https://www.sendo.vn/samsung-galaxy-a5.htm" className="keyword_hgfj">samsung
//                                                         galaxy a5</a><a aria-label="keyword_hgfj" href="https://www.sendo.vn/oppo-f1.htm" className="keyword_hgfj">oppo f1</a><a aria-label="keyword_hgfj" href="https://www.sendo.vn/samsung-galaxy-a7.htm" className="keyword_hgfj">samsung galaxy a7</a><a aria-label="keyword_hgfj" href="https://www.sendo.vn/iphone-4s.htm" className="keyword_hgfj">iphone 4s</a><a aria-label="keyword_hgfj" href="https://www.sendo.vn/oppo-f1s.htm" className="keyword_hgfj">oppo f1s</a><a aria-label="keyword_hgfj" href="https://www.sendo.vn/dien-thoai-sony-xperia.htm" className="keyword_hgfj">điện thoại sony xperia</a><a aria-label="keyword_hgfj" href="https://www.sendo.vn/samsung-galaxy-s8.htm" className="keyword_hgfj">samsung galaxy s8 +</a><a aria-label="keyword_hgfj" href="https://www.sendo.vn/samsung-galaxy-j2.htm" className="keyword_hgfj">samsung
//                                                             galaxy j2</a><a aria-label="keyword_hgfj" href="https://www.sendo.vn/oppo-neo-7.htm" className="keyword_hgfj">oppo neo 7</a><a aria-label="keyword_hgfj" href="https://www.sendo.vn/ipad.htm" className="keyword_hgfj">ipad</a><a aria-label="keyword_hgfj" href="https://www.sendo.vn/oppo-f3.htm" className="keyword_hgfj">oppo f3</a><a aria-label="keyword_hgfj" href="https://www.sendo.vn/samsung-galaxy-j5-prime.htm" className="keyword_hgfj">samsung galaxy j5
//                                                                 prime</a><a aria-label="keyword_hgfj" href="https://www.sendo.vn/oppo-neo-9.htm" className="keyword_hgfj">oppo neo 9</a><a aria-label="keyword_hgfj" href="https://www.sendo.vn/samsung-galaxy-s7-edge.htm" className="keyword_hgfj">samsung galaxy s7 edge</a><a aria-label="keyword_hgfj" href="https://www.sendo.vn/samsung-galaxy-a9.htm" className="keyword_hgfj">samsung
//                                                                     galaxy a9</a><a aria-label="keyword_hgfj" href="https://www.sendo.vn/iphone-6s.htm" className="keyword_hgfj">iphone 6s</a><a aria-label="keyword_hgfj" href="https://www.sendo.vn/iphone-8.htm" className="keyword_hgfj">iphone 8</a><a aria-label="keyword_hgfj" href="https://www.sendo.vn/dien-thoai-nokia.htm" className="keyword_hgfj">điện thoại nokia</a><a aria-label="keyword_hgfj" href="https://www.sendo.vn/iphone-4.htm" className="keyword_hgfj">iphone 4</a><a aria-label="keyword_hgfj" href="https://www.sendo.vn/dien-thoai-samsung.htm" className="keyword_hgfj">điện
//                                                                         thoại samsung</a><a aria-label="keyword_hgfj" href="https://www.sendo.vn/dt-iphone.htm" className="keyword_hgfj">đt iphone</a><a aria-label="keyword_hgfj" href="https://www.sendo.vn/iphone-x.htm" className="keyword_hgfj">iphone x</a><a aria-label="keyword_hgfj" href="https://www.sendo.vn/dien-thoai-samsung-galaxy-j8.htm" className="keyword_hgfj">điện thoại samsung
//                                                                             galaxy j8</a><a aria-label="keyword_hgfj" href="https://www.sendo.vn/dien-thoai-oppo.htm" className="keyword_hgfj">điện thoại oppo</a><a aria-label="keyword_hgfj" href="https://www.sendo.vn/dien-thoai-samsung-galaxy-j7.htm" className="keyword_hgfj">điện thoại samsung
//                                                                                 galaxy j7</a><a aria-label="keyword_hgfj" href="https://www.sendo.vn/samsung-galaxy-j8.htm" className="keyword_hgfj">samsung galaxy j8</a><a aria-label="keyword_hgfj" href="https://www.sendo.vn/dien-thoai-nokia-230-cu.htm" className="keyword_hgfj">điện thoại nokia 230
//                                                                                     cũ</a><a aria-label="keyword_hgfj" href="https://www.sendo.vn/samsung-j7-pro.htm" className="keyword_hgfj">samsung j7 pro</a><a aria-label="keyword_hgfj" href="https://www.sendo.vn/may-tinh-bang.htm" className="keyword_hgfj">máy tính bảng</a><a aria-label="keyword_hgfj" href="https://www.sendo.vn/iphone-7.htm" className="keyword_hgfj">iphone 7</a><a aria-label="keyword_hgfj" href="https://www.sendo.vn/dien-thoai-cam-ung.htm" className="keyword_hgfj">điện
//                                                                                         thoại cảm ứng</a><a aria-label="keyword_hgfj" href="https://www.sendo.vn/dien-thoai-gia-re-duoi-200k.htm" className="keyword_hgfj">điện thoại giá rẻ dưới
//                                                                                             200k</a><a aria-label="keyword_hgfj" href="https://www.sendo.vn/iphone-7-plus.htm" className="keyword_hgfj">iphone 7 plus</a><a aria-label="keyword_hgfj" href="https://www.sendo.vn/samsung-galaxy-a8.htm" className="keyword_hgfj">samsung galaxy a8</a><a aria-label="keyword_hgfj" href="https://www.sendo.vn/samsung-galaxy-a3.htm" className="keyword_hgfj">samsung
//                                                                                                 galaxy a3</a><a aria-label="keyword_hgfj" href="https://www.sendo.vn/dien-thoai-sony-xperia-z.htm" className="keyword_hgfj">điện thoại sony xperia z</a><a aria-label="keyword_hgfj" href="https://www.sendo.vn/dien-thoai-2-sim.htm" className="keyword_hgfj">điện thoại 2 sim</a><a aria-label="keyword_hgfj" href="https://www.sendo.vn/dien-thoai-oppo-s1.htm" className="keyword_hgfj">điện
//                                                                                                     thoại oppo s1</a><a aria-label="keyword_hgfj" href="https://www.sendo.vn/dien-thoai-sony-xperia-xzs.htm" className="keyword_hgfj">điện thoại sony xperia xzs</a></div>
//                         </div>
//                     </div>
//                 </div><button className="backToTop_9fDH btnIconSmall_3dGI"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" width={32} height={32} viewBox="0 0 32 32" className="icon_30C7">
//                     <path d="M10.667 14.667h4v13.333h2.667v-13.333h4l-5.333-5.333-5.333 5.333zM5.333 4v2.667h21.333v-2.667h-21.333z">
//                     </path>
//                 </svg></button>
//                 <div className="floatBannerWrapper_1LgS" style={{ zIndex: 10 }}>
//                     <div className="container floatBanner_1t5i"><button arial-label="close-float-banner" className="btnClose_3ly4">×</button>
//                         <div className="floatBannerContent_2Hqm">
//                             <div><a href="https://www.sendo.vn/su-kien/hoi-sale-nua-gia/" className="link_9IQV"><img src="./Thế Giới Di Động Samsung, Iphone, Máy Tính Bảng Xách Tay Giá Rẻ _ Sendo.vn_files/ZYqjHpeXoWkzJSM1glYi.png" className="image_32k-" alt="4.4 - MGG" /></a></div>
//                             <div><a href="https://www.sendo.vn/su-kien/ma-giam-gia/" className="link_9IQV"><img src="./Thế Giới Di Động Samsung, Iphone, Máy Tính Bảng Xách Tay Giá Rẻ _ Sendo.vn_files/S47wGEaK0V2dOoj1XWqk.png" className="image_32k-" alt="Săn mã giảm giá 50%" /></a></div>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="toast_3n7b">
//                     <div className="content_1fHI">
//                         <p className="text_dPuJ truncate-medium-2" /><button className="close_16xd">Đóng</button>
//                     </div>
//                 </div>
//                 <div className="toast_273B">
//                     <div className="content_1jb6">
//                         <p className="text_29TR truncate-medium-2" /><button className="close_2cmU">Đóng</button>
//                     </div>
//                 </div>
//                 <div>
//                     <div className="container_1Cuu">
//                         <div className="wrapper_37mb">
//                             <div className="floatingButton_1Cj1 ">
//                                 <div className="chatIconButton_Axd6">
//                                     <div className="chatIconContainer_3c2c"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" color="#FFF">
//                                         <g fill="none" fillRule="evenodd">
//                                             <path d="M2 3h16v16.707H2z" />
//                                             <path fill="#FFF" d="M4 14.879v-9.88h12v8H6.5a1.5 1.5 0 0 0-1.061.44L4 14.88zm12.5-11.88h-13A1.503 1.503 0 0 0 2 4.5v15.208L6.707 15H16.5a1.503 1.503 0 0 0 1.5-1.5v-9A1.503 1.503 0 0 0 16.5 3z">
//                                             </path>
//                                             <path fill="#FFF" d="M6.5 10.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2M9.5 10.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2M12.5 10.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2M20.5 6.5h-1v10h-11v1c0 .55.45 1 1 1h8l4 3v-14c0-.55-.45-1-1-1">
//                                             </path>
//                                         </g>
//                                     </svg></div><label>Chat</label>
//                                 </div>
//                             </div>
//                             <div className="inside_1MFb hide_bR7V">
//                                 <div className="collapseButton_2_1F hide_bR7V"><svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width={24} height={24} viewBox="0 0 24 24">
//                                     <path d="M3 11h18v2H3z" />
//                                 </svg></div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//         <div id="portal"><span className="pageLoading_27OL">
//             <div className="loading_2k34 loading_24sX"><span className="loader_mLuy" /></div>
//         </span></div>
//         {/* [version] 7.48.48 */}
//         {/* [build] e9812858 */}
//         {/* [build-time] 3/24/2022, 3:32:38 AM */}
//         {/* [end] 1649139009909 */}
//         <div id="lbdictex_find_popup" className="lbexpopup hidden" style={{ position: 'absolute', top: '0px', left: '0px' }}>
//             <div className="lbexpopup_top">
//                 <h2 className="fl popup_title">&nbsp;</h2>
//                 <ul>
//                     <li><a className="close_main popup_close" href="https://www.sendo.vn/#">&nbsp;</a></li>
//                 </ul>
//                 <div className="clr" />
//             </div>
//             <div className="popup_details" />
//             <div className="popup_powered">abc</div>
//         </div>
//         <div id="lbdictex_ask_mark" className="hidden" style={{ position: 'absolute', top: '0px', left: '0px' }}><a className="lbdictex_ask_select" href="https://www.sendo.vn/#">&nbsp;</a></div>
//         <noscript>&lt;img height="1" width="1" style="display:none"
//             src="https://www.facebook.com/tr?id=544826632319605&amp;amp;ev=PageView&amp;amp;noscript=1"&gt;</noscript><iframe src="./Thế Giới Di Động Samsung, Iphone, Máy Tính Bảng Xách Tay Giá Rẻ _ Sendo.vn_files/pixel.html" style={{ display: 'none' }} /><iframe src="./Thế Giới Di Động Samsung, Iphone, Máy Tính Bảng Xách Tay Giá Rẻ _ Sendo.vn_files/pixel(1).html" style={{ display: 'none' }} />
//         <noscript>&lt;img height="1" width="1" style="display:none"
//             src="https://www.facebook.com/tr?id=544826632319605&amp;amp;ev=PageView&amp;amp;noscript=1"&gt;</noscript>
//         <iframe src="./Thế Giới Di Động Samsung, Iphone, Máy Tính Bảng Xách Tay Giá Rẻ _ Sendo.vn_files/tags.html" style={{ display: 'none' }} />
//         <div id="criteo-tags-div" style={{ display: 'none' }} /><iframe height={0} width={0} title="Criteo DIS iframe" style={{ display: 'none' }} src="./Thế Giới Di Động Samsung, Iphone, Máy Tính Bảng Xách Tay Giá Rẻ _ Sendo.vn_files/saved_resource.html" /><iframe src="./Thế Giới Di Động Samsung, Iphone, Máy Tính Bảng Xách Tay Giá Rẻ _ Sendo.vn_files/pixel(2).html" style={{ display: 'none' }} />
//         <noscript>&lt;img height="1" width="1" style="display:none"
//             src="https://www.facebook.com/tr?id=544826632319605&amp;amp;ev=PageView&amp;amp;noscript=1"&gt;</noscript>
//         <iframe src="./Thế Giới Di Động Samsung, Iphone, Máy Tính Bảng Xách Tay Giá Rẻ _ Sendo.vn_files/tags(1).html" style={{ display: 'none' }} />
//         <iframe height={0} width={0} title="Criteo DIS iframe" style={{ display: 'none' }} src="./Thế Giới Di Động Samsung, Iphone, Máy Tính Bảng Xách Tay Giá Rẻ _ Sendo.vn_files/saved_resource(1).html" />
//     </div>
//     );
// }

// export default Sendo;